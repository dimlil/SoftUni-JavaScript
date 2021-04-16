import { render } from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'


import { loginPage } from './views/login.js'
import { homePage } from './views/home.js';

import { logoutUser } from './crud.js';
import { registrationPage } from './views/registration.js';
import { createPage } from './views/create.js';
import { detalesPage } from './views/detiles.js';
import { catalogPage } from './views/catalog.js';

const main = document.getElementsByTagName('main')[0]

navigation();

page('/', middle, homePage );
page('/login', middle, loginPage);
page('/register', middle, registrationPage);
page('/create', middle, createPage);
page('/catalog', middle, catalogPage);
page('/details/:id', middle, detalesPage);
page.start()

function navigation() {
    let email = sessionStorage.getItem("email");
    if (email == null) {
        document.querySelector('div #user').style.display = 'none'
        document.querySelector('div #guest').style.display = ''
    } else {
        document.querySelector('div #user').style.display = ''
        document.querySelector('div #guest').style.display = 'none'
    }
}
function middle(ctx, next) {
    ctx.render = (data) => render(data, main);
    // ctx.navigation = navigation;
    navigation();
    next();
}
function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}
document.getElementById('logout').addEventListener('click', async () =>{
    await logoutUser();
    navigation;
    page.redirect('/');
});