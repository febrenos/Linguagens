
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="manipula">Eu sou a frase do exemplo. Serei alterada quando você clicar.</div>
    <hr>
    <h2>Altere a frase acima clicando nos botões</h2>
    <input type="range" min="1" max="25" value="Muda tamanho da fonte" onchange="mudaTamanhoFonte(this)" />
    <input type="color" onchange="mudaBackground(this)" />
    <br><br>

    <select id="fonte" onchange="mudaFamilia()">
        <option value="roboto">roboto</option>
        <option value="arial">arial</option>
        <option value="verdana">verdana</option>
    </select>

    <input type="checkbox" id="check" value="Coloca borda" onclick="colocaBorder()" />
    <input type="button" value="Muda a cor da borda" onclick="corBorder()" />
    <br><br>
    <input type="button" value="Exclui borda" onclick="excluiBorder()" />
    <input type="button" value="Esconde a div" onclick="escondeDiv()" />
    <input type="color" onchange="mudaCor(this)"/>

    <script>
    

    
    function mudaCor(cor) {
        document.getElementById("manipula").style.color = cor.value;
    }

    function mudaTamanhoFonte(tamanho) {
        
        document.getElementById("manipula").style.fontSize = tamanho.value+"px";
    }

    function mudaBackground(corBackGround) {
        document.getElementById("manipula").style.backgroundColor = corBackGround.value;
    }

    function mudaFamilia() {
        document.getElementById("manipula").style.fontFamily = document.getElementById("fonte").value;
    }

    function escondeDiv() {
        var el = document.getElementById("manipula");

        if ( el.style.display != 'none' ) {
        el.style.display = 'none';
        }
        else if(el.style.display != 'block'){
        el.style.display = 'block';
        }        
    }    

    function colocaBorder() {
        
        document.getElementById("manipula").style.border =document.getElementById("check").checked == true? "2px solid #0000ff" : "0px";
    }

    function corBorder() {
        document.getElementById("manipula").style.border = "2px solid #0000ff";
    }

    function excluiBorder() {
        document.getElementById("manipula").style.border = "0px";
    }
</script>

</body>

</html>