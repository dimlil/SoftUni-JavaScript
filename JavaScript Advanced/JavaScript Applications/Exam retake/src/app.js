import { render } from '../node_modules/lit-html/lit-html.js'
// import * as api from './api/api.js'
import page from '../node_modules/page/page.mjs'
import { getUserData } from './utility.js'
import { homePage } from '../views/home.js'
import { logout } from './api/api.js'
import { loginPage } from '../views/login.js'
import { registrationPage } from '../views/register.js'
import { createPage } from '../views/create.js'
import { detalesPage } from '../views/details.js'
import { editPage } from '../views/edit.js'
import { profilePage } from '../views/profile.js'

const main = document.getElementById('site-content')
setUserNav()

page('/', decorateContext, homePage)
page('/login', decorateContext, loginPage)
page('/register', decorateContext, registrationPage)
page('/createPet', decorateContext, createPage)
page('/details/:id', decorateContext, detalesPage)
page('/edit/:id', decorateContext, editPage)
page('/profile', decorateContext, profilePage)

page.start()

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main)
    // ctx.setUserNav = setUserNav;
    setUserNav()
    ctx.user = getUserData();

    next();
}
function setUserNav() {
    const user = getUserData();
    console.log(user);
    if (user) {
        document.getElementById('user').style.display = ''
        document.getElementById('guest').style.display = 'none'
        document.getElementById('username').textContent = `Welcome, ${user.email}`
    } else {
        document.getElementById('guest').style.display = ''
        document.getElementById('user').style.display = 'none'
    }
}
document.getElementById('logout').addEventListener('click', async () => {
    await logout()
    setUserNav();
    page.redirect('/');
});