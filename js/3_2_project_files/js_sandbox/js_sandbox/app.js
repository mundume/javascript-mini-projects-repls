let val;
const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child')

val = list.childNodes
val = list.children[4].children[0].id="wee"
val = list.firstElementChild
val = list.lastElementChild
val = list.childElementCount

//getParent node
 let kk=listItem.parentElement
 kk=listItem.parentElement.parentElement.parentElement
//console.log(val)
//sibling next
kk = listItem.nextElementSibling
//console.log(kk);
//previous sibling

kk=listItem.previousSibling

//get children 


//creating elements
const li = document.createElement('li')
//add classlist
li.className = 'collection-item'
//add id
li.id = 'new-item'
//add attribute
li.setAttribute('title', 'HOLA')
//append
li.textContent = 'Weeee'

//link
const link = document.createElement('a')
//add class
link.className = "delete-item secondary-content"
//create icon
const i = document.createElement('i')
i.className = "fa fa-remove"
link.appendChild(i)
li.appendChild(link)
//append li
list.appendChild(li)

//replacing elements

 //create element
 const heading  = document.createElement('h2')
 heading.id = 'task-title'

heading.appendChild(document.createTextNode('bwibo'))
//old heading
const oldHeading  = document.getElementById('task-title')
//oldHeading.textContent = 'aparo'

const cardAction = document.querySelector('.card-action')

cardAction.replaceChild (heading, oldHeading)

//removing items
const lis = document.querySelectorAll('li')
const listi = document.querySelector('ul')
//remove child
listi.removeChild(lis[5])
 
//remove atrributes & classes

const firstLi = document.querySelector('li:first-child')
const a = firstLi.children[0]
let vaal;
vaal = link.classList.remove()
//console.log(vaal)



const clearBtn = document.querySelector('.clear-tasks')
const card = document.querySelector('.card')
const hheading = document.querySelector('h5')

//clearBtn.addEventListener('dblclick', runEvent)
//clearBtn.addEventListener('mousedown' , runEvent)
//clearBtn.addEventListener('mouseup', runEvent)
// card.addEventListener('mouseenter', runEvent)
// card.addEventListener('mouseleave', runEvent)
// card.addEventListener('mouseover', runEvent)
// card.addEventListener('mouseout', runEvent)
//card.addEventListener('mousemove', runEvent)


// function runEvent (e){
//     heading.textContent = `MouseX: ${e.offsetX} Mouse Y: ${e.offsetY}`
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
// }

//inputs and keyboarf events

const form = document.querySelector('form').addEventListener('submit', (e)=>{
    const task = document.getElementById('task').value
    let tasks;

    if(localStorage.getItem('tasks')===null){
     tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
localStorage.setItem('tasks', JSON.stringify(tasks))
alert('Task saved')
e.preventDefault()
})



//keydown Event
//taskInput.addEventListener('keydown', runEvent)


//keyup
//taskInput.addEventListener('keyup' , runEvent)

//keypress
//taskInput.addEventListener('keypress' , runEvent)
//focus
//taskInput.addEventListener('focus' , runEvent)

//blur
//taskInput.addEventListener('blur' , runEvent)

//cut
//taskInput.addEventListener('cut' , runEvent)

//paste
//taskInput.addEventListener('paste' , runEvent)

//input 

//taskInput.addEventListener('input' , runEvent)

//form.addEventListener('submit', runEvent)

// change
const select = document.querySelector('select')

select.addEventListener('change', runEvent)

function runEvent (e){
    console.log(e.target.value)
    console.log(`Event: ${e.type}`)
    heading.style.backgroundColor = 'yellow'
}

//event bubling
// document.querySelector('.card-title').addEventListener('click', ()=>{
//     console.log('card title')
// })
// document.querySelector('.card-content').addEventListener('click', ()=>{
//     console.log('card content')
// })
// document.querySelector('.card').addEventListener('click', ()=>{
//     console.log('card')
// })
// document.querySelector('.col').addEventListener('click', ()=>{
//     console.log('col')
// })

//Event delegation

// const delItem = document.querySelector('.delete-item')

// delItem.addEventListener('click', deleteItem)
document.body.addEventListener('click', deleteItem)

function deleteItem (e){
    
   
//    if(e.target.parentElement.className ==='delete-item secondary-content'){
//   console.log('deleted')
if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove()
   }
}


// local storage set item
localStorage.setItem("name", "john")

//set session Stotage
//sessionStorage.setItem("name", "nzaih")

//remove from storage
//localStorage.removeItem('name')