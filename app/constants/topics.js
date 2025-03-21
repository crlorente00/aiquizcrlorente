export const topics = {
    java: [
        'Declaración de variables',
        'Tipos de datos, operadores y expresiones',
        'Bucles y condicionales',
        'Uso de Break y Continue',
        'Clases y objetos',
        'Comandos try, catch y finally',
        'Manejo de excepciones',
    ],
    python: [
        'Funciones, argumentos y valores de retorno',
        'Funciones lambda',
        'Condicionales y bucles',
        'Uso de Break y Continue',
        'Listas, tuplas y diccionarios',
        'Clases, objetos y herencia',
    ],
    javascript: [
        'Historia y evolución',
        'Características principales',
        'Sintaxis básica',
        'Tipos de datos',
        'Const, let, var',
        'Funciones',
        'Paso por referencia vs paso por valor',
        'Tipos primitivos',
        'Objetos JavaScript',
        'Clases y herencia',
        'Notación de puntos y corchetes',
        'Clonado de objetos',
        'Notación arrow',
        'This, bind, call, apply',
        'Closures',
        'Modo estricto',
        'Modulos ES6 y CommonJS',
        'Métodos de arrays (forEach, map, filter, reduce)',
        'Asincronía: callbacks, promesas, async/await',
        'Manejo de errores',
        'JSON',
    ],
    javascript_cliente: [
        'Características principales',
        'Eventos y manejo de eventos',
        'DOM y manipulación del DOM',
        'Objeto document y window',
        'Temporizadores',
        'SessionStorage y LocalStorage',
        'Alert, confirm y prompt',
        'AJAX y fetch API',
    ],
    node: [
        'Características principales',
        'Process',
        'NPM y versionado paquetes',
        'File System',
        'Sistema de archivos',
        'Streams',
        'Eventos',
        'package.json',
    ],
    sequelize: [
        'Características principales',
        'Ventajas y desventajas',
        'Conexión a la base de datos',
        'Modelos',
        'Migraciones',
        'Consultas',
        'Asociaciones',
    ],
    express: [
        'Características principales',
        'Estructura del proyecto',
        'Rutas',
        'Middleware',
        'Manejo de errores',
        'Manejo de archivos',
        'Manejo de formularios',
        'Manejo de cookies',
        'Manejo de sesiones',
        'Manejo de peticiones HTTP',
        'Manejo de respuestas',
        'Paginación',
        'Embed Javascript (EJS)',  
        'Mensajes flash',
        'Autenticación',
        'Autorización',
    ],
    react: [
        'Creación y uso de componentes',
        'Ciclo de vida de un componente',
        'Props y State',
        'PropTypes y DefaultProps',
        'UseRef y UseState',
        'Sintaxis y uso de JSX',
        'Hook UseEffect',
        'Manejo de eventos',
        'React Router',
        'Context API',
        'Redux',
        'React Native',        
        'Componentes controlados y formularios'
    ],
    http: [
        'URLs',
        'Formato peticiones HTTP',
        'Cabeceras HTTP',
        'Métodos POST, PUT, GET, DELETE, HEAD',
        'Códigos de respuesta',
        'Caché web',
        'Gestión de estado: parámetros ocultos, cookies, sesión',
    ],
    html:[
        'Estructura básica de un documento HTML',
        'Atributos HTML',
        'Id y clase HTML',
        'Etiquetas de texto',
        'Etiquetas de hipervínculo',
        'Etiquetas de imagen',
        'Etiquetas de lista',
        'Tablas',
        'Formularios',
        'Etiquetas de audio y video',
    ],
    css: [
        'Características principales',
        'Sintaxis básica',
        'Selectores y prioridad',
        'Modelo de caja: margin, padding, border',
        'Unidades de medida',
        'Posicionamiento',
        'Display y visibility',
        'Flexbox',
        'Grid',
        'Float y clear',
        'Diseño responsive',
        'Media queries',
        'Variables CSS',
    ],
    swift: [
        'Variables y constantes',
        'Opcionales',
        'Condicionales y bucles',
        'Uso de guard y defer',
        'Clases, estructuras y métodos',
        'Uso de if let y guard let',
        'Nil coalescing',
    ],
    intro_nosql: [
        'las 5 Vs del Big Data',
        "Data LifeCycle Management",
        "Data Value Pyramid",
        "Sistema Distribuido, Particionamiento y Replicación",
        "Teorema CAP (Consistency, Availability, Partition Tolerance)",
        "ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad)",
    ],
    json: [
        'Estructura de un documento JSON',
        'Tipos de datos JSON',
        'Que es JSON Schema y para que sirve',
        'Estructura de un documento JSON Schema',
    ],
    schema_design: [
        'Modelo de datos no relacional o NoSQL',
        'Modelo de datos orientado a documentos con MongoDB'    
    ],
    mongosh: [
        'Comandos básicos e índices',
        'Operaciones CRUD',        
        'Operadores de agregación match, group, project, sort',
        'Operador de agregación unwind'
    ],
    "clave-valor": [
        "Modelo de datos clave-valor",
        "Estructurar claves"
    ],
    "columns": [
        "Propiedades de las BBDDD de columnas",
        "Cassandra",
        "Clave primaria",
        "Modelados de datos en Cassandra"
    ],
    big_data: [
        'Historia y evolución',
        'las 5 Vs del Big Data',
        'Características principales',
    ],
    programacion_funcional: [
        'Conceptos básicos',
        'Composición de funciones',
        'Funciones puras',
        'Inmutabilidad',
        'Efectos secundarios',
        'Funciones de orden superior',
        'Funciones lambda',
        'Recursividad',
        'Evaluación perezosa',
        'Programación declarativa vs programación imperativa',
    ],
    lisp: [
        'Historia y evolución',
        'Características principales',
        'Sintaxis básica',
        'CAR, CDR, CONS, EQ',
        'Tipos de datos',
        'Listas',
        'Funciones',
        'Recursividad',
    ],
    scala: [
        'Historia y evolución',
        'Características principales',
        'Scala vs Java',
        'Sintaxis básica',
        'Tipos de datos',
        'Funciones',
        'Clases y objetos',
        'Traits',
        'Pattern matching',
        'Ejecución de programas Scala',
        'map, flatMap, filter, reduce, groupBy',
    ],
    sbt: [
        'Características principales',
        'Estructura de un proyecto SBT',
        'Compilación y ejecución de un proyecto',
        'Dependencias'
        ],
    actores_akka: [
        'Características principales',
        'Comunicación síncrona y asíncrona',
        'Concurrencia',
        'Estado compartido',
        'Actores',
        'Mensajes',
        'Akka',
    ],
    hadoop: [
        'Características principales',
        'Arquitectura',
        'HDFS',
        'MapReduce',
        'YARN',
        'Hive, HBase, Pig, Nifi, Flume, Accumulo, Avro, Chuwka, Mahout, Spark, Zookeeper',
        'Parquet',
        'Bases de Datos no relacionales: Redis, Cassandra, MongoDB',
        'Kafka',
    ],
    spark: [
        'Características principales',
        'Arquitectura',
        'Spark vs Hadoop',
        'RDD Dataframes y Datasets',
        'Acciones y Transformaciones',
        'Collect, Count, First, Take, Reduce, Filter, Map, FlatMap, GroupBy, GroupByKey, ReduceByKey',
        'Spark SQL',
        'Spark Streaming',
        'SparkML',
        'spark-submit'
    ],
    despliegue_nube: [
        'Historia y evolución',
        'Características principales',
        'Ventajas y desventajas',
        'IaaS, PaaS, SaaS',
        'Nube pública, privada, híbrida',
        'Proveedores de servicios en la nube',
        'AWS',
        'OpenStack',
        'Seguridad en Cloud',
    ],

    git: [
        'Historia y evolución',
        'Características principales',
        'Comandos básicos',
        'Repositorios locales y remotos',
        'Commits',
        'Branches',
        'Merge y rebase',
        'Conflictos',
        'Tags',
        'GitHub',
    ],
}
