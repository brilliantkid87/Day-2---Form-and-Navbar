const form = document.getElementById("contact-form");
const emailAddress = "brilliantkid87@gmail.com";

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name.value === "") {
        alert("Silakan masukkan nama Anda!");
        return false;
    }

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (email.value === "" || !emailRegex.test(email.value)) {
    //     alert("Silakan masukkan alamat email yang valid!");
    //     return false;
    // }

    // if (phone.value === "") {
    //     alert("Silahkan masukkan nomor Anda!");
    //     return false;
    // }

    // if (subject.value === "") {
    //     alert("Silahkan masukkan Subject Anda!");
    //     return false;
    // }

    // if (message.value === "") {
    //     alert("Silahkan masukkan pesan Anda!")
    //     return false
    // }

    const mailtoLink = "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\n\n" + message);
    window.location.href = mailtoLink;
});