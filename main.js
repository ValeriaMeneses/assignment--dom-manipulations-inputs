document.querySelector("#reset-field button").addEventListener('click',function(){
  // TASK #1
  var entrada = document.querySelector('.answer-box input')
  // console.log(entrada.value);
  if (entrada.value !== '') {
    entrada.value = ""
  }

})


document.querySelector("#validate-field button").addEventListener('click',function(){
  // TASK #2
  var entrada = document.querySelector('#validate-field input')
  var value = entrada.value
  var mensaje = document.querySelector('.flash-message')
  console.log(mensaje);
  // console.log(value.length);
  if (value.length < 6) {
    mensaje.textContent = "Input not long enough"
    mensaje.className = 'flash-message '+'invalid'
  }else if (value.length >= 6) {
    mensaje.textContent = "Field valid"
    mensaje.className = 'flash-message '+'valid'
  }

})


document.querySelector("#calculate-items button").addEventListener('click',function(){
  // TASK #3
var items = document.querySelectorAll(".cars-list input")
var contenedorSuma = document.querySelector('.sum-total')
var resultado = 0
// console.log(contenedorSuma);
// console.log(items);
for (var i = 0; i < items.length; i++) {
  var valorItem = items[i]
  var valueItem = parseInt(valorItem.value)
  // console.log(valorItem.checked)
  if (valorItem.checked === true) {
    resultado += valueItem
    // console.log(resultado);
    contenedorSuma.textContent = '$ ' + resultado
  }else {
    contenedorSuma.textContent = '$ ' + resultado
  }
}
})



// TASK #4
var img = document.createElement('img')
var divImg = document.querySelector('.img-box')
divImg.appendChild(img)

document.querySelector("#select-to-show-more button").addEventListener('click',function(){

  var caja = document.querySelector('#select-to-show-more select')
  var seccion = document.querySelectorAll('.selection option')
  var selected = caja.options[caja.selectedIndex]

  var imagenData = selected.getAttribute('data-img')
  img.setAttribute("src", './images/' + imagenData)


  var modelo = document.querySelector('.model')
  var dataValue = selected.value
  modelo.textContent = dataValue

  var msrp = document.querySelector('.msrp')
  var dataMsrp = selected.getAttribute('data-msrp')
  msrp.textContent = dataMsrp

  var mpg = document.querySelector('.mpg')
  var dataMpg = selected.getAttribute('data-mpg')
  mpg.textContent = dataMpg

  var edmunds = document.querySelector('.edmunds')
  var dataEdmunds = selected.getAttribute('data-edmunds')
  edmunds.textContent = dataEdmunds
})


// TASK #5
document.querySelector("#add-guest input").addEventListener('focusout', function(){
var input = document.querySelector("#add-guest input")
var ul = document.querySelector('#add-guest ul')
var value = input.value
// console.log(input.value);
if (input.value !== '') {
  input.value = ''

}
var nuevoLi = document.createElement('li')
var contenido = document.createTextNode(value)
nuevoLi.appendChild(contenido)
nuevoLi.className = "guest"
ul.appendChild(nuevoLi)
})



// TASK #6
document.querySelector("#add-item-bonus input").addEventListener('focusout', function(){
  var input = document.querySelector("#add-item-bonus input")
  var value = input.value
  // console.log(value);
  var ul = document.querySelector('#add-item-bonus ul')
  // console.log(ul);
  if (input.value !== '') {
    input.value = ''
  }

  var Li = document.createElement('li')
  var contentValue = document.createTextNode(value)
  Li.className = 'item'
  Li.appendChild(contentValue)

  var button = document.createElement('button')
  var contentButton = document.createTextNode("X")
  button.className = 'remove'
  button.appendChild(contentButton)

  Li.appendChild(button)
  ul.appendChild(Li)

  function remove() {
    var n = this
    n.parentNode.remove()//remueve a la padre de this que este caso es el boton

  }
  var bonton = document.querySelectorAll("#add-item-bonus button")
  for (var i = 0; i < bonton.length; i++) {
    var onlyBoton = bonton[i]
    onlyBoton.addEventListener('click', remove)
  }

})
