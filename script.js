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

document.addEventListener('keypress', function(e) {
  if(e.key == "Enter") {
    verificarLetras("1");
  }
});

function verificarLetras(linha) {
  var palavra = '';
  for(var i = 1; i < 6; i++) {
    palavra += document.getElementById("l-" + linha + "-" + i).value;
  }

  alert(palavra);
}

function verificarPalavra(palavra) {
  /*verifica se a palavra é possivel*/
}