<?php

function gerarHTMLLinha() {
  for($linha = 1; $linha < 7; $linha++) {
    $html = file_get_contents("linha.html");
    $html = str_replace('{{linha}}', $linha, $html);
    echo $html;
  }
}