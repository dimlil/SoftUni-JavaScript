import { html } from '../node_modules/lit-html/lit-html.js';
import { register } from '../src/api/api.js';

let registrationTemplate = (onSubmit) => html`
<section @submit=${onSubmit} id="register-page" class="register">
    <form id="register-form" action="" method="">
        <fieldset>
            <legend>Register Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>`

export function registrationPage(context) {
    context.render(registrationTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const email = formData.get('email')
        const password = formData.get('password')
        const rePassword = formData.get('confirm-pass')
        try {

            if (email == '' || password == '' || rePassword == '') {
                throw new Error('All fields are requierd!')
            }
            if (password != rePassword) {
                throw new Error('Please enter matching passwords!')
            }
            await register(email, password);
            context.page.redirect('/');
        } catch (err) {
            alert(err.message);
        }
    }
}