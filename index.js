var elementsContainer = document.getElementById("search-filter-top-bar");
var elementsNo = elementsContainer.getElementsByClassName("search-filter-top-bar-element").length;

for (let i = 0; i < elementsNo; i++) {
    document.querySelectorAll(".search-filter-top-bar-element")[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("search-filter-top-bar-active");
        current[0].className = current[0].className.replace("search-filter-top-bar-active", "");
        this.classList.add("search-filter-top-bar-active");
    });
}