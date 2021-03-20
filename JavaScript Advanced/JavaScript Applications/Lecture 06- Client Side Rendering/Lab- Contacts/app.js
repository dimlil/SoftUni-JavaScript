import { render } from './node_modules/lit-html/lit-html.js'
import { contacts } from './contacts.js'
import {cardTemplate} from './card.js'

const conteiner = document.getElementById('contacts');
const result = contacts.map(cardTemplate);
render(result, conteiner)
