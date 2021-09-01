import { html } from '../node_modules/lit-html/lit-html.js'
import { getMyPets } from '../src/api/data.js'
const profileTempalte = (pets) => html`<!-- Dashboard Page ( for Guests and Users ) -->
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All pets (If any) -->
    <ul class="other-pets-list">
        ${pets.length > 0 ? pets.map(petTempalte) : ''}
    </ul>
    ${pets.length == 0 ? html`<p class="no-pets">No pets in database!</p>` : ''}
    <!-- Display paragraph: If there are no pets in the database -->

</section>`
const petTempalte = (pet) => html`

        <li class="otherPet">
            <h3>Name: ${pet.name}</h3>
            <p>Type: ${pet.type}</p>
            <p class="img"><img src=${pet.imageUrl}></p>
            <a class="button" href="/details/${pet._id}">Details</a>
        </li>`

export async function profilePage(ctx) {
    const user = sessionStorage.getItem('user')
    let userId = ''
    if (user) {
        userId = JSON.parse(user)._id
    }

    const pets = await getMyPets(userId);
    console.log(pets);
    ctx.render(profileTempalte(pets))
}