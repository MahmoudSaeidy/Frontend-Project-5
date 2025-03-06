let exitCart = document.querySelector(".exitCart");
let shoppingCart = document.querySelector(".shopping-cart");
let iconToOpenCart = document.querySelector(".cart-header i")



function openCart() {
    let shoppingCart = document.querySelector(".shopping-cart");
    if (window.innerWidth <= 500) {
        shoppingCart.style.width = "100%";
    } else {
        shoppingCart.style.width = "350px";
    }
}

function closeCart(){
    shoppingCart.style.width = "0px"
}

/*Add item in cart*/
let countItem = document.querySelector(".count-item")
let totalP = document.querySelector(".price_cart_Head")
let cartBottom = document.querySelector(".cart-bottom span")
let titleCart = document.querySelector(".head-cart .title");

var all_products_json;

let TotalPrice
var cartItems = document.querySelector(".cart-items");
let productCart = [];
function AddToCart(id , btn){
    if(!(btn.classList.contains("active"))){
        productCart.push(all_products_json[id])
    }
    
    btn.classList.add("active")
    getCartItems()
}
function getCartItems(){
    cartItems.innerHTML = "";
    let C_item = "";
    TotalPrice = 0;
    for(i = 0 ; i < productCart.length ; i++){
        C_item += `
        <div class="item">
        <img src="${productCart[i].img}" alt="">
        <div class="item-info">
            <h4>${productCart[i].name}</h4>
            <p>$${productCart[i].price}</p>
        </div> 
        <button onclick = "removeFromCart(${i})" class = "delete"><i class = "fa-solid fa-trash-can"></i></button>
        </div>`
        TotalPrice += productCart[i].price
        cartItems.innerHTML = C_item
        countItem.innerHTML = productCart.length
        totalP.innerHTML = cartBottom.innerHTML = `$${TotalPrice}`
        titleCart.innerHTML = `(${productCart.length} item in cart)`

    }
    
}
function removeFromCart(index){
    productCart.splice(index,1)
    getCartItems()
    countItem.innerHTML = productCart.length
    totalP.innerHTML = cartBottom.innerHTML = `$${TotalPrice}`
    titleCart.innerHTML = `(${productCart.length} item in cart)`
}
// Back To Top 

let backToTop = document.querySelector(".back_to_top")

backToTop.addEventListener("click" , function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

//open menu & close menu

let btnMenu = document.querySelector("#menu")
console.log(btnMenu)
function openMenu() {
    btnMenu.classList.add("active")
}
function closeMenu() {
    btnMenu.classList.remove("active")}

/*Change Image*/
let mainImage = document.querySelector(".mainImage");

function ChangeImage(imageSRC) {
    // التلاشي للصورة الكبيرة
    mainImage.style.opacity = 0;
    
    // بعد التأكد من أن التلاشي تم، تغيير المصدر
    setTimeout(function() {
        mainImage.src = imageSRC.src;
        mainImage.style.opacity = 1; // إعادة إظهار الصورة بشكل سلس
    }, 100); // يجب أن يكون نفس الوقت الذي في CSS (transition)
}
