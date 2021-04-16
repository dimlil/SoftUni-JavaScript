import { html } from '../../node_modules/lit-html/lit-html.js';
import { createMeme } from '../crud.js';

let createTemplate = (onSubmit) => html`
<section id="create-page" class="content">
    <h1>Create Article</h1>

    <form id="create" @submit=${onSubmit} action="#" method="">
        <fieldset>
            <p class="field title">
                <label for="create-title">Title:</label>
                <input type="text" id="create-title" name="title" placeholder="Enter article title">
            </p>

            <p class="field category">
                <label for="create-category">Category:</label>
                <input type="text" id="create-category" name="category" placeholder="Enter article category">
            </p>
            <p class="field">
                <label for="create-content">Content:</label>
                <textarea name="content" id="create-content"></textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Create">
            </p>

        </fieldset>
    </form>
</section>`

export async function createPage(context) {
    context.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const title = formData.get('title')
        const category = formData.get('category')
        const content = formData.get('content')
        console.log(title);
        console.log(category);
        console.log(content);
        try {

            if (title == '' || category == '' || content == '') {
                throw new Error('All fields are requierd!')
            }

            await createMeme(title, category, content)
            context.page.redirect('/');
        } catch (err) {
            alert(err.message);
        }
    }
}