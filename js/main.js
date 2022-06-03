import { elem } from "./elementos.js";
import { limparCaixaDeTexto } from "./limpar.js";
import { validacao } from "./validacao.js";
import { converteParaJson } from "./csvParaJson.js";
import { converteParaCsv } from "./converteParaCsv.js";
import {soberArquivo} from "./sobeArquivo.js"



elem.form.addEventListener("submit", (e) => {
  e.preventDefault();
});

elem.botaoConverteParaJson.addEventListener("click", () => {
  const dados = validacao(elem.caixaDeTexto.value);
  if (dados != false) {
    elem.caixaDeTextoConvertido.innerText = converteParaJson(dados.valor);
  }
});
elem.botaoConverteParaCsv.addEventListener("click", () => {
  const dados = validacao(elem.caixaDeTexto.value);
  if (dados != false) {
    elem.caixaDeTextoConvertido.innerText = converteParaCsv(dados.valor);
  }
});

elem.botaoLimpar.addEventListener('click',limparCaixaDeTexto,false)

elem.botaoUpload.addEventListener('change',soberArquivo,false)

const x = [
  { id: "1", nome: "felipe", idade: "29" },
  { id: "2", nome: "artur", idade: "19" },
  { id: "3", nome: "nina", idade: "39" },
];
