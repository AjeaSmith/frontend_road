let togglebtn = document.querySelector(".btn");
let showNav = false;
togglebtn.addEventListener("click", () => {
    let getSideMenu = document.querySelector(".side-menu");
    let getSideMenuUl = document.querySelector(".side-menu ul");
    let getSideList = document.querySelectorAll(".side-menu li");
    let getSpan = document.querySelector(".side-menu li span");

    if(showNav === false){
        getSideMenuUl.style.visibility = "visible";
        getSideMenu.style.width = "280px";
        getSpan.style.opacity = "0.5";

        let liLength = getSideList.length;
        for (let i = 0; i < liLength.length; i++) {
           getSideList[i].style.opacity = "1";
        }
        showNav = true;
    }else if (showNav === true){
        getSideMenu.style.width = "60px";
        getSpan.style.opacity = "0";

        let liLength = getSideList.length;
        for (let i = 0; i < liLength.length; i++) {
           getSideList[i].style.opacity = "0";
        }
        getSideMenuUl.style.visibility = "hidden";
        showNav = false;
    }

})
