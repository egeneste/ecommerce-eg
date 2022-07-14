// Change header background on scroll

const inverted = "inverted";
const scrollTrigger = 60;

window.onscroll = function() {

  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("div")[1].classList.add(inverted);
  } else {
    document.getElementsByTagName("div")[1].classList.remove(inverted);
  }
};


// Objects

const almacen = [

    {
        id : 1,
        name: "Hoodies",
        price: 14.00,
        stock:10,
        url: "./img/featured1.png"

    },

    {
        id : 2,
        name: "Shirt",
        price: 24.00,
        stock:10,
        url: "./img/featured2.png"

    },

    {
        id : 3,
        name: "Sweatshirts",
        price: 24.00,
        stock:10,
        url: "./img/featured3.png"

    }


]

let collection = []
let cart = []
let html_collection = ""

const all = document.querySelector(".all")
const hoodies = document.querySelector(".hoodies")
const shirt = document.querySelector(".shirt")
const sweatshirt = document.querySelector(".sweatshirt")

collection.push (almacen[0])
collection.push (almacen[1])
collection.push (almacen[2])


let store = document.querySelector(".collection")



const printCard = (items) => {
    html_collection = ''
    items.forEach(({id, name, price, stock, url}) => {
        html_collection += `
        
        <div class="card" >
            <div class="ropa-img">
                <img src=${url} alt="ft">
            </div>
            <div class="card-details">
                <button data-id="${id}" class="btnmas">+</button>
                <p class="bold">$${price} | <span class="thin">Stock : ${stock}</span></p>
                <p class="bold">${name}</p>
            </div>
        </div>
        `
    })
    
    store.innerHTML = html_collection;


    // let oks = document.querySelectorAll('.btnmas')
    // console.log(oks);
}

printCard(collection)


// Add all item to collection

all.addEventListener('click', ()=> {
    printCard(almacen)
})

hoodies.addEventListener('click', ()=> {
    printCard([almacen[0]])
})

shirt.addEventListener('click', ()=> {
    printCard([almacen[1]])
})

sweatshirt.addEventListener('click', ()=> {
    printCard([almacen[2]])
})


let mayo = document.querySelector('#mayo')
let miCarrito = {}

let quantity = document.querySelector("#quantity")
mayo.addEventListener('click', (e)=> {
    cart.push(e.target.dataset.id)
    
    miCarrito = cart.reduce((accumulator, value) => {
        return {...accumulator, [value]: (accumulator[value] || 0) + 1};
      }, {});
    
    quantity.innerHTML = `${cart.length}`
})