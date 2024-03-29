import { html } from '../node_modules/lit-html/lit-html.js';
import { create } from '../src/api/data.js';

let createTemplate = (onSubmit) => html`<section id="create-page" class="create">
    <form id="create-form" action="" method="" @submit=${onSubmit}>
        <fieldset>
            <legend>Add new Pet</legend>
            <p class="field">
                <label for="name">Name</label>
                <span class="input">
                    <input type="text" name="name" id="name" placeholder="Name">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description" placeholder="Description"></textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" placeholder="Image">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type">
                        <option value="cat">Cat</option>
                        <option value="dog">Dog</option>
                        <option value="parrot">Parrot</option>
                        <option value="reptile">Reptile</option>
                        <option value="other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Add Pet">
        </fieldset>
    </form>
</section>`

export async function createPage(context) {
    context.render(createTemplate(onSubmit));

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
            await create(name, description, imgUrl, type)
            context.page.redirect('/');
        } catch (err) {
            alert(err.message);
        }
    }
}