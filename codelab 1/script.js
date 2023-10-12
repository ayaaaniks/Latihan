function hitungPenjumlahan() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);

    if (!isNaN(angka1) && !isNaN(angka2)) {
        var hasil = angka1 + angka2;
        alert("Hasil penjumlahan: " + hasil);
    } else {
        alert("Masukkan angka yang valid.");
    }
}

function resetForm() {
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
}