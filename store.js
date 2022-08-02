if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i=0; i<removeCartItemButtons.length; i++)
{ var button=removeCartItemButtons[i]
    button.addEventListener('click' ,removeCartItem)
}

var quantityInputs = document.getElementsByClassName('input')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}
var hearts = document.getElementsByClassName('like');

}
for(let i = 0 ; i < hearts.length ; i++)
{
    hearts[i].addEventListener('click', function onClick() {
          
        if(hearts[i].style.color === 'red')
        {
            hearts[i].style.color = 'black';
        }
        else
            hearts[i].style.color = 'red';
    });
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}
function removeCartItem(event){
    var buttonClicked=event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}



function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartItem =cartItemContainer.getElementsByClassName('cart-item')
    var total=0
    for (var i=0; i<cartItem.length; i++){
    var cartitem = cartItem[i]
    var PriceElement=cartitem.getElementsByClassName('cart-item-price')[0]
    var QuantityElement=cartitem.getElementsByClassName('input')[0]
    var price = parseFloat(PriceElement.innerText.replace('$', ''))
    var quantity = QuantityElement.value
    total = total + (price * quantity )
}
document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}   