const converteParaArray = (dados) => {
  return dados.split("\n");
};
const csvParaJson = (csv, titulos) => {
  let propriedades;
  let resultado = [];

  for (let i = 1; i < csv.length; i++) {
    let str;
    let obj = {};
    let s = "";
    str = csv[i];
    let flag = 0;

    for (let ch of str) {
      if (ch === '"' && flag === 0) {
        flag = 1;
      } else if (ch === '"' && flag == 1) {
        flag = 0;
      }

      if (ch === "," && flag === 0) {
        ch = "|";
      }
      if (ch !== '"') {
        s += ch;
      }
    }

    propriedades = s.split("|");
    console.log(propriedades);
    
    for (let j in titulos) {
      if (propriedades[j].includes(",")) {
        obj[titulos[j]] = propriedades[j].split(",").map((item) => item.trim());
      } else {
        obj[titulos[j]] = propriedades[j];
      }
    }
    resultado.push(obj);
  }
  return resultado;
};
const dados = (dados) => {
  const resultado = [];
  const csvParaArray = converteParaArray(dados);
  const titulos = csvParaArray[0].split(",");
  const dadosConvertidosParaJson = csvParaJson(csvParaArray, titulos);

  return dadosConvertidosParaJson;
};
export const tratar = {
  dados,
};
