let color, size, perPrice, quantity;

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

document.getElementById('color-container').addEventListener('click',function(event){
    const buttonList = document.querySelectorAll('.color-btn')
    const btn = event.target
    if(btn.classList.contains('color-btn')){
        for(const button of buttonList){
            button.classList.remove('border-purple-400')
        }
        color = btn.value
        btn.classList.add('border-purple-400')
        const img = document.getElementById('product-img')
        img.src = "assets/images/"+ color +".png"
    }
})