function somar() {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  document.getElementById("res").textContent = "Resultado: " + (a + b);
}