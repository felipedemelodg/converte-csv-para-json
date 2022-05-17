import { elementos } from "./elementos.js";



function x (e){
    let file = e.target.files[0]
    let fileReader = new FileReader()
    fileReader.readAsText(file)
    fileReader.onload  = ()=>{
        elementos.caixaDeTexto.innerText = fileReader.result
        console.log(fileReader.result)
    }
    // console.log(file.name)
}
elementos.botaoUpload.addEventListener('change',x,false)

