(function() {
    var password = prompt("Ingrese la contraseña:");
    if (password !== 'tu_contraseña') {
        alert("Contraseña incorrecta.");
        window.location.href = "index.html";
    }
})();
