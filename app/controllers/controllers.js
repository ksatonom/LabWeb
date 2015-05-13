

controllers.NavbarController=function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length+1) == path) {
            return true
        } else {
            return false;
        }
    }
};   

controllers.Contacto=function ($scope){

        var mapCanvas = document.getElementById('map1');                
        var mapOptions = {
            center: new google.maps.LatLng(20.731111,-103.414663),                    
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);  

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(20.731111,-103.414663),
            map: map,
            title:"TuPCB"
        });                              
  //google.maps.event.addDomListener(window, 'load', initialize);
};

controllers.Cotizar=function ($scope){

    var posiciones;

    var imagenes = document.querySelectorAll("#cajaimagen img");
    posiciones = document.querySelectorAll("#zonadestino section");

    for(var i = 0; i < imagenes.length; i++){
        imagenes[i].addEventListener("dragstart", comenzamos_arrastrar, false);
    }

    for(var i = 0; i < posiciones.length; i++){
        posiciones[i].addEventListener("dragenter", function(e){
            e.preventDefault();}, false);

        posiciones[i].addEventListener("dragover", function(e){
            e.preventDefault();}, false);

        posiciones[i].originalIndex = i;
        posiciones[i].addEventListener("drop", soltado, false);
    }

    function soltado(e){
        var i = this.originalIndex;
        e.preventDefault();
        var id = e.dataTransfer.getData("Text");
        if(id == "borrarImagen")
        var src = "images/compomentes/borrar.png";
        else
        var src = document.getElementById(id).src;
        posiciones[i].innerHTML = "<img src='" + src + "' id='" + id + "'>";
        posiciones[i].addEventListener("dragstart", comenzamos_arrastrar, false);
        posiciones[i].addEventListener("dragend", terminado, false);
    }
/*
    cambiar_color("rgba(8,252,25,.8)");

    function cambiar_color(color){
        for (var i = 0; i < 72; i++) {
            posiciones[i].style.background=color;
        };
    }*/

    function comenzamos_arrastrar(e){
        var elemento = e.target;
        e.dataTransfer.setData("Text", elemento.getAttribute("id"));
    }

    soltar = document.getElementById("zonadedestino");

    soltar.addEventListener("dragenter", function(e){
        e.preventDefault();}, false);

    soltar.addEventListener("dragover", function(e){
        e.preventDefault();}, false);

    soltar.addEventListener("drop", soltadoA, false);

    function soltadoA(e){
        e.preventDefault();

        var archivos = e.dataTransfer.files;
        var listado = "";
        for (var f = 0; f < archivos.length; f++) {
            listado = archivos[f].name;
        }

        soltar.innerHTML = listado;
    }

    function terminado(e){
        var elemento = e.target;
        elemento.style.visibility = "hidden";
    }

};