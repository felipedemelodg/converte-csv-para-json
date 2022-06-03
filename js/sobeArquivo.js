import { elem } from "./elementos.js";
export function soberArquivo(e) {
    let file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = () => {
      elem.caixaDeTexto.value = fileReader.result;
     };
  }