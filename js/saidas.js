export function log(msg) {
  let paragrafo = document.createElement("p");
  paragrafo.className = "log";
  paragrafo.innerText = msg;
  document.body.appendChild(paragrafo);
  limpalog();
}
function limpalog() {
  const log = Object.values(document.getElementsByClassName("log"));
  setTimeout(() => {
    log.forEach((el) => el.remove());
  }, 10000);
}
