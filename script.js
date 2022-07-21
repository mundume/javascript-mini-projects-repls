let count = 0
let value = document.getElementById('count')
let btns = document.querySelectorAll('.btn')
console.log(btns)




btns.forEach(function(btn){
  btn.addEventListener('click',function(e){
    const styles = e.currentTarget.classList
    console.log(styles)
    if (styles.contains('substract')){
      console.log('clicked')
      count--
    }else if(styles.contains('add')){
      count ++
    }else{
      count = 0
    }
     value.textContent = count
  } )
 
})
