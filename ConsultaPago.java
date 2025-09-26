<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Consulta de Pago</title>
<style>
body{
    background: linear-gradient(135deg,#2c5364,#203a43,#0f2027);
    font-family: Arial, sans-serif;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}
.container{
    background: rgba(0,0,0,0.4);
    padding:30px;
    border-radius:15px;
    box-shadow:0 0 15px rgba(0,0,0,0.6);
    text-align:center;
}
input,select,button{
    width:100%;
    margin:8px 0;
    padding:10px;
    border:none;
    border-radius:8px;
    font-size:16px;
}
button{
    background:#00c3ff;
    color:#fff;
    cursor:pointer;
    transition:background 0.3s;
}
button:hover{ background:#0099cc; }
#resultado{
    margin-top:20px;
    background:rgba(0,0,0,0.4);
    padding:15px;
    border-radius:10px;
    font-weight:bold;
    white-space:pre-wrap;
}
</style>
</head>
<body>
<div class="container">
    <h2>Consulta de Pago</h2>
    <input type="number" id="sueldo" placeholder="Sueldo Base" />
    <select id="categoria">
        <option value="0">--Selecciona--</option>
        <option value="1">Categoría 1 (30% aumento)</option>
        <option value="2">Categoría 2 (20% aumento)</option>
        <option value="3">Categoría 3 (15% aumento)</option>
        <option value="4">Sin aumento</option>
    </select>
    <button onclick="calcular()">Calcular</button>
    <div id="resultado"></div>
</div>

<script>
function calcular(){
    const sueldo = parseFloat(document.getElementById('sueldo').value);
    const categoria = parseInt(document.getElementById('categoria').value);

    if(isNaN(sueldo)){
        alert("Ingresa un sueldo válido");
        return;
    }

    let nuevoSueldo = sueldo;
    switch(categoria){
        case 1: nuevoSueldo = sueldo * 1.30; break;
        case 2: nuevoSueldo = sueldo * 1.20; break;
        case 3: nuevoSueldo = sueldo * 1.15; break;
        // 4 ó 0 -> sin aumento
    }

    document.getElementById('resultado').textContent =
        `El sueldo base es: $${sueldo.toFixed(2)}\n` +
        `Categoría: ${categoria === 0 ? "No seleccionada" : categoria}\n` +
        `-------------------------------\n` +
        `Nuevo Sueldo: $${nuevoSueldo.toFixed(2)}`;
}
</script>
</body>
</html>

