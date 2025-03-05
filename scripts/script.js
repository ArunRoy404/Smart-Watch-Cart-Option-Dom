let imgPath, color, size, perPrice, quantity;


// color Selection 
// document.getElementById('color-container').addEventListener('click',function(event){
//     const btn = event.target
//     if(btn.classList.contains('color-btn')){
//         color = btn.value
//         btn.classList.remove('border-gray-400')
//         btn.classList.add('border-purple-400')
//     }
// })

// const colorButtons = document.querySelectorAll('.color-btn')
// for(let i = 0; i<colorButtons.length; i++){
//     colorButtons[i].addEventListener('click',function(event){
//         color = event.target.value
//         for(let j=0; j<colorButtons.length;j++){
//             if(colorButtons[i]===colorButtons[j]){
//                 colorButtons[j].classList.remove('border-gray-400')
//                 colorButtons[j].classList.add('border-purple-400')
//             }else{
//                 colorButtons[j].classList.add('border-gray-400')
//                 colorButtons[j].classList.remove('border-purple-400')
//             }
//         }
//         console.log(color)
//     })
// }

//  const colorButtons = document.querySelectorAll('.color-btn')
//  for(const colorBtn of colorButtons){
//      colorBtn.addEventListener('click',function(event){
//          color = colorBtn.value
//          for(const colorBtn2 of colorButtons){
//              if(colorBtn === colorBtn2){
//                  colorBtn2.classList.remove('border-gray-400')
//                  colorBtn2.classList.add('border-purple-400')
//              }else{
//                  colorBtn2.classList.remove('border-purple-400')
//                  colorBtn2.classList.add('border-gray-400')
//              }
//          }
//      })
//  }

 
// document.getElementById('color-container').addEventListener('click', function (event) {
//     const btn = event.target
//     const buttonList = document.querySelectorAll('.color-btn')
//     if (btn.classList.contains('color-btn')) {
//         for (const button of buttonList) {
//             button.classList.remove('border-purple-400')
//         }
//         color = btn.value
//         btn.classList.add('border-purple-400')
//         const img = document.getElementById('product-img')
//         imgPath = "assets/images/" + color + ".png"
//         img.src = imgPath
//     }
// })


// select the first color and img initially 
let LastSelectedColor = document.querySelector('.color-btn')
color = LastSelectedColor.value
LastSelectedColor.classList.add('border-purple-400')
imgPath = "assets/images/" + color + ".png"
// color Selection 
document.getElementById('color-container').addEventListener('click', function (event) {
    const currentColor = event.target
    if (currentColor.classList.contains('color-btn')) {
        LastSelectedColor.classList.remove('border-purple-400')
        LastSelectedColor = currentColor
        color = currentColor.value
        currentColor.classList.add('border-purple-400')
        const img = document.getElementById('product-img')
        imgPath = "assets/images/" + color + ".png"
        img.src = imgPath
    }
})


// // Size Selection 
// document.getElementById('size-container').addEventListener('click', function (event) {
//     const btn = event.target
//     const buttonList = this.querySelectorAll('.size-btn')
//     if (btn.classList.contains('size-btn')) {
//         for (const button of buttonList) {
//             button.classList.remove('border-purple-400')
//         }
//         btn.classList.add('border-purple-400')
//         const value = btn.value.split(' $')
//         size = value[0]
//         perPrice = value[1]
//     }
// })

// set initial size 
let LastSelectedSize = document.querySelector('.size-btn')
LastSelectedSize.classList.add('border-purple-400')
let sizeValue = LastSelectedSize.value.split(' $')
size = sizeValue[0]
perPrice = sizeValue[1]
// Size Selection 
document.getElementById('size-container').addEventListener('click', function (event) {
    const btn = event.target
    if (btn.classList.contains('size-btn')) {
        btn.classList.add('border-purple-400')
        const value = btn.value.split(' $')
        size = value[0]
        perPrice = value[1]

        LastSelectedSize.classList.remove('border-purple-400')
        LastSelectedSize = btn
    }
})

// quantity selection 
document.getElementById('counter-container').addEventListener('click', function (event) {
    let counter = parseInt(document.getElementById('counter').innerText)
    let amount = 0
    const btn = event.target
    if (btn.classList.contains('counter-btn')) {
        amount = (btn.id === '+')
            ? 1
            : -1
    }
    counter = Math.max(0, counter + amount)
    document.getElementById('counter').innerText = counter
    quantity = counter
})


// add to cart 
document.getElementById('cart-btn').addEventListener('click', function () {
    if (quantity === undefined) {
        alert("Please Select Quantity")
        return
    }
    const product = {
        imgPath: imgPath,
        color: color,
        size: size,
        perPrice: perPrice,
        quantity: quantity
    }
    checkOut(product)
    document.getElementById('checkout-btn').classList.remove('hidden')
})


// set product in checkout 
function checkOut(product) {
    const cartTableBody = document.getElementById('cart-table-body')
    const tr = document.createElement('tr')
    tr.innerHTML = `
        <td class="md:flex items-center">
            <img class="w-12 rounded-md" src="${imgPath}" alt="">
            <p class="md:pl-3 text-sm font-bold">Classy Modern Smart Watch</p>
        </td>
        <td>${product.color}</td>
        <td>${product.size}</td>
        <td>${product.quantity}</td>
        <td><span>${product.perPrice * product.quantity}</span></td>
    `
    cartTableBody.appendChild(tr)

    // set total quantity and price
    let totalQuantity = parseInt(document.getElementById('total-quantity').innerText)
    totalQuantity += product.quantity
    let totalPrice = parseInt(document.getElementById('total-price').innerText)
    totalPrice += product.perPrice * product.quantity
    document.getElementById('total-quantity').innerText = totalQuantity
    document.getElementById('total-price').innerText = totalPrice

    // checkout counter function 
    const checkoutCounter = parseFloat(document.getElementById('checkout-counter').innerText)
    document.getElementById('checkout-counter').innerText = checkoutCounter + 1
}


// checkout button functions 
document.getElementById('checkout-btn').addEventListener('click',function(){
    const cartModalContainer = document.getElementById('cart-modal-container')
    cartModalContainer.classList.remove('hidden')
    document.getElementById('confirm-btn').innerText ="Checkout"

    document.getElementById('continue-btn').addEventListener('click',function(){
        cartModalContainer.classList.add('hidden')
    })
    document.getElementById('confirm-btn').addEventListener('click',function(){
        const totalQuantity = parseInt(document.getElementById('total-quantity').innerText)
        if(totalQuantity<1){
            alert('No Item In Cart')
            return
        }
        document.getElementById('confirm-btn').innerText =" Done ✓ "
    })
})