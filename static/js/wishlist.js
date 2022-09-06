function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');

const addProduct = {
    addProductWishlist(ProductID) {
        return fetch(`${location.origin}/api/wishlist/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': csrftoken,
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                'product': [ 
                    ProductID
                ]
            })
        });
    }
}

const deleteProduct = {
    deleteProductWishlist(ProductID) {
        return fetch(`${location.origin}/api/wishlist`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': csrftoken,
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                'product': [ 
                    ProductID
                ]
            })
        });
    }
}

function functionFilter() {
    let wishlist_buttons = document.getElementsByClassName('link-wishlist');
    for (let i = 0; i < wishlist_buttons.length; i++) {
    wishlist_buttons[i].onclick = function()  {
        const ProductID = this.getAttribute('data');
        console.log(ProductID);
        addProduct.addProductWishlist(ProductID);
    }
    }
}

let delete_buttons = document.getElementsByClassName('remove-item');
for (let i = 0; i < delete_buttons.length; i++) {
  delete_buttons[i].onclick = function () {
    const ProductID = this.getAttribute('data');
    deleteProduct.deleteProductWishlist(ProductID)
  }
}

// document.querySelector('#add-wishlist').onclick = function () {
//     const ProductID = this.getAttribute('data');
//     addProduct.addProductWishlist(ProductID);
// }

const addProduct_Basket = {
    addProductBasket(ProductID) {
        return fetch(`${location.origin}/api/basket/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': csrftoken,
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                'product': [ 
                    ProductID
                ]
            })
        });
    }
}

const deleteProduct_Basket = {
    deleteProductBasket(ProductID) {
        return fetch(`${location.origin}/api/basket/`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': csrftoken,
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                'product': [ 
                    ProductID
                ]
            })
        });
    }
}


let basket_buttons = document.getElementsByClassName('ajx-cart');
for (let i = 0; i < basket_buttons.length; i++) {
  basket_buttons[i].onclick = function () {
    const ProductID = this.getAttribute('data');
    addProduct_Basket.addProductBasket(ProductID);
  }
}

let delete_buttons_basket = document.getElementsByClassName('basket-remove');
for (let i = 0; i < delete_buttons_basket.length; i++) {
    delete_buttons_basket[i].onclick = function () {
    const ProductID = this.getAttribute('data');
    console.log(ProductID);
    deleteProduct_Basket.deleteProductBasket(ProductID)
  }
}

// document.querySelector('#add-to-basket').onclick = function () {
//     const ProductID = this.getAttribute('data');
//     addProduct_Basket.addProductBasket(ProductID);
// }