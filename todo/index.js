let btn = document.getElementById('button')
let input = document.getElementById('input')
let todo = document.getElementById('todo-text')

let todos = []


btn.addEventListener('click', function(){
  console.log('clicked')
 let span = document.createElement('li')
  span.innerText=input.value
  span.style.color='white'
  console.log(span)
  todo.appendChild(span)
 
  
})