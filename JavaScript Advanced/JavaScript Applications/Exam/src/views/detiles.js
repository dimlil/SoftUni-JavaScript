import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllMemes, getCurrentMeme } from '../crud.js';

let homeTemplate = (article) => html`
<section id="details-page" class="content details">
    <h1>Arrays</h1>

    <div class="details-content">
        <strong>Published in category ${article.category}</strong>
        <p>${article.content}</p>

        <div class="buttons">
       
 ${article._ownerId== sessionStorage.getItem('userId') ? html`<a href="javascript:void(0)" class="btn delete">Delete</a>` : ""}
 ${article._ownerId== sessionStorage.getItem('userId')?  html`<a href="/edit/${article.id}" class="btn edit">Edit</a>` : ""}
        <a href="/" class="btn edit">Back</a>
        </div>
    </div>
</section>`

export async function detalesPage(context) {
    // let allArticlesFromApi = await getAllMemes();
    // console.log(allArticlesFromApi);

    const articleId = context.params.id;
    const currentArticle = await getCurrentMeme(articleId);
    console.log(currentArticle);
    context.render(homeTemplate(currentArticle));
    // document.getElementsByClassName('btn delete')[0].addEventListener('click',()=>{
    //     console.log('click');
    // })
}