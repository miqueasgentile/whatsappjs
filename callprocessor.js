// @include callprocessor.js

setTimeout(() => {
  var tr1 = document.querySelector("#tabla_servicios > table:nth-child(1) > thead > tr > th:nth-child(1)")
  tr1.className = 'tr1';
  var tr3 = document.querySelector("#tabla_servicios > table:nth-child(1) > thead > tr > th:nth-child(3)")
  tr3.className = 'tr3';
  var tr4 = document.querySelector("#tabla_servicios > table:nth-child(1) > thead > tr > th:nth-child(4)");
  tr4.className = 'tr4';
  var tr5 = document.querySelector("#tabla_servicios > table:nth-child(1) > thead > tr > th:nth-child(5)")
  tr5.className = 'tr5';
  var tr6 = document.querySelector("#tabla_servicios > table:nth-child(1) > thead > tr > th:nth-child(6)")
  tr6.className = 'tr6';
  var tr9 = document.querySelector("#tabla_servicios > table:nth-child(1) > thead > tr > th:nth-child(9)")
  tr9.className = 'tr9';
  var tr11 = document.querySelector("#tabla_servicios > table:nth-child(1) > thead > tr > th:nth-child(11)");
  tr11.style.display = 'none';
  //////////////////// Copiar call
  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  setInterval(() => {
    $(document).ready(function() {
      var base = $("tr > td:nth-child(2) > div");
      var clase = $("#tabla_servicios > .table > tbody > tr > td:nth-child(2)");
      clase.each(function(index, element) {
        $(element).attr("onclick", "copyToClipboard" + "('" + "#id-" + (index + 1) + "')")
        $(element).attr("role", "button");
        $(element).attr("tabindex", "0");
        $(element).attr("class", "numeroacopiar");
      });
      base.each(function(index, element) {
        $(element).attr("id", "id-" + (index + 1));
      });
    });
  }, 0);
  //////////////////// Demoras y Marcas
  setInterval(() => {
    let cajas = document.querySelectorAll("tr > td:nth-child(4) > div");
    let grupos = Array.from(document.querySelectorAll('.c16777215'));
    for (let grupo of grupos) {
      let caja = grupo.querySelector('tr > td:nth-child(4) > div'),
        tiempo = grupo.querySelector('tr > td:nth-child(6) > div'),
        caja_valor = parseInt(caja.innerHTML, 10),
        [hora, minutos, segundos] = tiempo.innerHTML.split(':');
      segundos = Number(segundos) + Number(minutos) * 60 + Number(hora) * 3600;
      if (caja_valor === 0 && segundos === 0) {
        caja.style.backgroundColor = "#E4BC24";
        tiempo.style.backgroundColor = "#E4BC24";
        const audio = new Audio("https://audio.jukehost.co.uk/74LEpgKW5c1fXYa8v4ncp8OVX6sPJDNG.mp3");
        audio.volume = 0.5;
        audio.play();
      } else {
        caja.style.backgroundColor = "none";
        tiempo.style.backgroundColor = "none";
      }
    }
    let grupos2 = Array.from(document.querySelectorAll('.c8684676'));
    for (let grupo2 of grupos2) {
      let tiempo = grupo2.querySelector('tr > td:nth-child(6) > div'),
        [hora, minutos, segundos] = tiempo.innerHTML.split(':');
      segundos = Number(segundos) + Number(minutos) * 60 + Number(hora) * 3600;
      if (minutos >= 10 && minutos < 15) {
        tiempo.style.backgroundColor = "#ffee37";
      } else if (minutos >= 15) {
        tiempo.style.backgroundColor = "#ff3a3a";
      } else {
        tiempo.style.backgroundColor = "none";
      }
    }
    let grupos3 = Array.from(document.querySelectorAll('.c8684676'));
    for (let grupo3 of grupos3) {
      let distancia = grupo3.querySelector('tr > td:nth-child(4) > div'),
        distancia_valor = parseInt(distancia.innerHTML, 10);
      if (distancia_valor <= 300) {
        distancia.style.backgroundColor = "#ae5cff";
      } else {
        distancia.style.backgroundColor = "none";
      }
    }
  }, 1000);
  setInterval(() => {
    let link = document.querySelector('#alert-danger');
    let styles = getComputedStyle(link);
    let errorSistema = document.querySelector('#alert-danger > span').innerHTML;;
    var opacidad = parseInt(styles.opacity);
    if (opacidad < 1 && errorSistema === "La hora del servicio es menor a la hora actual.") {
      const audio = new Audio("https://audio.jukehost.co.uk/DXpxDXX2hS0qhGYIS4zA81mWJdMoFMxK.mp3");
      audio.volume = 0.5;
      audio.play();
    }
  }, 9000);
  //////////////////// Servicios JS
  function myFunction() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  //////////////////// Servicios HTML
  document.querySelector("#modal_grabar_servicio > div > div > div.contenedor > div.lateral2 > any").innerHTML += '<div class="boxprogram"><div class="search"><input type="text" class="searchTerm" id="myInput" onkeyup="myFunction()" placeholder="Buscar dirección..."><button type="submit" class="searchButton"><img class="searchbox" src="https://i.imgur.com/zvdAeBO.png"></button></div><div id="scrollbox"><table id="myTable"><tr><td><button class="button-38" onclick="casino()">(18) City Center (Casino)<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="liliana()">(15) Liliana<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="evaperon()">(15) Hospital Eva Perón<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="libertad()">(18) Libertad<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="estadionewells()">(25) Estadio Newells<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="hespañol()">(25) Hospital Español<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="hniñosvilela()">(25) Hospital de Niños "Víctor J. Vilela"<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="ginfancia()">(12) Granja de la Infancia<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="hprovincial()">(23) Hospital Provincial<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="heca()">(22) Clemente Álvarez - HECA<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="smujercentro()">(23) Sanatorio de la Mujer - Centro<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="hcarrasco()">(9) Hospital Carrasco<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="puma()">(14) Estacion PUMA<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="mercfisherton()">(11) Mercado de Fisherton<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="coto()">(11) COTO<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="aeropuerto()">(26) Aeropuerto/Fisherton Plaza/Sanatorio de la Mujer<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="pasobosque()">(13) Paso del Bosque<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="micropack()">(13) Micropack<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="alto()">(8) Alto Shopping<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="carrefour()">(13) Carrefour<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="puertonorte()">(8) Puerto Norte<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="gallegaalberdi()">(8) La Gallega (Alberdi)<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="hospitalalberdi()">(5) Hospital Alberdi<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="hniñosnorte()">(8) Hospital de Niños Zona Norte<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="portal()">(5) Portal Shopping<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="unico()">(3) Supermercado Único<div class="button-3"><div class="triangle-right"></div></div></button></td></tr><tr><td><button class="button-38" onclick="sanatorionorte()">(5) Sanatorio Norte<div class="button-3"><div class="triangle-right"></div></div></button></td></tr></table></div></div>';

  function casino() {
    document.querySelector("#calle").value = "Av Battle Ordóñez"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "2000"
    document.querySelector("#observaciones").value = "Casino - City Center*"
  }

  function liliana() {
    document.querySelector("#ciudad").value = "3772"
    document.querySelector("#calle").value = "RP34S"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "2098"
    document.querySelector("#observaciones").value = "Liliana*"
  }

  function evaperon() {
    document.querySelector("#ciudad").value = "3772"
    document.querySelector("#calle").value = "Av Gral José de San Martín"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "1645"
    document.querySelector("#observaciones").value = "Hospital Eva Perón*"
  }

  function unico() {
    document.querySelector("#calle").value = "Bv. Rondeau"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "4156"
    document.querySelector("#observaciones").value = "Supermercado Único*"
  }

  function hospitalalberdi() {
    document.querySelector("#calle").value = "Av Puccio"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "575"
    document.querySelector("#observaciones").value = "Hospital Alberdi*"
  }

  function sanatorionorte() {
    document.querySelector("#calle").value = "Bv. Rondeau"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "1365"
    document.querySelector("#observaciones").value = "Sanatorio Norte*"
  }

  function portal() {
    document.querySelector("#calle").value = "Nansen"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "323"
    document.querySelector("#observaciones").value = "Portal Shopping*"
  }

  function hniñosnorte() {
    document.querySelector("#calle").value = "Av De Los Trabajadores"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "1331"
    document.querySelector("#observaciones").value = "Hospital de Niños Zona Norte*"
  }

  function gallegaalberdi() {
    document.querySelector("#calle").value = "Av Alberdi"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "465"
    $('#bis').prop('checked', true);
    document.querySelector("#observaciones").value = "La Gallega Supermercado*"
  }

  function puertonorte() {
    document.querySelector("#calle").value = "Luis C. Carballo"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "194"
    document.querySelector("#observaciones").value = "Puerto Norte*"
  }

  function alto() {
    document.querySelector("#calle").value = "Luis C. Carballo"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "194"
    document.querySelector("#observaciones").value = "Alto Shopping*"
  }

  function carrefour() {
    document.querySelector("#calle").value = "H.Pujato Ex Av.Central"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "7648"
    document.querySelector("#observaciones").value = "Carrefour*"
  }

  function micropack() {
    document.querySelector("#calle").value = "Juan Pablo Segundo"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "1800"
    $('#bis').prop('checked', true);
    document.querySelector("#observaciones").value = "Micropack*"
  }

  function pasobosque() {
    document.querySelector("#calle").value = "Av Sorrento"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "7450"
    document.querySelector("#observaciones").value = "Paso del Bosque*"
  }

  function aeropuerto() {
    document.querySelector("#calle").value = "Av Real"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "9500"
    document.querySelector("#observaciones").value = "Aeropuerto/Fisherton Plaza/Sanatorio de la Mujer*"
  }

  function coto() {
    document.querySelector("#calle").value = "Venezuela"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "114"
    document.querySelector("#observaciones").value = "COTO*"
  }

  function mercfisherton() {
    document.querySelector("#calle").value = "Bv. Wilde"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "844"
    document.querySelector("#observaciones").value = "Mercado de Fisherton*"
  }

  function puma() {
    document.querySelector("#calle").value = "Av Presidente Peron"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "6970"
    document.querySelector("#observaciones").value = "Estacion PUMA*"
  }

  function hcarrasco() {
    document.querySelector("#calle").value = "Bv. Avellaneda"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "1402"
    document.querySelector("#observaciones").value = "Hospital Carrasco*"
  }

  function ginfancia() {
    document.querySelector("#calle").value = "Av Presidente Peron"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "8000"
    document.querySelector("#observaciones").value = "Granja de la Infancia*"
  }

  function smujercentro() {
    document.querySelector("#calle").value = "Pueyrredon"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "956"
    document.querySelector("#observaciones").value = "Sanatorio de la Mujer*"
  }

  function heca() {
    document.querySelector("#calle").value = "Pueyrredon"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "956"
    document.querySelector("#observaciones").value = "Clemente Álvarez (HECA) por Pellegrini/Crespo*"
  }

  function hprovincial() {
    document.querySelector("#calle").value = "Leandro N. Alem"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "1450"
    document.querySelector("#observaciones").value = "Hospital Provincial*"
  }

  function hniñosvilela() {
    document.querySelector("#calle").value = "Virasoro"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "1855"
    document.querySelector("#observaciones").value = "Hospital de Niños (Vilela) por Virasoro/Dorrego/Italia*"
  }

  function hespañol() {
    document.querySelector("#calle").value = "Mitre"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "3151"
    document.querySelector("#observaciones").value = "Hospital Español*"
  }

  function estadionewells() {
    document.querySelector("#calle").value = "Av Int. Morcillo"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "2500"
    document.querySelector("#observaciones").value = "Estadio Newells*"
  }

  function libertad() {
    document.querySelector("#calle").value = "Bv. Oroño"
    $("#calle").removeClass("ng-empty").addClass("ng-not-empty");
    document.querySelector("#altura").value = "6000"
    document.querySelector("#observaciones").value = "Libertad*"
  }
}, "30000");
