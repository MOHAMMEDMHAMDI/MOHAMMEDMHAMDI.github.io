

var porte =0;
 function ajouter() {
    porte =porte - 2;
    document.getElementById("compteur").innerHTML = porte;
    if (porte == 10) {
   document.getElementById("compteur").style.color = "green";

        
    }
}
