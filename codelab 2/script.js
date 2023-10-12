document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    if (
      document.getElementById("nama").value == "" ||
      document.getElementById("email").value == "" ||
      document.getElementById("alamat").value == ""
    ) {
      alert("Anda harus mengisi data dengan lengkap!");
    } else if (
      document.getElementById("nama").value == "" &&
      document.getElementById("email").value == "" &&
      document.getElementById("alamat").value == ""
    ) {
      alert("Anda harus mengisi data dengan lengkap!");
    } else {
      // Lakukan tindakan selanjutnya, seperti mengirimkan data ke server.
      alert("Pendaftaran sukses!");
      document.getElementById("registrationForm").reset();
    }
  });