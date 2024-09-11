// Daniel-AvN

//objeto Json, cada propiedad de este objeto se encierra entre comillas

// let alumnoJson ={//arcivo json
//     "nombre": "Daniel AvN", //cada propiedad se separa por comas
//     "edad": 17,
//     "materia": "JavaScript",
//     "calificacion": 9.5
// }

// let informa = document.getElementById("inf")

// informa.innerHTML = `nombre: ${alumnoJson.nombre},<br> edad: ${alumnoJson.edad} ,<br> materia: ${alumnoJson.materia} <br>calificacion: ${alumnoJson.calificacion}` //template string
// // informa.innerHTML = JSON.stringify(alumnoJson) //template string


// ejemplo 2 convirtiendo en string a JSon para manipularlo
// JSON.parse() convierte un string a JSon 

// let datos = '{"nombre": "Daniel AvN", "edad": 17 , "materia": "JavaScript", "calificacion": 9}'

// console.log(datos);

// let objetoJson = JSON.parse(datos);

// console.log(objetoJson); 

// let informa = document.getElementById("inf")

// informa.innerHTML = `<ul>
//         <li>nombre: ${objetoJson.nombre} </li>
//         <li>edad: ${objetoJson.edad} </li>
//         <li>materia: ${objetoJson.materia} </li>
//         <li>calificacion: ${objetoJson.calificacion} </li>
//         </ul>
//         <br> <br>
//        selecciona una opcion
//        <br> <br>
//         <select>
//             <option>nombre: ${objetoJson.nombre} </option>
//             <option>edad: ${objetoJson.edad} </option>
//             <option>materia: ${objetoJson.materia} </option>
//             <option>calificacion: ${objetoJson.calificacion} </option>
//         </select>`

// //convertir un JSON a una cadena
// //JSON.stringify()

// let alumnoJson ={//arcivo json
//     "nombre": "Leonardo Daniel", //cada propiedad se separa por comas
//     "edad": 17,
//     "materia": "JavaScript",
//     "calificacion": 9.5
// }

// let cadena = JSON.stringify(alumnoJson)

// console.log(cadena);

// informa.innerHTML = cadena

//arreglo json

let alumnoJson =[
    {//arcivo json
    "nombre": "Juan Rojas", //cada propiedad se separa por comas
    "edad": 17,
    "materia": "php",
    "calificacion": [6,7,5]
    },
    {//arcivo json
        "nombre": "Amelie ", //cada propiedad se separa por comas
        "edad": 17,
        "materia": "JavaScript",
        "calificacion": [9.5, 10, 10 ]
    },
    {//arcivo json
        "nombre": "Peaches", //cada propiedad se separa por comas
        "edad": 27,
        "materia": "html",
        "calificacion":[ 8,6,7]
    },
    {//arcivo json
        "nombre": "Angel", //cada propiedad se separa por comas
        "edad": 18,
        "materia": "JavaScript",
        "calificacion": [7,8,10]
    },
    {//arcivo json
        "nombre": "Fernanada", //cada propiedad se separa por comas
        "edad": 17,
        "materia": "php",
        "calificacion": [7,10,9]
    }
]
let promedio=0
let informa = document.getElementById("inf")

for(let alumno of alumnoJson){

    promedio = (alumno.calificacion[0]+ alumno.calificacion[1]+ alumno.calificacion[2])/3

    informa.innerHTML += `nombre: ${alumno.nombre},<br> edad: ${alumno.edad} ,<br> materia: ${alumno.materia} <br>promedio: <b>${ promedio.toFixed(2) }</b> <br><br>`
}

/*
agregar 5 alumnos mas (10 en total), desplegar la info en una tabla (promedio edad, nombre, etc)

dar estilos sombrear encabezados y hacer tabla bonita

*/