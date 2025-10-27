window.onload = function() {
    alert("Selamat datang di website ripkii!");
};

document.getElementById("contactForm").addEventListener("submit", function(event) {
    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();

    if (nama === "" || email === "") {
        alert("Isi semua kolom dulu ya!");
        event.preventDefault();
    } else {
        alert("Form berhasil dikirim!");
    }
});

