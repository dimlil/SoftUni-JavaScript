import page from './node_modules/page/page.mjs'
// import page from "//unpkg.com/page/page.mjs";

const pages = {
    '/home': '<h2>Home Page</h2><p>Home page content</p>',
    '/catalog': '<h2>Catalog Page</h2><p>Catalog page content</p>',
    '/about': '<h2>About Page</h2><p>About page content</p>'
}
const defaultPage = '<h2>404</h2><p>Page Not Found</p>'

const main = document.querySelector('main');
page('/home', updateContent)
page('/catalog', updateContent)
page('/catalog/:category/:id', itemDetails)
page('/about', updateContent)

page.redirect('/','/home')
page.start();

function updateContent(context) {
    main.innerHTML = pages[context.pathname] || defaultPage;
}
function itemDetails(context) {
    const category = context.params.category;
    const id = context.params.id;
    const html = `<h2>Item ${category}</h2><p>Details for ${id}</p>`
    main.innerHTML = html;
}