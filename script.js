/*document.querySelectorAll("input").forEach( function(input) {
    
  input.addEventListener("keydown", function(event) {
  const el = event.target;
  const id = el.id;
  var letraLinha = id.substring(0, 4);
  var letraId = id.substring(4);
  var proximoCampo = letraLinha + (parseInt(letraId) + 1);

  document.getElementById(proximoCampo).focus();
});

});*/

var tentativa = 1;

document.addEventListener('keypress', function(e) {
  if(e.key == "Enter") {
    verificarLetras(tentativa);
  }
});

function verificarLetras(linha) {
  var palavra = '';
  for(var i = 1; i < 6; i++) {
    palavra += document.getElementById("l-" + linha + "-" + i).value;
  }

  var quantidadeLetras = palavra.length;

  if (quantidadeLetras == 5) {
    verificarPalavra(palavra);
  } else {
    alert("A palavra precisa ter 5 letras");
  }
}

function verificarPalavra(palavra) {
  if (palavra == "RADAR") {
    alert("Voce venceu!");
  } else {
    alert("Voce errou a palavra!");
    tentativa++;
  }

  if (tentativa > 6) {
    alert("Você perdeu!");
  }
}