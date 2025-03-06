fetch("JS/items.json")
.then(response => response.json())
.then(data => {
    const products_dev = document.querySelector(".products_dev")

    all_products_json = data;
    
    products_dev.innerHTML = '';
    data.forEach(element => {
        const Present = Math.floor((element.old_price - element.price) / element.old_price * 100);
        all_products_json = data
        products_dev.innerHTML += `
            <div class="product All_products_product">
                <div class="sale-present">%${Present}</div>
                <div class="icons">
                    <i onclick = "AddToCart(${element.id} , this)" class="fa-solid fa-cart-plus"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-share"></i>
                </div>
                <div class="product_img">
                    <img class="front-img" src="${element.img}" alt="">
                    <img class="back-img" src="${element.img_hover}" alt="">
                </div>
                <h3>${element.name}</h3>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="price">
                    <div class="new-price">
                        $${element.price}
                    </div>
                    <div class="old-price">$${element.old_price}</div>
                </div>
            </div>
        `;
    });
})

var filter = document.querySelector(".all_products .filter")
function open_close_filter(){
    filter.classList.toggle("active")
}