const deixaSoAsVigulas = (json) => {
  return json
    .replace(/[\[\];" "{]/g, "")
    .replace(/:/g, ",")
    .replace(/[}],/g, "")
    .replace(/}/g, "");
};
const separaPorLinha = (string) => {
  return string.split("\n").filter((el) => el != "");
};
const cadaLinhaUmArray = (array) => {
  const arr = [];
  array.forEach((el) => {
    arr.push(el.split(","));
  });
  return arr;
};
export function converteParaCsv(json) {
  const string = deixaSoAsVigulas(json);
  const linhas = separaPorLinha(string);
  const array = cadaLinhaUmArray(linhas);
  let titulosRepetidos = [];
  let conteudo = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (j % 2 == 0) {
        titulosRepetidos.push(array[i][j]);
      } else {
        conteudo.push(array[i][j]);
      }
    }
  }
  const titulos = titulosRepetidos.filter((el, i) => {
    return titulosRepetidos.indexOf(el) === i;
  });
  let conteudoSeparadoPorLinha = [];
  for (let i = 0; i <= conteudo.length; i = i + titulos.length) {
    for (let j = 0; j <= conteudo.length; j++) {
      conteudoSeparadoPorLinha.push(conteudo.slice(j, i));
    }
  }
  const conteudoFinal = conteudoSeparadoPorLinha.filter(
    (el) => el.length == titulos.length
  );
  let str = "";
  for (let x of conteudoFinal) {
    str += `${x}\n`;
  }
  return `${titulos}\n${str}`;
}
