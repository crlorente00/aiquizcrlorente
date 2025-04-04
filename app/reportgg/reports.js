

//Listado de preguntas reportadas!!!!!!!!!!!!!!!!!!!!!!!!
export const preguntasreportadas = (metricas) => {
let preguntasreportadas =[];
//encontrar preguntas reportadas y eliminar duplicados
metricas.forEach((fila) =>{
    if (fila.studentReport == true && preguntasreportadas.includes(fila.query)==false){
        preguntasreportadas = [...preguntasreportadas, fila.query]
    }

})
    return preguntasreportadas;
}



//Sacar número de preguntas y porcentaje de acierto segun dificultad!!!!!!!!!!!!!!!!!!!!!!
export const porcentajeaciertopordificultad = (metricas) =>{
let array = [
    {dificultad: "facil", nacierto: 0, npreguntas:0},
    {dificultad: "intermedio", nacierto: 0, npreguntas:0},
    {dificultad: "avanzado", nacierto: 0, npreguntas:0}
    
];
//Datos sin preguntas reportadas
let metricasSINreportadas = metricas.reduce((res, fila) => {
    if(fila.studentReport==false){
        return res = [...res, fila]
    }
    return res
    }, []);

//Sacar numero preguntas y numero acierto
metricasSINreportadas.forEach((fila)=>{
    for (let i = 0; i < array.length; i++) {

        let naciertoanterior = array[i].nacierto
        let npreguntasanterior = array[i].npreguntas

        if (array[i].dificultad === fila.difficulty) {
            if(fila.correctAnswer == true){
                array[i] = { ...array[i], nacierto: naciertoanterior + 1, npreguntas: npreguntasanterior + 1 }; 
            }else{
                array[i] = { ...array[i], npreguntas: npreguntasanterior+1};
            }

          break; // Salimos del bucle después de encontrar y actualizar el objeto
        }
      }
})
return array;
}



//Preguntas mas frecuentes y su porcentaje de acierto!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const pregMasFrecuentesYPorcentajeAcierto = (metricas) =>{

//Datos sin preguntas reportadas
let metricasSINreportadas = metricas.reduce((res, fila) => {
    if(fila.studentReport==false){
        return res = [...res, fila]
    }
    return res
    }, []);

    let preguntas_numeroaciertos = [];

    // Recorremos cada fila para calcular aciertos y apariciones de cada pregunta
    metricasSINreportadas.forEach(row => {
        const query = row.query;
        const correctAnswer = row.correctAnswer;
    
        if (preguntas_numeroaciertos[query]) {
            if (correctAnswer) {
                preguntas_numeroaciertos[query][0] += 1;
            }
            preguntas_numeroaciertos[query][1] += 1;
        } else {
            if (correctAnswer) {
                preguntas_numeroaciertos[query] = [1,1];
            }else{
                preguntas_numeroaciertos[query] = [0,1];
            }
        }
    });
    
    // Filtramos las preguntas más repetidas (respondidas 15 veces o más) y calculamos el porcentaje de aciertos
    let preguntas_mas_repetidas = [];
    for (let pregunta in preguntas_numeroaciertos) {
        const [numAciertos, numTotal] = preguntas_numeroaciertos[pregunta];
        if (numTotal >= 15) {
            preguntas_mas_repetidas[pregunta] = (numAciertos / numTotal) * 100;
        }
    }
    console.log(preguntas_mas_repetidas)
    
    return preguntas_mas_repetidas
}




//Temas genericos frecuencia y porcentaje de acierto!!!!!!!!!!!!!!!!
export const temasFrecuenciaYPorcentajedeAcierto = (metricas) =>{

//Datos sin preguntas reportadas
let metricasSINreportadas = metricas.reduce((res, fila) => {
    if(fila.studentReport==false){
        return res = [...res, fila]
    }
    return res
    }, []);

metricasSINreportadas.forEach((fila) => {
    if(fila.language == "JSON y esquema JSON"){
        fila.language = "JSON y JSON Schema";
    }else if (fila.language == 'Marco de agregación de MongoDB'){
        fila.language = 'MongoDB Aggregation Framework';
    }else if (fila.language == 'javascript_cliente'){
        fila.language = 'JavaScript Cliente';
    }else if (fila.language =='javascript'){
        fila.language =  'Lenguaje JavaScript';
    }
})

metricasSINreportadas.forEach((fila) =>{
    let tema = fila.language;
    fila.language = tema.toUpperCase();
})


let temas_numeroaciertos = {};

// Recorremos cada fila para calcular aciertos y apariciones de cada pregunta
metricasSINreportadas.forEach((fila)=> {
    const tema = fila.language;

    if (temas_numeroaciertos[tema]) {
        if (fila.correctAnswer) {
            temas_numeroaciertos[tema][0] += 1;
        }
        temas_numeroaciertos[tema][1] += 1;
    } else {
        if (fila.correctAnswer) {
            temas_numeroaciertos[tema] = [1,1];
        }else{
            temas_numeroaciertos[tema] = [0,1];
        }
    }
});

let arrayfinal = [];

for (let tema in temas_numeroaciertos) {
    arrayfinal.push({tema: tema, naciertos: temas_numeroaciertos[tema][0], npreguntas: temas_numeroaciertos[tema][1], porcentajeacierto: temas_numeroaciertos[tema][0]/temas_numeroaciertos[tema][1]*100 }) 

}
console.log(arrayfinal)
return arrayfinal
}




//Temas frecuencia y porcentaje de acierto GIB !!!!
export const temasGIB = (metricas)=>{
    
//Datos sin preguntas reportadas
let metricasSINreportadas = metricas.reduce((res, fila) => {
    if(fila.studentReport==false){
        return res = [...res, fila]
    }
    return res
    }, []);

metricasSINreportadas.forEach((fila) => {
    if(fila.language == "JSON y esquema JSON"){
        fila.language = "JSON y JSON Schema";
    }else if (fila.language == 'Marco de agregación de MongoDB'){
        fila.language = 'MongoDB Aggregation Framework';
    }else if (fila.language == 'javascript_cliente'){
        fila.language = 'JavaScript Cliente';
    }else if (fila.language =='javascript'){
        fila.language =  'Lenguaje JavaScript';
    }
})

metricasSINreportadas.forEach((fila) =>{
    let tema = fila.language;
    fila.language = tema.toUpperCase();
})

let metricasGIB = metricasSINreportadas.reduce((res, fila) => {
    if(fila.Degree=="GIB"){
        return res = [...res, fila]
    }
    return res
    }, []);



let temas_numeroaciertos = {};

// Recorremos cada fila para calcular aciertos y apariciones de cada pregunta
metricasGIB.forEach((fila)=> {
    const tema = fila.language;

    if (temas_numeroaciertos[tema]) {
        if (fila.correctAnswer) {
            temas_numeroaciertos[tema][0] += 1;
        }
        temas_numeroaciertos[tema][1] += 1;
    } else {
        if (fila.correctAnswer) {
            temas_numeroaciertos[tema] = [1,1];
        }else{
            temas_numeroaciertos[tema] = [0,1];
        }
    }
});

let arrayfinal = [];

for (let tema in temas_numeroaciertos) {
    arrayfinal.push({tema: tema, naciertos: temas_numeroaciertos[tema][0], npreguntas: temas_numeroaciertos[tema][1], porcentajeacierto: (temas_numeroaciertos[tema][0]/temas_numeroaciertos[tema][1]*100).toFixed(2) }) 

}

return arrayfinal
}


//Temas frecuencia y porcentaje de acierto GITST !!!!
export const temasGITST = (metricas)=>{
    
    //Datos sin preguntas reportadas
    let metricasSINreportadas = metricas.reduce((res, fila) => {
        if(fila.studentReport==false){
            return res = [...res, fila]
        }
        return res
        }, []);
    
    metricasSINreportadas.forEach((fila) => {
        if(fila.language == "JSON y esquema JSON"){
            fila.language = "JSON y JSON Schema";
        }else if (fila.language == 'Marco de agregación de MongoDB'){
            fila.language = 'MongoDB Aggregation Framework';
        }else if (fila.language == 'javascript_cliente'){
            fila.language = 'JavaScript Cliente';
        }else if (fila.language =='javascript'){
            fila.language =  'Lenguaje JavaScript';
        }
    })
    
    metricasSINreportadas.forEach((fila) =>{
        let tema = fila.language;
        fila.language = tema.toUpperCase();
    })
    
    let metricasGITST = metricasSINreportadas.reduce((res, fila) => {
        if(fila.Degree=="GITST"){
            return res = [...res, fila]
        }
        return res
        }, []);
    
    
    
    let temas_numeroaciertos = {};
    
    // Recorremos cada fila para calcular aciertos y apariciones de cada pregunta
    metricasGITST.forEach((fila)=> {
        const tema = fila.language;
    
        if (temas_numeroaciertos[tema]) {
            if (fila.correctAnswer) {
                temas_numeroaciertos[tema][0] += 1;
            }
            temas_numeroaciertos[tema][1] += 1;
        } else {
            if (fila.correctAnswer) {
                temas_numeroaciertos[tema] = [1,1];
            }else{
                temas_numeroaciertos[tema] = [0,1];
            }
        }
    });
    
    let arrayfinal = [];
    
    for (let tema in temas_numeroaciertos) {
        arrayfinal.push({tema: tema, naciertos: temas_numeroaciertos[tema][0], npreguntas: temas_numeroaciertos[tema][1], porcentajeacierto: (temas_numeroaciertos[tema][0]/temas_numeroaciertos[tema][1]*100 ).toFixed(2)}) 
    
    }
    
    return arrayfinal
}


//Numero de respuestas a lo largo de los meses!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
export const temporal = (metricas)=>{
//Datos sin preguntas reportadas
let metricasSINreportadas = metricas.reduce((res, fila) => {
    if(fila.studentReport==false){
        return res = [...res, fila]
    }
    return res
    }, []);


// Función para calcular el mes a partir del número serializado de Excel
function getMonthFromSerial(serial) {
    const excelEpoch = new Date(1900, 0, 1); //Excel empieza a contar desde 1 de enero de 1900
    const days = serial - 2; // Ajustar desfase de Excel
    const fecha = new Date(excelEpoch.getTime() + days * 24 * 60 * 60 * 1000);
    return fecha.getMonth() + 1; // Mes (1-12)
}



// Obtener los meses de las fechas
let meses = metricasSINreportadas.map((fila) => {
    if(fila.created_at > 50000){ //generado desde la app
        return new Date(fila.created_at).getMonth();
    }
    return getMonthFromSerial(fila.created_at); //si es exportado de excel
}); 


// Cambiar número de meses por el nombre del mes
let nombreMeses = meses.map(mes => {
    
    console.log(mes)
    switch (mes) {
        case 0: return 'Enero';
        case 1: return 'Enero';
        case 2: return 'Febrero';
        case 3: return 'Marzo';
        case 4: return 'Abril';
        case 5: return 'Mayo';
        case 6: return 'Junio';
        case 7: return 'Julio';
        case 8: return 'Agosto';
        case 9: return 'Septiembre';
        case 10: return 'Octubre';
        case 11: return 'Noviembre';
        case 12: return 'Diciembre';
    }
});

// Contar el número de preguntas por mes
const mesesNumeropreguntas = {};
nombreMeses.forEach((mes) => {
    if (mesesNumeropreguntas[mes]) {
        mesesNumeropreguntas[mes]++;
    } else {
        mesesNumeropreguntas[mes] = 1;
    }
});

return mesesNumeropreguntas

}