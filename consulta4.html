<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Consulta 3 - Promedio Final</title>
<link rel="stylesheet" href="consulta1.css">
<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
}
form {
    background: rgba(255,255,255,0.1);
    border-radius: 15px;
    padding: 30px;
    max-width: 400px;
    margin: 80px auto;
    color: #fff;
    text-align: center;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
}
form input, form select {
    width: 90%;
    padding: 10px;
    margin: 8px 0;
    border-radius: 10px;
    border: none;
    outline: none;
    text-align: center;
}
form button {
    background: #00c3ff;
    color: #fff;
    border: none;
    padding: 12px 25px;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.3s;
}
form button:hover {
    background: #0099cc;
}
.resultado {
    margin-top: 40px;
    text-align: center;
    color: #fff;
    font-size: 1.2em;
    background: rgba(0,0,0,0.4);
    padding: 20px;
    border-radius: 15px;
}
#particles-js {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
}
</style>
</head>
<body>
<div id="particles-js"></div>

<form id="formPromedio">
    <h2>Consulta 3 - Promedio de Alumno</h2>
    <input type="text" id="nombre" placeholder="Nombre del alumno" required>
    <select id="genero" required>
        <option value="">Seleccione Género</option>
        <option value="MASCULINO">Masculino</option>
        <option value="FEMENINO">Femenino</option>
    </select>
    <input type="number" step="0.1" id="n1" placeholder="Nota 1" required>
    <input type="number" step="0.1" id="n2" placeholder="Nota 2" required>
    <input type="number" step="0.1" id="n3" placeholder="Nota 3" required>
    <input type="number" step="0.1" id="n4" placeholder="Nota 4" required>
    <button type="submit">Calcular</button>
</form>

<div class="resultado" id="resultado" style="display:none;"></div>

<!-- particles.js -->
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
// Efecto de partículas
particlesJS("particles-js", {
  particles: {
    number: { value:80, density: { enable:true, value_area:800 }},
    color: { value:"#ffffff" },
    shape: { type:"circle" },
    opacity: { value:0.5, random:true },
    size: { value:3, random:true },
    line_linked: { enable:false },
    move: { enable:true, speed:2, random:true, out_mode:"out" }
  },
  interactivity: {
    events: { onhover:{ enable:true, mode:"repulse" }, onclick:{ enable:true, mode:"push" } },
    modes: { repulse:{ distance:100, duration:0.4 }, push:{ particles_nb:4 } }
  },
  retina_detect: true
});

// Lógica de cálculo
document.getElementById("formPromedio").addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const genero = document.getElementById("genero").value;
    const notas = [
        parseFloat(document.getElementById("n1").value),
        parseFloat(document.getElementById("n2").value),
        parseFloat(document.getElementById("n3").value),
        parseFloat(document.getElementById("n4").value)
    ];

    const pf = (notas.reduce((a,b) => a+b, 0) / notas.length).toFixed(2);
    const np = (parseFloat(pf) + 1).toFixed(2); // Ajusta la fórmula si necesitas otra.

    document.getElementById("resultado").style.display = "block";
    document.getElementById("resultado").innerHTML = `
        <h3>Resultados para: <strong>${nombre}</strong></h3>
        <p>Género: <strong>${genero}</strong></p>
        <p>Promedio Final (PF): <strong>${pf}</strong></p>
        <p>Nuevo Promedio (NP): <strong>${np}</strong></p>
    `;
});
</script>

</body>
</html>

