const navBar = document.querySelector('.navBar');
const button = document.querySelector('.footer')




window.addEventListener('scroll', function(){
    if(window.pageYOffset >= 150){
        navBar.classList.add('anotherClass')
    }
    else{
        navBar.classList.remove('anotherClass')
    }

    if (window.pageYOffset >= 350){
        
       button.classList = 'footerClass'

    }
    else{
        button.classList.remove('footerClass')
    }

})


button.addEventListener('click', function(){
   window.scrollTo({
       top:450
   })
})


const scrollLinks = document.querySelectorAll('.scrollLinks');


scrollLinks.forEach((links)=>{
   links.addEventListener('click', function(e){
        e.preventDefault()
       let theHref = e.currentTarget.getAttribute('href').slice(1)
       let theElement = document.getElementById(theHref)
       let elPosition = theElement.offsetTop + 480;
       console.log(elPosition)

       window.scrollTo({
           top:elPosition 
       })
   })
})