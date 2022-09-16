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


console.log(li)