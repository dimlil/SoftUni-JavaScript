import page from '../node_modules/page/page.mjs'
import { render } from '../node_modules/lit-html/lit-html.js'

import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';

const main = document.querySelector('main');
setUserNav()

page('/', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const token = sessionStorage.getItem('authorization');
    if (token != null) {
        document.querySelector('.user').style.display = ''
        document.querySelector('.guest').style.display = 'none'
    } else {
        document.querySelector('.user').style.display = 'none'
        document.querySelector('.guest').style.display = ''
    }
}