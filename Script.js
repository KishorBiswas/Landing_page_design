let navLink = document.getElementsByClassName("nav-link");

for(let i = 0; i < navLink.length; i++){
    navLink[i].addEventListener("click", function(){
        let activeLink = document.getElementsByClassName("active");
        activeLink[0].className =  activeLink[0].className.replace("active", "");
        this.className += " active";
    })
}

