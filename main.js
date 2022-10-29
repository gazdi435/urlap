function elkuld() {
    document.getElementById("nevMutato").innerHTML = document.getElementById("nev").value;
    document.getElementById("cimMutato").innerHTML = document.getElementById("cim").value;
    document.getElementById("telefonMutato").innerHTML = document.getElementById("telefon").value;

}

function fokusznal(labelId) {
    document.getElementById(labelId).style.backgroundColor = "rgba(147,112,219, 0.5)";
}

function noFokusznal(labelId) {
    document.getElementById(labelId).style.backgroundColor = "white"
}