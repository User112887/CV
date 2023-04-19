particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js-footer', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});


const observable = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("animate__bounceIn")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden")

hiddenElements.forEach((el) => observable.observe(el))

const cards = document.querySelectorAll(".card")

cards.forEach(card => {
    card.addEventListener("click", ()=>{
        cards.forEach(c => {
            c.classList.remove("card-clicked")
        })

        card.classList.add("card-clicked")
    })
})