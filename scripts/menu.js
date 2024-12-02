
            //    Hanburger menu script   

const hideBtn=document.querySelector('.hide-menu')
const showBtn=document.querySelector('.show-menu')
const hideBtnArea=document.querySelector('.shade')
const sideMenu=document.querySelector('.menu-wrapper')

let showingMenu=false//for checking menu is shown or not

    // showing the aside menu
showBtn.addEventListener('click',()=>{
    if(!showingMenu){
        sideMenu.style.left="0%"
        hideBtnArea.style.opacity="1"
        showingMenu=true
    }
    })
  
    //Hiding the menu
hideBtn.addEventListener('click',()=>{
    if(showingMenu){
        sideMenu.style.left="-100%"
        hideBtnArea.style.opacity="0"
        showingMenu=false
    }
})
   //Hiding the menu onclick of shade
hideBtnArea.addEventListener('click',()=>{
    if(showingMenu){
        sideMenu.style.left="-100%"
        hideBtnArea.style.opacity="0"
        showingMenu=false
      
    }
})