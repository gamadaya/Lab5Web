const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

function toggleElemen() {
    let elemen = document.getElementById("kotakMenu");

    // Mengecek status tampilan elemen saat ini
    if (elemen.style.display === "none") {
        elemen.style.display = "block"; // Menampilkan kembali elemen
    } else {
        elemen.style.display = "none";  // Menyembunyikan elemen
    }
}