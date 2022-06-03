export function converteParaJson(csv) {
  
  const linhas = csv.split("\n");
  const titulos = linhas[0].split(",");
  const resultado = [];
  for (let i = 1; i < linhas.length; i++) {
    let obj = {};
    let linhaAtual = linhas[i].split(",");
    for (let j = 0; j < titulos.length; j++) {
      obj[titulos[j]] = linhaAtual[j];
    }
    resultado.push(obj);
  }
  return JSON.stringify(resultado);
}
// id,nome,idade,cidade
// 1,felipe,29,recife
// 2,maria,20,olinda
// 3,artur,12,camaragibe
// 4,lidia,23,sao paulo
