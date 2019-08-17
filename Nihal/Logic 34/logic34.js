var counter = 0;
function myfunction(clicked_id) {
    counter++;
    document.getElementById("count").innerHTML = counter;
    var clicked = document.getElementById(clicked_id);
    var clickedRight = document.getElementById(Number(clicked_id) + 10);
    var clickedLeft = document.getElementById(Number(clicked_id) - 10);
    var clickedTop = document.getElementById(Number(clicked_id) - 1);
    var clickedBottom = document.getElementById(Number(clicked_id) + 1);
    if(clicked.classList.contains("btn-primary") == true) {
        clicked.classList.remove("btn-primary");
        clicked.classList.add("btn-secondary");
    } else {
        clicked.classList.remove("btn-secondary");
        clicked.classList.add("btn-primary");
    }

    if(clickedRight == null) {

    } else {
        if(clickedRight.classList.contains("btn-primary") == true) {
            clickedRight.classList.remove("btn-primary");
            clickedRight.classList.add("btn-secondary");
        } else {
            clickedRight.classList.remove("btn-secondary");
            clickedRight.classList.add("btn-primary");
        }
    }
    if(clickedLeft == null){

    } else {
        if(clickedLeft.classList.contains("btn-primary") == true) {
            clickedLeft.classList.remove("btn-primary");
            clickedLeft.classList.add("btn-secondary");
        } else {
            clickedLeft.classList.remove("btn-secondary");
            clickedLeft.classList.add("btn-primary");
        }
    }

    if(clickedTop == null){

    } else {
        if(clickedTop.classList.contains("btn-primary") == true) {
            clickedTop.classList.remove("btn-primary");
            clickedTop.classList.add("btn-secondary");
        } else {
            clickedTop.classList.remove("btn-secondary");
            clickedTop.classList.add("btn-primary");
        }
    }

    if(clickedBottom == null){

    } else {
        if(clickedBottom.classList.contains("btn-primary") == true) {
            clickedBottom.classList.remove("btn-primary");
            clickedBottom.classList.add("btn-secondary");
        } else {
            clickedBottom.classList.remove("btn-secondary");
            clickedBottom.classList.add("btn-primary");
        }
    }
}