import { html, render } from 'https://unpkg.com/lit-html?module'
// import { html, render } from 'lit-html'
const articleTemplate = (article, articleClass) => html`
<article>
    <header>
        <h3>${article.title}</h3>
    </header>
    <div class=${articleClass}>
        <p>
            ${article.content}
        </p>
    </div>
    <footer>Author: ${article.author}
    <button @click=${()=>alert('you click the button')}>Edit</button>
    <button ?disabled=${!article.isOwner}>Delete</button>
    </footer>
</article>`
async function start() {
    const articles = await (await fetch('./article.json')).json();
    const main = document.getElementById('content');
    // const a = articleTemplate(articles[0], "article-content"); //for rendaring first element 
    render(articles.map(articleTemplate), main)
}
start()