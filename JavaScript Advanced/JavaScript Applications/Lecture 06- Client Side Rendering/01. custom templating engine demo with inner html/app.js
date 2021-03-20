import createArticle from "./article.js"
async function start() {
    const articles = await (await fetch('./article.json')).json();
    const main=document.getElementById('content');
    main.innerHTML=articles.map(createArticle).join('');
}
start()