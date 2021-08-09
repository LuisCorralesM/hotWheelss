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

const setLike = objeto => {
    const boton = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        cantidad: 0
    }

    if (like.hasOwnProperty(boton.id)) {
        boton.cantidad = like[boton.id].cantidad + 1;
        objeto.querySelector('#like').textContent = boton.cantidad;
    }

    like[boton.id] = {...boton};

    console.log(like[boton.id]);
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
    const boton = {
        id: object.querySelector('.btn-white').dataset.id,
        cantidad: 0
    }

    if (disLike.hasOwnProperty(boton.id)) {
        boton.cantidad = disLike[boton.id].cantidad + 1;
        object.querySelector('#disLike').textContent = boton.cantidad;
    }

    disLike[boton.id] = {...boton};

    console.log(disLike[boton.id]);
}
    
    
    if(like[boton.id].cantidad > 0){
        if (disLike.hasOwnProperty(boton.id)) {
        disLike[boton.id].cantidad = disLike[boton.id].cantidad;
        boton.cantidad = disLike[boton.id].cantidad -= 1;
        object.querySelector('#disLike').textContent = boton.cantidad;
        } 

        disLike[boton.id] = {...boton};

    console.log(disLike[boton.id]);
    }

    if(like[boton.id].cantidad != 0){
        if (like.hasOwnProperty(boton.id)) {
        boton.cantidad = like[boton.id].cantidad -= 1;
        object.querySelector('#like').textContent = boton.cantidad;
    }

    like[boton.id] = {...boton};

    console.log(like[boton.id]);
    }
    

    
}