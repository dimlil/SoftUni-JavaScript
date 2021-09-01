import { html } from '../node_modules/lit-html/lit-html.js';
import { login } from '../src/api/api.js';

let loginTemplate = (onSubmit) => html`
<section id="login-page" class="login">
    <form id="login-form" action="" method="" @submit=${onSubmit}>
        <fieldset>
            <legend>Login Form</legend>
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
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
</section>
`
export function loginPage(context) {
    context.render(loginTemplate(onSubmit));
    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const email = formData.get('email')
        const password = formData.get('password')
        console.log(email);
        console.log(password);
        try {

            if (email == '' || password == '') {
                throw new Error('All fields are requierd!')
            }

            await login(email, password);
            context.page.redirect('/');
        } catch (err) {
            alert(err.message);
        }
    }
}