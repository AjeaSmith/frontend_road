let togglebtn = document.querySelector(".btn");
togglebtn.addEventListener("click", () => {
    let getSideMenu = document.querySelector(".side-menu");
    let getSideList = getSideMenu.firstElementChild;
    if (!getSideMenu.classList.contains("show")) {
        getSideMenu.classList.toggle("show");
        getSideList.classList.toggle("show");
        console.log("its shown");
    } else {
        getSideMenu.classList.remove("show");
        getSideList.classList.remove("show");
    }
})
