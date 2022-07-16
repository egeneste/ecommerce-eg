
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
        stock: 4,
        url: "./img/featured1.png",
        temp: 0

    },

    {
        id : 2,
        name: "Shirt",
        price: 24.00,
        stock:10,
        url: "./img/featured2.png",
        temp: 0

    },

    {
        id : 3,
        name: "Sweatshirts",
        price: 24.00,
        stock:10,
        url: "./img/featured3.png",
        temp: 0

    }


]

let collection = []
let cart = []
let html_collection = ""

const all = document.querySelector(".all")
const hoodies = document.querySelector(".hoodies")
const shirt = document.querySelector(".shirt")
const sweatshirt = document.querySelector(".sweatshirt")

collection.push (...almacen)
// collection.push (almacen[1])
// collection.push (almacen[2])


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

    if (e.target.classList.contains('btnmas')) 
    {
        
        const id_ = e.target.dataset.id;
        

        let currentItem = collection.find(itm => itm.id == id_)

        if (currentItem.stock > currentItem.temp)
        {
            currentItem.temp += 1;

            cart.push(e.target.dataset.id)

        }
        else 
        {
            alert("We do not have enough in stock");
        }

        
        quantity.innerHTML = `${cart.length}`


        pintarStore()
    }
    

    
})

// Hamburger

const hamburger = document.querySelector('.hamburger')
const navmenu = document.querySelector('.navbar-items')

hamburger.addEventListener('click', ()=> {
    navmenu.classList.toggle("hidden")
})




//  carrito
const chariot = document.querySelector("#chariot")

const carrito_btn = document.querySelector(".carrito_btn")

const empty_cart = document.querySelector(".empty-cart")


const checkout_items = document.querySelector('.checkout-items')


const pintarStore = () => {

    let mesChemise_html = "" 
    let total = 0


    if (cart.length > 0)
    {
        empty_cart.style.display = "none";
        miCarrito = cart.reduce((accumulator, value) => {
            return {...accumulator, [value]: (accumulator[value] || 0) + 1};
          }, {});
    
        for (const [key, value] of Object.entries(miCarrito)) {
            
    
            let {id, name, price, stock, url} = collection.find(chms => chms.id == key)
    
            // let currentItem = collection.find(itm => itm.id == id)
    
            // currentItem.temp = value
    
     
    
            const subtotal_ = price *  value
    
            total += subtotal_
            
            mesChemise_html += `
            
            
            <div class="articulo">
                <div class="articulo_img">
                    <img src=${url} alt="yes">
                </div>
                <div class="articulo_details">
                    <p class="title"></p>
                    <p>Stock: ${stock} | <span>$ ${price}</span></p>
                    <p class="importante">Subtotal: ${subtotal_}</p>
                    
                    <div class="add_mayo">
                        <button data-id='${id}' class="add">+</button>
                        <p class="unite" id='${id}'>${value} Units</p>
                        <button data-id='${id}' class="res">-</button>
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

    else {
        let mesChemise_html = "" 
        checkout_items.innerHTML = mesChemise_html
        empty_cart.style.display = "block"
    }
    
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

const chk_items = document.querySelector('#chk_items')

chk_items.addEventListener("click", (e)=> {
    
    
    if (e.target.classList.contains('add'))
    {   
        const id_ = e.target.dataset.id
        let cantItem = document.getElementById(id_)

        let currentItem = collection.find(itm => itm.id == id_)

        

        if (currentItem.stock > currentItem.temp)
        {
            currentItem.temp += 1;
            cart.push(id_)
            // letdocument.getElementById(id_).textContent = ` ${currentItem.temp} unit`
        }
        else 
        {
            alert("We do not have enough in stock");
        }
        cantItem.textContent = ` ${currentItem.temp} unit`
    }
    else if (e.target.classList.contains('res'))
    {
        const id_ = e.target.dataset.id
        let cantItem = document.getElementById(id_)

        let currentItem = collection.find(itm => itm.id == id_)

        if ( currentItem.temp > 1)
        {
            currentItem.temp -= 1;
            let indx = cart.indexOf(id_)
            cart.splice(indx, 1)
            
            // let cantItm = document.getElementById(id_)
            // carrito_btn.textContent = currentItem.temp;
            cantItem.textContent = ` ${currentItem.temp} unit`
            console.log('minus', cart, cart.length, indx);
            
        }
        else if ( currentItem.temp = 1)
        {
            currentItem.temp -= 1;
            let indx = cart.indexOf(id_)
            // cart.splice(indx, 1)

            cart = cart.filter(i => i != id_)
            console.log('mi cart', cart);
            
        }

        // cantItem.textContent = ` ${currentItem.temp} unit`
        console.log(cart.length);
    }

    quantity.innerHTML = `${cart.length}`
    

    pintarStore()
})


////// 

document.querySelector('#chk_items').addEventListener("click", (e)=> {
    console.log(e.target);

    if (e.target.classList.contains('btn_buy'))
    {
        cart = []
        console.log(cart, 'eso');
        quantity.innerHTML = `${cart.length}`;
        pintarStore()
    }

})


document.querySelector("#menulinks").addEventListener("click", (e)=> {
    if (e.target.classList.contains("navbar-item__link"))
    {
        navmenu.classList.toggle("hidden")
    }
})