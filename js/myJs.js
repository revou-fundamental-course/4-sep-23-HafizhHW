function hitungLuas() {
    // Mengambil nilai panjang sisi dari input
    var panjangSisi = parseFloat(document.getElementById("panjangSisi").value);

    // Menghitung luas persegi
    var luas = panjangSisi * panjangSisi;

    // Menampilkan hasil di elemen dengan id "hasil"
    document.getElementById("hasil").innerHTML = "L" + "&nbsp" + "=" + "&nbsp" + "&nbsp" + luas;
    document.getElementById("Sisi").innerHTML = "L" + "&nbsp" + "=" + "&nbsp" + panjangSisi + "&nbsp" + "x" + "&nbsp" + panjangSisi;
    // document.getElementById("Sisi").innerHTML = "&nbsp"+panjangSisi+"&nbsp"+"x"+"&nbsp"+panjangSisi;
}

function resetNull() {
    // Mereset nilai input dan hasil
    document.getElementById("panjangSisi").value = "";
    document.getElementById("hasil").innerHTML = "";
    document.getElementById("Sisi").innerHTML = "";
}