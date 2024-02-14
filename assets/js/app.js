const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {

    $("h2").dblclick(function () {
        $(this).css({
            "color": "red",

        });
    });
});

document.getElementById("boton1").onclick = function () {
    alert("El correo fue enviado correctamente...");
}

document.getElementById("boton2").onclick = function () {
    alert("Añadido a tus favoritos...");
}

$(document).ready(function () {
    $("#recipe1").click(function () {
        $(this).toggle("slow");
    });

    $("#recipe2").click(function () {
        $(this).toggle("slow");
    });

    $("#recipe3").click(function () {
        $(this).toggle("slow");
    });

});



