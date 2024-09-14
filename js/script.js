let btnCloses=document.getElementsByClassName('bi-x')
btnCloses=Object.values(btnCloses)
console.log(btnCloses)
btnCloses.forEach(function (btnClose){
    btnClose.addEventListener('click',function (event){
        event.target.parentElement.parentElement.remove()
        /*event.target.parentElement.parentElement.remove()*/
    })
})
