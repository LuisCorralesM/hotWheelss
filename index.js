import { data } from './data/data.js';

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let like = [], disLike = [];

document.addEventListener('DOMContentLoaded', () => {
    loadData(data);
})


const loadData = data => {
    data.forEach(personaje => {
        const { id, name, image } = personaje;
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src', image);
        templateCard.querySelector('.btn-dark').dataset.id = id;
        templateCard.querySelector('.btn-white').dataset.id = id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    // appendChild agrega un nodo al final de la lista
    items.appendChild(fragment);
}

items.addEventListener('click', e => {
    addLike(e);
})

const addLike = e => {
    //que contenga btn dark y devuelve true
    if (e.target.classList.contains('btn-dark')) {
        //captura todos los elementos de la target
        setLike(e.target.parentElement);
    }
}

const setLike = object => {
    const label = object.querySelector('#like')
    let cantidad = Number(label.textContent) || 0
    cantidad++
    label.textContent = cantidad
  }

//disLike   

items.addEventListener('click', a => {
    adddisLike(a);
})

const adddisLike = a => {
    //que contenga btn dark y devuelve true
    if (a.target.classList.contains('btn-white')) {
        //captura todos los elementos de la target
        setdisLike(a.target.parentElement);
    }
}

const setdisLike = object => {
    const label = object.querySelector('#disLike')
    let cantidad = Number(label.textContent) || 0
    cantidad++
    label.textContent = cantidad
  }