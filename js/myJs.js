function hitungLuas() {
    // Mengambil nilai panjang sisi dari input
    var panjangLuasSisi = parseFloat(document.getElementById("panjangLuasSisi").value);

    // Menghitung luas persegi
    var luas = panjangLuasSisi * panjangLuasSisi;

    // Menampilkan hasil di elemen dengan id "hasil"
    document.getElementById("hasilLuas").innerHTML = "L" + "&nbsp" + "=" + "&nbsp" + "&nbsp" + luas;
    document.getElementById("luasSisi").innerHTML = "L" + "&nbsp" + "=" + "&nbsp" + panjangLuasSisi + "&nbsp" + "x" + "&nbsp" + panjangLuasSisi;

}

function resetLuas() {
    // Mereset nilai input dan hasil
    document.getElementById("panjangLuasSisi").value = "";
    document.getElementById("hasilLuas").innerHTML = "";
    document.getElementById("luasSisi").innerHTML = "";
}

function hitungKeliling() {
    // Mengambil nilai panjang sisi dari input
    var panjangKelilingSisi = parseFloat(document.getElementById("panjangKelilingSisi").value);

    // Menghitung keliling persegi
    var keliling = 4 * panjangKelilingSisi;

    // Menampilkan hasil di elemen dengan id "hasilKeliling"
    document.getElementById("hasilKeliling").innerHTML = "Keliling Persegi: " + keliling;
    document.getElementById("kelilingSisi").innerHTML = "K" + " " + "=" + " " + "4" + " " + "x" + " " + panjangKelilingSisi;
}

function resetKeliling() {
    // Mereset nilai input dan hasil
    document.getElementById("panjangKelilingSisi").value = "";
    document.getElementById("hasilKeliling").innerHTML = "";
    document.getElementById("kelilingSisi").innerHTML = "";
}