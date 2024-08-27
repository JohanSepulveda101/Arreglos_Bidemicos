let datos = [
    ["51662369","Sandra Milena Castellanos Marn","Medicina","VI","3.5","1.1","0.4","1.6"],
    ["80223220","Luis Andres Montoya Montoya","Ingeniria de Telecomunicaciones","IV","3.0","3.3","4.2","4.5"],
    ["79444555","Francisco Martinez Marin","Ingenieria de Alimentos","III","3.4","4.5","4.4","3.0"],
    ["79003003","Pedro Jose Pineda Pineda","Odontologia","VI","4.0","4.1","3.9","4.5"],
    ["79001003","Luis Francisco Castañeda Roa","Ingeniria de Sistemas","VIII","3.3","3.4","4.5","4.4"],
    ["52900901","Ruth Paola Mahecha Mahecha","Odontologia","VII","3.6","3.6","3.8","3.9"],
    ["26900345","Lucia Valderrama Pineda","Fisioterapia","VIII","4.4","4.5","4.1","3.1"],
    ["35676900","Mariela Lucia Olguan Ramirez","Medicina","V","3.0","3.1","4.6","3.7"],
    ["27101234","Lucila Peñaranda Peñaranda","Enfermeria","II","2.5","4.6","3.4","4.6" ],
    ["80231678","Milena Palacios Palacios","Ingenieria Mecanica","III","3.6","3.4","3.5","4.5"],
    ["1030617979","Luis Alberto Castellanos Frias","Odontologia","VI","4.0","4.1","3.9","4.5"], 
    ["1019066342","Nercy Aleidis Rengifo Rengifo","Fisioterapia","VII","3.6","3.6","3.8","3.9"],
    ["1014249436","Fabian Rafael Moreno Carvajal","Medicina","VIII","4.4","4.5","4.1","3.1"],
    ["1022380843","Jonathan Mauricio Baez Baez","Enfermeria","V","3.0","3.1","4.6","3.7"],
    ["1012353083","German Dario Rodriguez Baez","Ingeniria Mecanica","II","2.5","4.6","3.4","4.6"],
    ["1030630231","Diego Fernando Giraldo Romero","Ingeniria de Petreoleos","III","3.6","3.4","3.5","4.5"],
    ["1020765332","Luz Herminda Fonseca Daza","Psicologia","VI","4.0","4.1","3.9","4.5"],
    ["1022357137","Rhonald Dahian Jimenez Garcia","Ingeniria Civil","VI","3.5","4.0","3.3","3.5"],
    ["52263227","Edgar Andres Bejarano Perez","Ingeniria Civil","IV","3.0","3.3","4.2","4.5"],
    ["1013579638","Diego Fernando Bautista Gomez","Ingeniria Civil","III","3.4","4.5","4.4","3.0"],
    ["1037817979","Luis Alberto Jaime Hernandez","Ingeniria  de Sistemas","II","4.0","4.1","3.9","4.5"],
    ["1019066342","Zabala Pereira Nercy Aleidys","Ingeniria Mecanica","V","3.0","3.3","4.2","4.5"],
    ["1014249436","Fabian Raul Duarte Serrano","Medicina","IV","3.6","3.6","3.8","3.9"],
    ["1022380843","Jhonatan Mauricio Rodriguez.","Ingeniria de Petreoleos","I","3.4","4.5","4.4","3.0"],
    ["1012353083","German Dario Gonzalez  Riaño","Ingeniria de Petreoleos","III","3.4","4.5","4.4","3.0"],
    ["96040605441","Michael Duvan Beltran Salcedo","Medicina","IV","3.0","3.3","4.2","4.5"],
    ["1013641467","Romero Piña Dylan David","Fisioterapia","II","3.6","3.6","3.8","3.9"],
    ["1030632107","Ruben Dario Fuquene C.","Ingeniria Mecanica","V","3.0","3.3","4.2","4.5"],
    ["53072770","Maryory Cuesta Rodriguez","Ingeniria de Telecomunicaciones","IV","3.0","3.3","4.2","4.5"],
    ["1014245401","Cristian Camilo Ortiz Ortiz","Ingeniria de Telecomunicaciones","VI","2.0","3.1","4.8","1.5"],
    ["95070115361","Yuly Katherine Sierra","Ingeniria Mecanica","V","2.7","3.9","4.7","4.5"],
    ["1020796896","Daniel Andres Zapata Bello","Ingeniria Mecanica","IV","3.0","3.3","4.2","4.5"],
    ["1003819124","Jose Eitner Montiel  Aldana","Medicina","IV","3.0","3.3","4.2","4.5"],
    ["1031131906","Luis Guillermo Andrade Cifuentes","Medicina","VIII","3.9","3.8","2.6","4.5"],
    ["1019018284","Jairo Joel Noguera melo","Medicina","VIII","3.7","3.7","4.7","4.0"],
    ["1014218719","Bryan Andres Ortegon","Medicina","IV","3.0","3.3","4.2","4.5"],
    ["1030611565","Monica Andrea Plaza Bernal","Medicina","IV","3.6","3.8","4.8","4.0"]
];

document.getElementById("formulario-busqueda").addEventListener("submit", function(event) {
    event.preventDefault();
    let idEstudiante = document.getElementById("id-estudiante").value;
    buscarEstudiante(idEstudiante);
});

function buscarEstudiante(id) {
    let tablaResultados = document.getElementById("tabla-resultados").querySelector("tbody");
    tablaResultados.innerHTML = ""; // Limpiar resultados anteriores
    
    let estudianteEncontrado = false;
    datos.forEach(fila => {
        if (fila[0] === id) {
            estudianteEncontrado = true;
            let promedio = (parseFloat(fila[4]) + parseFloat(fila[5]) + parseFloat(fila[6]) + parseFloat(fila[7])) / 4;
            let nuevaFila = "<tr>";
            fila.forEach(campo => {
                nuevaFila += `<td>${campo}</td>`;
            });
            nuevaFila += `<td>${promedio.toFixed(2)}</td>`;
            nuevaFila += "</tr>";
            tablaResultados.innerHTML += nuevaFila;
        }
    });

    if (!estudianteEncontrado) {
        tablaResultados.innerHTML = "<tr><td colspan='9'>Estudiante no encontrado</td></tr>";
    }
}

calcularPromedios();