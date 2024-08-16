import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

// ExceptionFilter: Interfaz que define cómo se manejarán las excepciones.
// Catch: Decorador que indica qué tipo de excepción se capturará.
// ArgumentsHost: Proporciona acceso a los argumentos de contexto de la solicitud.
// HttpException: Clase base para todas las excepciones HTTP.

//El decorador @Catch(HttpException) especifica que este filtro capturará excepciones de tipo HttpException.
@Catch(HttpException)
export class HttpErrorFilter implements ExceptionFilter {

    //el método catch toma dos argumentos:
    //exception: La excepción capturada.
    //host: El contexto de la solicitud.
  catch(exception: HttpException, host: ArgumentsHost) {


    const ctx = host.switchToHttp(); //Se obtiene el contexto HTTP 

    const response = ctx.getResponse(); //Se obtiene la respuesta HTTP.
   
    const status = exception.getStatus(); //Se obtiene el estado (código de respuesta) de la excepción.

    response.status(status).json({//Se envía una respuesta JSON con el estado y el mensaje de la excepción.
      statusCode: status,
      message: exception.message,
    });
  }
}