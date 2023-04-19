const cursor = document.querySelector(".cursor");

const importantElements = document.querySelectorAll(".important")

importantElements.forEach(element =>{
    element.addEventListener("mouseenter", (e) =>{
        cursor.classList.add("pulse")
    })

    element.addEventListener("mouseleave", (e) =>{
        cursor.classList.remove("pulse")
    })
})

window.onmousemove = (e) =>{
    cursor.style.top = `${e.clientY}px`
    cursor.style.left = `${e.clientX}px`
}

window.onmousedown = (e) =>{
    cursor.classList.add("clicked")
}

window.onmouseup = (e) =>{
    cursor.classList.remove("clicked")
}
