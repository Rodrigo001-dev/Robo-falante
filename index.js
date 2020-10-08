// construtor é algo que vai construir um objeto e o construtor
// SpeechSynthesisUtterance construir o objeto em uma variável, vai deixar
// guardado em uma variável para poder utilizar
const utterance = new SpeechSynthesisUtterance();
utterance.lang = "pt-BR";
utterance.rate = 2;

function speak() {
  // speechSynthesis é um objeto global e o .speak quer dizer que ele vai falar
  // alguma coisa 
  speechSynthesis.speak(utterance);
};

function stop() {
  speechSynthesis.cancel();
};

function setText(event) {
  utterance.text = event.target.innerText;
};