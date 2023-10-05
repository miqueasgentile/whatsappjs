document.querySelector('._3WByx').innerHTML += '<button id="cp_btn" class="click_btn">Copiar<span>(contacto)</span></button><button id="cp_btn2" class="click2_btn">Copiar<span>(no contacto)</span></button>';


document.getElementById("cp_btn").addEventListener("click", copy_password);

function copy_password() {
    document.querySelector("._2au8k").click();
        setTimeout(function() {
    var copyText = document.querySelector("span.enbbiyaj.e1gr2w1z.hp667wtd").innerText;
    var numero = copyText.slice(6);
    var textArea = document.createElement("textarea");
    textArea.value = numero;
    document.body.appendChild(textArea);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(numero)
        .then(function () {
          document.getElementById("okay").innerHTML = "Copiado"
        })
        .catch(function (erro) {
        document.getElementById("okay").innerHTML = erro
           
        });
    }  
    textArea.remove();
  }, 50);
};

document.querySelector(".click_btn").addEventListener("click", cick_password);

function cick_password() {
    setTimeout(function() {
document.querySelector(".kk3akd72.svlsagor.fewfhwl7.ajgl1lbb.ltyqj8pj").click();
  }, 150);
};

document.getElementById("cp_btn2").addEventListener("click", copy_password2);

function copy_password2() {
    document.querySelector("._2au8k").click();
        setTimeout(function() {
    var copyText = document.querySelector("._3_9fX>div>span>span.l7jjieqr._11JPr").innerText;
    var numero = copyText.slice(6);
    var textArea = document.createElement("textarea");
    textArea.value = numero;
    document.body.appendChild(textArea);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(numero)
        .then(function () {
          document.getElementById("okay").innerHTML = "Copiado"
        })
        .catch(function (erro) {
        document.getElementById("okay").innerHTML = erro
           
        });
    }  
    textArea.remove();
  }, 50);
};

document.querySelector(".click2_btn").addEventListener("click", cick2_password);

function cick2_password() {
    setTimeout(function() {
document.querySelector(".kk3akd72.svlsagor.fewfhwl7.ajgl1lbb.ltyqj8pj").click();
  }, 150);
};
