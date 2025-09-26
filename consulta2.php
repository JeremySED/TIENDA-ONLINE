<?php
// --- LÓGICA PHP ---
$resultado = "";
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $clave   = intval($_POST['clave'] ?? 0);
    $minutos = floatval($_POST['minutos'] ?? 0);

    // Tabla de zonas y precios
    $zonas = [
        12 => ["América del Norte", 2.1],
        15 => ["América Central",   2.6],
        18 => ["América del Sur",   4.5],
        19 => ["Europa",            3.6],
        23 => ["Asia",              6.5],
        25 => ["África",            7.8],
        29 => ["Oceanía",           3.9]
    ];

    if (isset($zonas[$clave])) {
        $zona   = $zonas[$clave][0];
        $precio = $zonas[$clave][1];
        $total  = $precio * $minutos;
        $resultado = "
            <div class='resultado fadeUp'>
                <h2>Resultado de la Consulta</h2>
                <p>Zona: <strong>{$zona}</strong></p>
                <p>Precio por minuto: <strong>\${$precio}</strong></p>
                <p>Minutos hablados: <strong>{$minutos}</strong></p>
                <hr>
                <p>Costo total de la llamada: <strong>\$".number_format($total,2)."</strong></p>
            </div>
        ";
    } else {
        $resultado = "
            <div class='resultado fadeUp'>
                <h2>Clave inválida</h2>
                <p>No existe una zona registrada con la clave <strong>{$clave}</strong>.</p>
            </div>
        ";
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Consulta de Costo de Llamada</title>

<!-- Tipografías -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&family=Orbitron:wght@500;700&display=swap" rel="stylesheet">
<!-- Iconos -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

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
#particles-js{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;}
header{
    text-align:center;
    padding:40px 20px;
    background:rgba(0,0,0,0.55);
    backdrop-filter:blur(6px);
    animation:fadeIn 2s ease-in;
}
header h1{
    font-family:'Orbitron',sans-serif;
    font-size:2.8rem;
    text-transform:uppercase;
    color:#00e5ff;
    text-shadow:0 0 15px #00e5ff;
}
main{
    display:flex;
    justify-content:center;
    align-items:flex-start;
    margin-top:50px;
    flex-direction:column;
    gap:40px;
}
form{
    background:rgba(0,0,0,0.7);
    padding:30px;
    border-radius:20px;
    max-width:400px;
    margin:auto;
    animation:fadeUp 1.5s ease-in;
    box-shadow:0 0 20px #00e5ff;
}
form h2{
    font-family:'Orbitron',sans-serif;
    color:#00e5ff;
    margin-bottom:20px;
    text-align:center;
}
label{
    font-weight:600;
    display:block;
    margin-top:15px;
    margin-bottom:5px;
}
input[type="number"]{
    width:100%;
    padding:10px;
    border:none;
    border-radius:10px;
    font-size:1rem;
    outline:none;
    margin-bottom:10px;
}
button{
    display:block;
    margin:20px auto 0;
    padding:12px 30px;
    background:#00e5ff;
    color:#000;
    border:none;
    border-radius:25px;
    font-weight:700;
    font-size:1.1rem;
    cursor:pointer;
    transition:transform .3s, background .3s;
}
button:hover{
    transform:scale(1.05);
    background:#00bcd4;
}
.resultado{
    background:rgba(0,0,0,0.7);
    max-width:400px;
    margin:0 auto;
    padding:25px;
    border-radius:20px;
    text-align:center;
    box-shadow:0 0 20px #00e5ff;
}
.resultado h2{
    font-family:'Orbitron',sans-serif;
    color:#00e5ff;
    margin-bottom:15px;
}
.resultado p{margin:10px 0;font-size:1.1rem;}
hr{border:1px solid #00e5ff;margin:15px 0;}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.tabla-zonas{
    max-width:600px;
    margin:30px auto;
    background:rgba(0,0,0,0.6);
    border-radius:15px;
    padding:20px;
    box-shadow:0 0 15px #00e5ff;
    animation:fadeUp 1.5s ease-in;
}
.tabla-zonas table{
    width:100%;
    border-collapse:collapse;
    text-align:center;
    color:#fff;
}
.tabla-zonas th,.tabla-zonas td{
    padding:10px;
    border-bottom:1px solid #00e5ff;
}
.tabla-zonas th{
    color:#00e5ff;
    font-family:'Orbitron',sans-serif;
}
</style>
</head>
<body>
<div id="particles-js"></div>

<header>
    <h1>Costo de Llamadas Internacionales</h1>
</header>

<main>
    <div class="tabla-zonas">
        <table>
            <tr><th>Clave</th><th>Zona</th><th>Precio por Minuto ($)</th></tr>
            <tr><td>12</td><td>América del Norte</td><td>2.1</td></tr>
            <tr><td>15</td><td>América Central</td><td>2.6</td></tr>
            <tr><td>18</td><td>América del Sur</td><td>4.5</td></tr>
            <tr><td>19</td><td>Europa</td><td>3.6</td></tr>
            <tr><td>23</td><td>Asia</td><td>6.5</td></tr>
            <tr><td>25</td><td>África</td><td>7.8</td></tr>
            <tr><td>29</td><td>Oceanía</td><td>3.9</td></tr>
        </table>
    </div>

    <form method="POST" action="">
        <h2>Calcular Costo de Llamada</h2>
        <label for="clave">Clave de zona</label>
        <input type="number" name="clave" id="clave" required placeholder="Ej: 12">

        <label for="minutos">Minutos hablados</label>
        <input type="number" name="minutos" id="minutos" required min="0" step="0.1" placeholder="Ej: 10">

        <button type="submit">Calcular</button>
    </form>

    <?php echo $resultado; ?>
</main>

<footer style="text-align:center;margin-top:40px;background:rgba(0,0,0,0.7);padding:15px;">
    <p>Derechos reservados © 2025</p>
</footer>

<!-- Partículas -->
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
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
