
function suma (n1, n2){
let total = n1 + n2
    return total;
}

function resta (n1, n2){
    let total = n1 - n2
    return total;
}

function multiplicacion (n1, n2){
    let total = n1 * n2
    return total;
}

function division (n1, n2){
    let total = n1 / n2
    return total;
}


function tipoOperacion (opc, n1, n2){
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    if (opc == "1"){
        return suma (n1, n2);
    }
    if (opc == "2"){
        return resta (n1, n2);
    }
    if (opc == "3"){
        return multiplicacion (n1, n2);
    }
    if (opc == "4"){
        return division (n1, n2);
    } else {
        alert ("No esta la opcion, los siento");
    }
}