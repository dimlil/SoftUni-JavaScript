import { renderTemlate } from './engine.js'
async function start() {
    const articles = await (await fetch('./article.json')).json();

    const articleTempalte = await (await fetch('./article.html')).text();

    const main = document.getElementById('content');
    main.innerHTML = articles.map(article => renderTemlate(articleTempalte, article)).join('');
}
start()