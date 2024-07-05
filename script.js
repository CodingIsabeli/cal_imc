
function calcIMC(event) {
    event.preventDefault();

    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let imc = peso / (altura * altura);

    if (imc < 16) {
        document.getElementById('txtIndic').innerText = `Seu IMC é de:`;
        document.getElementById('resultado').innerText = `${imc.toFixed(2)}`;
        document.getElementById('txtApoio').innerText = `Você se enquadra na categoria: Magreza grave`;

    }
    else if (imc >= 16 && imc <= 16.9){
        document.getElementById('txtIndic').innerText = `Seu IMC é de:`;
        document.getElementById('resultado').innerText = `${imc.toFixed(2)}`;
        document.getElementById('txtApoio').innerText = `Você se enquadra na categoria: Magreza moderada`;

    }
    else if (imc >= 17 && imc <= 18.5){
        document.getElementById('txtIndic').innerText = `Seu IMC é de:`;
        document.getElementById('resultado').innerText = `${imc.toFixed(2)}`;
        document.getElementById('txtApoio').innerText = `Você se enquadra na categoria: Magreza leve.`;

    }

    else if (imc >= 18.6 && imc <= 24.9){
        document.getElementById('txtIndic').innerText = `Seu IMC é de:`;
        document.getElementById('resultado').innerText = `${imc.toFixed(2)}`;
        document.getElementById('txtApoio').innerText = `Parabéns! Você está no seu peso ideal.`;
    }

    else if (imc >= 25 && imc <= 29.9){
        document.getElementById('txtIndic').innerText = `Seu IMC é de:`;
        document.getElementById('resultado').innerText = `${imc.toFixed(2)}`;
        document.getElementById('txtApoio').innerText = `Você se enquadra na categoria: Sobrepeso`;
    }
    

    else if (imc >= 30 && imc <= 34.9){
        document.getElementById('txtIndic').innerText = `Seu IMC é de:`;
        document.getElementById('resultado').innerText = `${imc.toFixed(2)}`;
        document.getElementById('txtApoio').innerText = `Você se enquadra na categoria: Obesidade grau I.`;
    }

    else if (imc >= 35 && imc <= 39.9){
        document.getElementById('txtIndic').innerText = `Seu IMC é de:`;
        document.getElementById('resultado').innerText = `${imc.toFixed(2)}`;
        document.getElementById('txtApoio').innerText = `Você se enquadra na categoria: Obesidade grau II ou severa`;
    }


    else{
        document.getElementById('txtIndic').innerText = `Seu IMC é de:`;
        document.getElementById('resultado').innerText = `${imc.toFixed(2)}`;
        document.getElementById('txtApoio').innerText = `Você se enquadra na categoria: Obesidade grau III ou mórbida.`;
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    
    document.getElementById('tit').classList.add('hidden');
    document.getElementById('formDados').classList.add('hidden');
    document.getElementById('mostrarResult').classList.remove('hidden');
}

function showForm() {
    document.getElementById('tit').classList.remove('hidden');
    document.getElementById('formDados').classList.remove('hidden');
    document.getElementById('mostrarResult').classList.add('hidden');
}