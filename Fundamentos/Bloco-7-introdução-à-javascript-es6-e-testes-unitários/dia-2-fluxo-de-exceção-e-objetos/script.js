function verificaNum() {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    
    if (!value1 || !value2 || isNaN(value1) || isNaN(value2)) {
    throw new Error("Precisa de dois números.");
    }
    return parseInt(value1) + parseInt(value2);
    }
    
    function sum() {
    try {
    document.getElementById("result").innerHTML = `Resultado: ${verificaNum()}`;
    } catch (error) {
    document.getElementById("result").innerHTML = error.message;
    }
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
    }
    
    window.onload = () => {
    const button = document.getElementById("button");
    button.addEventListener("click", sum);
    }; 