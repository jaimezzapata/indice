const Imc = document.querySelector('#btnIMC');
const imagenPeso = document.querySelector('#img')

Imc.addEventListener('click', function(){
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const totalImc = parseFloat(peso)/parseFloat(altura*altura);
    const resultado = document.querySelector('#resultadoImc');

    if(totalImc<18.5){
        resultado.textContent='Usted esta bajo de peso: '+totalImc.toFixed(1) ;
        imagenPeso.src = 'img/bajoPeso.jpg ';
    }else{
        if(totalImc>= 18.5 && totalImc<=24.9){
            resultado.textContent='Usted esta saludable: '+totalImc.toFixed(1);
            imagenPeso.src='img/pesoNormal.jpg';
        }else{
            if(totalImc>=25 && totalImc<=29.9){
                resultado.textContent='Usted esta en sobrepeso: '+totalImc.toFixed(1);
                imagenPeso.src='img/sobrePeso.jpg';
            }else{
                if(totalImc>=30 && totalImc<=34.9){
                    resultado.textContent='Usted esta obeso en nivel uno: '+totalImc.toFixed(1);
                    imagenPeso.src='img/obecidadaUno.jpg';
                }else{
                    if(totalImc>=35 && totalImc<=39.9){
                        resultado.textConten='Usted esta obeso en nivel dos: '+totalImc.toFixed(1);
                        imagenPeso.src='img/obecidadDos.jpg';
                    }else{
                        if(totalImc>=40.0){
                            resultado.textContent = 'Usted esta obeso en nivel tres: ' +totalImc.toFixed(1);
                            imagenPeso.src = 'img/obecidadTres.jpg';
                        }else{
                            if(isNaN('peso')||isNaN('altura')){
                                resultado.textContent='No ingresó valores';
                            }
                        }
                    }
                }
            }
        }
    }
});