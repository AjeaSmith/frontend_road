// Transvering the DOM to get the elements needed
let wrapper = document.getElementById("wrapper");
let openbutton = document.querySelector(".open--btn button");
let nav = wrapper.firstElementChild
let content = nav.nextElementSibling

// If there is a movedback class on the content, then remove that and add the movedcontent.
// Else if there is a movedcontent class on the content, then remove that class and add the movedback back onto it.
// this is basically toggling between the movedback class and movedcontent class without using the toggle method. 
openbutton.addEventListener('click', () => {
    if (content.classList.contains("movedback")) {
        content.classList.remove("movedback")
        content.classList.add("movedcontent");
        openbutton.setAttribute("class", "fas fa-times");
    } else if (content.classList.contains("movedcontent")) {
        content.classList.remove("movedcontent");
        content.classList.add("movedback");
        openbutton.setAttribute("class", "fas fa-bars");
    }
})