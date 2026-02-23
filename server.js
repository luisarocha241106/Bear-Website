// server.js — isto aqui é o backend
// basicamente é o que corre no computador e manda coisas para o browser

// isto carrega o express, que é tipo uma ferramenta que nos ajuda a criar o servidor
const express = require('express');

// aqui estamos a criar o nosso servidor
const app = express();

// esta é a porta pensa nisto como o "canal" onde o servidor ouve
const PORT = 3000;

// isto diz ao servidor: "mostra tudo o que está na pasta public no browser"
// ou seja, é assim que o teu HTML aparece quando abres o site
app.use(express.static('public'));

// agora vem a parte fixe a API
// uma API é tipo um "endereço secreto" que em vez de mostrar uma pagina,
// devolve dados (neste caso curiosidades sobre ursos)

// aqui meti uma lista de curiosidades
const curiosidades = [
  "🐻 Os ursos castanhos podem correr a 56 km/h!",
  "🐻 Um urso castanho pode comer até 40 kg de comida por dia antes de hibernar.",
  "🐻 Os ursos castanhos conseguem cheirar comida a 30 km de distância!",
  "🐻 Os ursos bebés nascem durante a hibernação da mãe.",
  "🐻 Um urso castanho pode viver até 25 anos na natureza.",
  "🐻 Os ursos castanhos são excelentes nadadores!",
  "🐻 A mordida de um urso castanho pode esmagar uma bola de bowling.",
  "🐻 Os ursos castanhos não são sempre castanhos — podem ser loiros ou quase pretos!"
];

// quando alguem vai ao endereço /api/curiosidade, o servidor escolhe uma ao calhas e manda de volta
app.get('/api/curiosidade', (req, res) => {
  // escolhe um numero aleatorio para ir buscar uma curiosidade da lista
  const indice = Math.floor(Math.random() * curiosidades.length);
  const curiosidade = curiosidades[indice];

  // manda a curiosidade de volta em JSON (que é tipo a "lingua" que o frontend e o backend usam para falar)
  res.json({
    curiosidade: curiosidade,
    total: curiosidades.length
  });
});

// aqui é onde ligamos o servidor — tipo carregar no botão ON
app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
  console.log(`Abre no browser: http://localhost:${PORT}/HomePage.html`);
});
