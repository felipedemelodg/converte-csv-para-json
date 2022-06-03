import { log } from "./saidas.js";

const verSeEstaVazio = (dados) => {
  return dados != "" ? false : true;
};
const verSeFaltaVirgula = (dados) => {
  return dados.includes(",") ? false : true;
};
const listaDeErros = (erros) => {
  const error = Object.entries(erros);
  const lista = [];
  for (let i = 0; i < error.length; i++) {
    if (error[i][1] == true) {
      lista.push(error[i][0]);
    }
  }
  return lista;
};
const numeroDeErros = (listaDeErros) => {
  return listaDeErros.length;
};
const dadoValidado = (listaDeErros, numeroDeErros, valor, tipo) => {
  return numeroDeErros != 0
    ? log(`erros: ${listaDeErros}`) || false
    : { valor: valor, tipo: tipo };
};
const csvOuJson = (dados) => {
  if (dados.includes("[") && dados.includes(",")) {
    return "json";
  } else if (dados.includes(",")) {
    return "csv";
  }
};
export function validacao(dados) {
  const obj = {};
  obj.tipo = csvOuJson(dados);
  obj.erros = {
    "esta vazio": verSeEstaVazio(dados),
    "falta virgula": verSeFaltaVirgula(dados),
  };
  obj.listaDeErros = listaDeErros(obj.erros);
  obj.numeroDeErros = numeroDeErros(obj.listaDeErros);
  obj.value = dadoValidado(
    obj.listaDeErros,
    obj.numeroDeErros,
    dados,
    obj.tipo
  );
  return obj.value;
}
