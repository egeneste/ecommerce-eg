
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

// Hamburger

const hamburger = document.querySelector('.hamburger')
const navmenu = document.querySelector('.navbar-items')

hamburger.addEventListener('click', ()=> {
    navmenu.classList.toggle("hidden")
})



// const menulinks = document.querySelector("#menulinks");

// menulinks.addEventListener("click", ()=> {
//     navmenu.classList.toggle("hidden")
// })



//  carrito
const chariot = document.querySelector("#chariot")

const carrito_btn = document.querySelector(".carrito_btn")

const empty_cart = document.querySelector(".empty-cart")


const checkout_items = document.querySelector('.checkout-items')


const pintarStore = () => {

    let mesChemise_html = "" 
    let total = 0
    for (const [key, value] of Object.entries(miCarrito)) {
        

        let machemise = almacen.find(chms => chms.id == key)

        const subtot = machemise.price *  value

        total += subtot
        
        mesChemise_html += `
        
        
        <div class="articulo">
        <div class="articulo_img">
            <img src=${machemise.url} alt="yes">
        </div>
        <div class="articulo_details">
            <p class="title"></p>
            <p>Stock: ${machemise.stock} | <span>$ ${machemise.price}</span></p>
            <p class="importante">Subtotal: ${subtot}</p>
            
            <div class="add_mayo">
                <button >+</button>
                <p>${value} Units</p>
                <button>-</button>
            </div>
        </div>
        
    </div>
        
        
        `
    
      }


      mesChemise_html += `
      
        <div class="checkout_sumurise">
            <p id="total_item">${cart.length}</p>
            <p class="total_price">$${total}</p>
        </div>

        <button class="btn_buy">
            Checkout
        </button>
      
      `
      checkout_items.innerHTML = mesChemise_html

      document.querySelector("#total_item").textContent = cart.length
}

carrito_btn.addEventListener("click", ()=> {
    chariot.classList.toggle("hidden")
    

    if (cart.length !=0)
    {

        
        empty_cart.style.display = "none";
        
        pintarStore();

    } 


    
    
})

const btn_close = document.querySelector(".btn_close")

btn_close.addEventListener("click", ()=> {
    chariot.classList.toggle("hidden")

})

// checkout

