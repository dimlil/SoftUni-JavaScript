import { render } from '../node_modules/lit-html/lit-html.js'
import * as api from './api/api.js'
import page from '../node_modules/page/page.mjs'
import { getUserData } from './utility.js'
import { homePage } from '../views/home.js'

const main = document.getElementById('site-content')
setUserNav()

page('/', decorateContext, homePage)

page.start()

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main)
    ctx.setUserNav = setUserNav;
    ctx.user = getUserData();

    next();
}
function setUserNav() {
    const user = getUserData();
    if (user) {
        document.getElementById('profile').style.display = ''
        document.getElementById('guest').style.display = 'none'
        document.getElementById('user').textContent = `Welcome ${user.username}`
    } else {
        document.getElementById('guest').style.display = ''
        document.getElementById('profile').style.display = 'none'
    }

}