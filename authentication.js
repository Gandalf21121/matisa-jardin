(function() {
    var password = prompt("Ingrese la contraseña:");
    if (password !== 'Gandalf21') {
        alert("Contraseña incorrecta.");
        window.location.href = "index.html";
    }
})();
