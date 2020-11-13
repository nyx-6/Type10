//ACTIONS
// 1 Mostrar ubicación del objetivo
// 2 Random Camaras
// 3 mostrar bomba
// 4 Mostrar systema azul, comenzar contador
// 5 generar claves, en panatalla azul pedir claves, set focus

const NO_ACTION = 0;
const SHOW_OBJETIVE_LOCATION = 1;
const SHOW_RANDOM_SCREENS = 2;
const SHOW_OBJETIVE = 3;
const SHOW_SYSTEMS_OBJECTIVE = 4;
const SHOW_PASSWORDS = 5;


const Instructions = [
    { instruction: "Objetivo: Dispositivo Explosivo", time: 1, action: NO_ACTION },
    { instruction: "Localizando Objetivo...", time: 1, action: NO_ACTION },
    { instruction: "Objetivo Localizado: Dispositivo K-BOOM_9", time: 1, action: NO_ACTION },
    { instruction: "Ubicación del dispositivo: Almacen PortNorth", time: 1, action: NO_ACTION },
    { instruction: "Entrando al sistema de seguridad CCTV...", time: 2, action: SHOW_OBJETIVE_LOCATION },
    { instruction: "Conexión exitosa", time: 1, action: SHOW_RANDOM_SCREENS },
    { instruction: "Buscando dispositivo K-BOOM_9...", time: 4, action: SHOW_OBJETIVE },
    { instruction: "Dispositivo encontrado", time: 2, action: NO_ACTION },
    { instruction: "Entrando al systema del dispositivo K-BOOM_9...", time: 3, action: SHOW_SYSTEMS_OBJECTIVE },
    { instruction: "Conexión exitosa", time: 1, action: NO_ACTION },
    { instruction: "Generando claves de desactivación...", time: 1, action: SHOW_PASSWORDS },
];

export default Instructions;