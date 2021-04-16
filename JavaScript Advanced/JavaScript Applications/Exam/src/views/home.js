import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllMemes } from '../crud.js';

let homeTemplate = (article) => html`
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
    ${article.length == 0 ? html`<section class="recent python"><h2>JavaScript</h2>
    <h3 class="no-articles">No articles yet</h3></section><section class="recent python"><h2>C#</h2>
    <h3 class="no-articles">No articles yet</h3></section><section class="recent python"><h2>Java</h2>
    <h3 class="no-articles">No articles yet</h3></section><section class="recent python"><h2>Python</h2>
    <h3 class="no-articles">No articles yet</h3></section>` : article.map(articleCard)}
</section>`

// ${article.length == 0 ? html`<section class="recent python">
//         <h2>${article.category}</h2>
//         <h3 class="no-articles">No articles yet</h3>
//     </section>` :article.map(articleCard)}

let articleCard = (article) => html`
${article.content.length > 0 ? html`
<section class="recent js">
    <h2>${article.category}</h2>
    <article>
        <h3>${article.title}</h3>
        <p>${article.content}</p>
        <a href="/details/${article._id}" class="btn details-btn">Details</a>
    </article>
</section>`: html`<section class="recent python">
    <h2>${article.category}</h2>
    <h3 class="no-articles">No articles yet</h3>
</section>`}`

export async function homePage(context) {
    let allArticlesFromApi = await getAllMemes();
    console.log(allArticlesFromApi);

    // context.render(homeTemplate([
    //     {
    //         "_id": "1001",
    //         "_ownerId": "0001",
    //         "title": "title1",
    //         "category": "JavaScript",
    //         "content": "content1"
    //     },
    //     {
    //         "_id": "1002",
    //         "_ownerId": "0002",
    //         "title": "title2",
    //         "category": "C#",
    //         "content": "content2"
    //     },
    //     {
    //         "_id": "1003",
    //         "_ownerId": "0002",
    //         "title": "title3",
    //         "category": "Java",
    //         "content": "content3"
    //     },
    //     {
    //         "_id": "1004",
    //         "_ownerId": "0002",
    //         "title": "title4",
    //         "category": "Python",
    //         "content": "content4"
    //     },
    //     {
    //         "_id": "1005",
    //         "_ownerId": "0002",
    //         "title": "title5",
    //         "category": "JavaScript",
    //         "content": "content5"
    //     }
    // ].slice(0, 2)));
    context.render(homeTemplate(allArticlesFromApi));
}