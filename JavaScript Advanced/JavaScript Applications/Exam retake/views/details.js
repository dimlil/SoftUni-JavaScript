import { html } from '../node_modules/lit-html/lit-html.js';
import { deleteById, getById } from '../src/api/data.js';

let homeTemplate = (pet, userId) => html`
<section id="details-page" class="details">
    <div class="pet-information">
        <h3>Name: ${pet.name}</h3>
        <p class="type">Type: ${pet.type}</p>
        <p class="img"><img src=${pet.imageUrl}></p>
        <div class="actions">
            <!-- Edit/Delete buttons ( Only for creator of this pet )  -->
            ${pet._ownerId == userId ? html`<a href="javascript:void(0)" id="delete" class="button">Delete</a>` : ""}
            ${pet._ownerId == userId ? html`<a href="/edit/${pet._id}" class="button">Edit</a>` : ""}
            <!-- <a class="button" href="#">Edit</a> -->
            <!-- <a class="button" href="#">Delete</a> -->

            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current pet ) -->
            ${pet._ownerId == userId ? '' : html`<a class="button" href="#">Like</a>`}
            <!-- <a class="button" href="#">Like</a> -->

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="pet-description">
        <h3>Description:</h3>
        <p>${pet.description}</p>
    </div>
</section>`

export async function detalesPage(context) {
    const user = sessionStorage.getItem('user')
    let userId = ''
    if (user) {
        userId = JSON.parse(user)._id
    }

    const pet = context.params.id;
    const currentPet = await getById(pet);
    console.log(currentPet);
    context.render(homeTemplate(currentPet, userId));

    document.getElementById('delete').addEventListener('click', async () => {
        const conf=confirm("Are you sure you want to delete this post")
        if (conf) {
            await deleteById(pet)
            context.page.redirect('/')
        }
    })
}
