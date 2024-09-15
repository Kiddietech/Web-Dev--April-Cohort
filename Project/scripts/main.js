
document.addEventListener('DOMContentLoaded', function (event) {

    const showClose = document.getElementById('nav-icon');
    const showMenu = document.getElementById('menu');

    showClose.addEventListener('click', function () {
        showMenu.classList.toggle('show-menu');
        showClose.classList.toggle('show-close');
    });

    const addCartButton = document.querySelectorAll('#Add-to-cart'); 
    const cartNumber = document.querySelector('#cart-number');
    const showRemoveCart = document.querySelectorAll('#Remove-from-cart');

    let updateCartNumber = 0;
    cartNumber.innerHTML = updateCartNumber;

    for (let i = 0; i < addCartButton.length; i++) {
        addCartButton[i].addEventListener('click', function() {
            updateCartNumber++; 
            cartNumber.innerHTML = updateCartNumber; 
            showRemoveCart[i].style.display = 'block';
            alert('item added to cart');
        });
    }

    for (let i = 0; i < showRemoveCart.length; i++) {
        showRemoveCart[i].addEventListener('click', function () {

            if (updateCartNumber > 0) {
                updateCartNumber--; 
                cartNumber.innerHTML = updateCartNumber;
                alert('item removed from cart');
            }

            if (updateCartNumber == 0) {
                showRemoveCart[i].style.display = 'none';
                alert('Cart is empty\nAdd more items to cart');
            }

        });
    }
});



