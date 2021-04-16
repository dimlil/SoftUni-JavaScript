import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllCatalogArticles, getAllMemes, getCurrentMeme } from '../crud.js';

let homeTemplate = (article) => html`
<section id="catalog-page" class="content catalogue">
    <h1>All Articles</h1>
    ${article.length == 0 ? html`<h3 class="no-articles">No articles yet</h3>` : article.map(articleTempalte)}
    <!-- No articles message -->
    
</section>`

const articleTempalte = (article) => html`<a class="article-preview" href="/details/${article._id}">
    <article>
        <h3>Topic: <span>${article.title}</span></h3>
        <p>Category: <span>${article.category}</span></p>
    </article>
</a>`

export async function catalogPage(context) {
    const articles = await getAllCatalogArticles()
    // const currentArticle = await getCurrentMeme(articleId);
    console.log(articles);
    context.render(homeTemplate(articles));
}