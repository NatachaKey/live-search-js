gsap.from("li", {x: -100, duration:2, delay: 0, opacity: 0, ease:"power4.out"});
gsap.from("p", {x: 100, duration:2, delay: 0, opacity: 0, ease:"power4.out"});

const searchInput = document.querySelector("#search");
const coctails= document.querySelectorAll(".coctail");

    searchInput.addEventListener("keyup", (event)=>{
        const word= event.target.value.toLowerCase();
        
        coctails.forEach(item=> {
            item.querySelector("p").textContent.toLowerCase().includes(word) 
            || item.querySelector(".ingridients").textContent.toLowerCase().includes(word)
            ? (item.style.display="block") : (item.style.display="none");  
        
    })       
  })