//- Instala la dependencia Winston

//- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

//- Registra el error en un archivo a través de un try...catch


const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
 // defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console(), ],
});


//logger.console.log("hola soy karol")


try{
    logger.error("mensaje de error")
}catch{
    logger.info("no hay nigun error")
}
