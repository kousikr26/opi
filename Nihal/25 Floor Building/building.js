document.getElementById("25").classList.add("btn-danger");
document.getElementById("24").classList.add("btn-success");
document.getElementById("22").classList.add("btn-success");
document.getElementById("21").classList.add("btn-success");
for(var i = 0; i <= 25; i++){
    if((document.getElementById(i).classList.contains("btn-success") == true) || (document.getElementById(i).classList.contains("btn-danger") == true)){

    } else {
        document.getElementById(i).disabled = true;
    }
} 
var toggle = 0;
function myFunction(clicked_id){
    toggle++;
    if(toggle%2 == 0){
        var p = document.getElementById("chance").innerHTML = "Chance Of Player 1";
    } else {
        var p = document.getElementById("chance").innerHTML = "Chance Of Player 2";
    }
    if(clicked_id > 3){
        var btnDanger = document.getElementsByClassName("btn-danger")[0];
        var btnDangerId = btnDanger.id;
        document.getElementById(btnDangerId).classList.remove("btn-danger");
        document.getElementById(btnDangerId - 1).classList.remove("btn-success");
        document.getElementById(btnDangerId - 3).classList.remove("btn-success");
        document.getElementById(btnDangerId - 4).classList.remove("btn-success");

        for(var i = 0; i <= 25; i++){
            if(i > clicked_id){
                document.getElementById(i).disabled = true;
            }
        }

        document.getElementById(clicked_id).classList.remove("btn-success");
        document.getElementById(clicked_id).classList.add("btn-danger");
        document.getElementById(Number(clicked_id)-1).disabled = false;
        document.getElementById(Number(clicked_id)-3).disabled = false;
        document.getElementById(Number(clicked_id)-4).disabled = false;
        document.getElementById(Number(clicked_id)-1).classList.add("btn-success");
        document.getElementById(Number(clicked_id)-3).classList.add("btn-success");
        document.getElementById(Number(clicked_id)-4).classList.add("btn-success");

        for(var i = 0; i <= 25; i++){
            if((document.getElementById(i).classList.contains("btn-success") == true)||(document.getElementById(i).classList.contains("btn-danger") == true)){

            } else {
                document.getElementById(i).disabled = true;
            }
        }
    } else if(clicked_id == 3){
        var btnDanger = document.getElementsByClassName("btn-danger")[0];
        var btnDangerId = btnDanger.id;
        document.getElementById(btnDangerId).classList.remove("btn-danger");
        document.getElementById(btnDangerId - 1).classList.remove("btn-success");
        document.getElementById(btnDangerId - 3).classList.remove("btn-success");

        for(var i = 0; i <= 25; i++){
            if(i > clicked_id){
                document.getElementById(i).disabled = true;
            }
        }

        document.getElementById(clicked_id).classList.remove("btn-success");
        document.getElementById(clicked_id).classList.add("btn-danger");
        document.getElementById(Number(clicked_id)-1).disabled = false;
        document.getElementById(Number(clicked_id)-3).disabled = false;
        document.getElementById(Number(clicked_id)-1).classList.add("btn-success");
        document.getElementById(Number(clicked_id)-3).classList.add("btn-success");

        for(var i = 0; i <= 25; i++){
            if((document.getElementById(i).classList.contains("btn-success") == true)||(document.getElementById(i).classList.contains("btn-danger") == true)){

            } else {
                document.getElementById(i).disabled = true;
            }
        }
    } else if(clicked_id == 2 || clicked_id == 1) {
        var btnDanger = document.getElementsByClassName("btn-danger")[0];
        var btnDangerId = btnDanger.id;
        document.getElementById(btnDangerId).classList.remove("btn-danger");
        document.getElementById(btnDangerId - 1).classList.remove("btn-success");

        for(var i = 0; i <= 25; i++){
            if(i > clicked_id){
                document.getElementById(i).disabled = true;
            }
        }

        document.getElementById(clicked_id).classList.remove("btn-success");
        document.getElementById(clicked_id).classList.add("btn-danger");
        document.getElementById(Number(clicked_id)-1).disabled = false;
        document.getElementById(Number(clicked_id)-1).classList.add("btn-success");

        for(var i = 0; i <= 25; i++){
            if((document.getElementById(i).classList.contains("btn-success") == true)||(document.getElementById(i).classList.contains("btn-danger") == true)){

            } else {
                document.getElementById(i).disabled = true;
            }
        }
    } else {
        if(toggle%2 == 0)
            alert("Player 2 Wins!");
        else
            alert("Player 1 Wins!");
    }
}