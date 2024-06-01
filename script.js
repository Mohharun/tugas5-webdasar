//volume balok
function vbalok(){
    var panjang = document.getElementById("panjang").value;
    var lebar = document.getElementById("lebar").value;
    var tinggi = document.getElementById("tinggi").value;
    var panjangparsed = parseInt(panjang)
    var lebarparsed = parseInt(lebar)
    var tinggiparsed = parseInt(tinggi)
    var hasilbalok = panjangparsed * lebarparsed * tinggiparsed
    hasilvolumebalok.innerHTML ="volume balok adalah: " + hasilbalok + "cm^3"
}

function vkubus(){
    var sisi = document.getElementById("sisi").value;
    var sisiparsed = parseInt(sisi)
    var hasilvkubus = sisiparsed ** 3
    var hasilvolumekubus = document.getElementById("hasilvolumekubus")
    hasilvolumekubus.innerHTML =" volume kubus dengan sisi: "  + hasilvkubus + "cm^3"
}

function vprismasegitiga(){
    var panjang = document.getElementById("panjang").value;
    var tinggi = document.getElementById("tinggi").value;
    var tinggi = document.getElementById("tinggi").value;
    var panjangparsed = parseInt(panjang)
    var tinggiparsed = parseInt(tinggi)
    var hasilvprismasegitiga =0.5 * panjangparsed * tinggiparsed * tinggiparsed
    hasilvolumeprismasegitiga.innerHTML ="volume prismasegitiga adalah:" + hasilvprismasegitiga + "cm^3"
}

