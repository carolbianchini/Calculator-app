function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean () {
   document.getElementById('resultado').innerHTML = ''
}

function back () {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular () {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        alert('Insira uma informação válida');
    }
}


const toggle = document.querySelector('.toggle input');

function toggleRetroMode() {
    document.body.classList.toggle("retro");
  }

  function loadTheme() {
    const retroMode = localStorage.getItem("retro");
  
    if (retroMode) {
        toggleRetroMode();
    }
  }
  
  loadTheme();
  
  toggle.addEventListener("change", function () {
    toggleRetroMode();

    localStorage.removeItem("retro");
  
    if (document.body.classList.contains("retro")) {
      localStorage.setItem("retro", 1);
    }
  });
