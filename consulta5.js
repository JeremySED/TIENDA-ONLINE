<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Consulta 5 - Derecho de Examen</title>

<!-- Fuentes -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&family=Orbitron:wght@500;700&display=swap" rel="stylesheet">

<style>
*{margin:0;padding:0;box-sizing:border-box}
body{
    font-family:'Poppins',sans-serif;
    background:url("fondo.jpg") no-repeat center center fixed;
    background-size:cover;
    color:#fff;
    min-height:100vh;
    overflow-x:hidden;
}
#particles-js{
    position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;
}
header{
    text-align:center;
    padding:40px 20px;
    background:rgba(0,0,0,0.55);
    backdrop-filter:blur(6px);
    animation:fadeIn 2s ease-in;
}
header h1{
    font-family:'Orbitron',sans-serif;
    font-size:2.5rem;
    text-transform:uppercase;
    color:#00e5ff;
    text-shadow:0 0 15px #00e5ff;
}
main{
    display:flex;
    justify-content:center;
    padding:40px 20px;
    animation:fadeUp 1.5s ease-in;
}
table{
    border-collapse:collapse;
    background:rgba(0,0,0,0.7);
    border-radius:15px;
    overflow:hidden;
    box-shadow:0 0 20px #00e5ff;
    min-width:700px;
}
th,td{
    padding:12px 20px;
    text-align:center;
}
th{
    background:rgba(0,229,255,0.3);
    color:#00e5ff;
    font-weight:700;
    text-transform:uppercase;
}
td{
    border-bottom:1px solid rgba(255,255,255,0.1);
    font-weight:600;
}
footer{
    background:rgba(0,0,0,0.7);
    text-align:center;
    padding:20px;
    margin-top:40px;
    font-size:0.9rem;
    animation:fadeIn 2s ease-in;
}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
</style>
</head>

<body>
<div id="particles-js"></div>

<header>
    <h1>Consulta 5 - Derecho de Examen de Admisión</h1>
</header>

<main>
    <table id="tablaPostulantes">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Procedencia del colegio</th>
                <th>Importe Base (S/)</th>
                <th>Descuento (S/)</th>
                <th>Importe a Pagar (S/)</th>
            </tr>
        </thead>
        <tbody>
            <!-- Filas generadas por JavaScript -->
        </tbody>
    </table>
</main>

<footer>
    <p>Derechos reservados por: Encinas Dávila Jeremy Stefano</p>
</footer>

<!-- Partículas -->
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
// ----------------------
// Datos de ejemplo
// ----------------------
const postulantes = [
    {nombre:"Ana", colegio:"NACIONAL"},
    {nombre:"Bruno", colegio:"PARTICULAR"},
    {nombre:"Carla", colegio:"NACIONAL"},
    {nombre:"Diego", colegio:"PARTICULAR"}
];

// ----------------------
// Cálculo de importes
// ----------------------
const importe = 285; // precio base examen de admisión

const tbody = document.querySelector("#tablaPostulantes tbody");

postulantes.forEach(p=>{
    const descuento = (p.colegio.toUpperCase()==="NACIONAL")
        ? importe * 0.10
        : importe * 0.03;
    const pagoFinal = importe - descuento;

    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${p.nombre}</td>
        <td>${p.colegio}</td>
        <td>${importe.toFixed(2)}</td>
        <td>${descuento.toFixed(2)}</td>
        <td>${pagoFinal.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
});

// ----------------------
// Partículas
// ----------------------
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#00e5ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#00e5ff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 4, direction: "none", out_mode: "out" }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
</script>
</body>
</html>
