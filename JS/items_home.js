fetch("JS/items.json")
.then(response => response.json())
.then(data => {
    const swiper_item_sale = document.getElementById("swiper_item_sale");
    
    const swiper_products = document.getElementById("other_product_swiper")

    const swiper_products2 = document.getElementById("other_product_swiper2")

    all_products_json = data;
    
    swiper_item_sale.innerHTML = '';
    data.forEach(element => {
        const Present = Math.floor((element.old_price - element.price) / element.old_price * 100);
        all_products_json = data
        swiper_item_sale.innerHTML += `
            <div class="product swiper-slide">
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
                <h3 onclick = "window.document.location.href = './item.html'">${element.name}</h3>
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
    data.forEach(element => {
        const Present = Math.floor((element.old_price - element.price) / element.old_price * 100);
        all_products_json = data
        swiper_products.innerHTML += `
            <div class="product swiper-slide">
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
                <h3 onclick = "window.document.location.href = './item.html'">${element.name}</h3>
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
    data.forEach(element => {
        const Present = Math.floor((element.old_price - element.price) / element.old_price * 100);
        all_products_json = data
        swiper_products2.innerHTML += `
            <div class="product swiper-slide">
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
                <h3 onclick = "window.document.location.href = './item.html'">${element.name}</h3>
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

    new Swiper(".sale-sec", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        slidesPerView: 5,
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        breakpoints:{
            1600:{
              slidesPerView : 5,
            },
            1200:{
              slidesPerView : 4,
            },
            700:{
              slidesPerView : 3,
            },
            50:{
              slidesPerView : 2,
            },
          }
        
    });

})
.catch(error => console.error("Error fetching data:", error));
