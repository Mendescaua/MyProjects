function horas() {
  const horas = new Date();
  return horas.toLocaleTimeString("pt-BR", {
    hora12: false,
  });
}
function relogio() {
  const hora = document.querySelector(".horas");
  hora.innerHTML = horas();
}
setInterval(relogio, 1000);

function data() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const data = new Date();
  return data.toLocaleDateString("pt-BR", options);
}
function mudarData() {
  const mudar = document.querySelector(".mudar");
  mudar.innerHTML = data();
}
mudarData();
