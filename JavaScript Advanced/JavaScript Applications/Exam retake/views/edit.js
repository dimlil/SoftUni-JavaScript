import { html } from '../node_modules/lit-html/lit-html.js';
import { editById, getById } from '../src/api/data.js';

let editTemplate = (pet, onSubmit) => html`        
<section id="edit-page" class="edit" @submit=${onSubmit}>
    <form id="edit-form" action="#" method="">
        <fieldset>
            <legend>Edit my Pet</legend>
            <p class="field">
                <label for="name">Name</label>
                <span class="input">
                    <input type="text" name="name" id="name" value=${pet.name}>
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description">${pet.description}</textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" value=${pet.imageUrl}>
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" value=${pet.type}>
                    ${pet.type=='cat'?html`<option value="cat" selected>Cat</option>`:html`<option value="cat">Cat</option>`}
                    ${pet.type=='dog'?html`<option value="dog" selected>Dog</option>`:html`<option value="dog">Dog</option>`}
                    ${pet.type=='parrot'?html`<option value="parrot" selected>Parrot</option>`:html`<option value="parrot">Parrot</option>`}
                    ${pet.type=='reptile'?html`<option value="reptile" selected>Reptile</option>`:html`<option value="reptile">Reptile</option>`}
                    ${pet.type=='other'?html`<option value="other" selected>Other</option>`:html`<option value="other">Other</option>`}
                        <!-- <option value="cat">Cat</option>
                        <option value="dog">Dog</option>
                        <option value="parrot">Parrot</option>
                        <option value="reptile">Reptile</option>
                        <option value="other">Other</option> -->
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>`

export async function editPage(context) {
    const pet = context.params.id;
    const currentPet = await getById(pet);

    context.render(editTemplate(currentPet, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const name = formData.get('name')
        const description = formData.get('description')
        const imgUrl = formData.get('imageUrl')
        const type = formData.get('type')
        console.log(name);
        console.log(description);
        console.log(imgUrl);
        console.log(type);
        try {
            if (name == '' || description == '' || imgUrl == '' || type == '') {
                throw new Error('All fields are requierd!')
            }
            await editById(pet, name, description, imgUrl, type)
            context.page.redirect(`/details/${pet}`);
        } catch (err) {
            alert(err.message);
        }
    }
}