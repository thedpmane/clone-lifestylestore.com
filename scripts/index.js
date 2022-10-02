import {navbar} from "../components/navbar.js"
let nvd=document.querySelector("#main");
nvd.innerHTML=navbar()


import { footer } from '../components/footer.js';

let footer_div = document.getElementById('footer');
footer_div.innerHTML = footer();