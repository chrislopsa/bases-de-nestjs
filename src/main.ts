import { NestFactory } from '@nestjs/core'; //NestFactory se utiliza para crear una instancia de la aplicacion Nestjs
import { AppModule } from './app.module'; // importamos el modulo raiz , aqui definimos los controladores, servicios y otros componentes de la aplicacion.
import { ValidationPipe } from '@nestjs/common';
import { HttpErrorFilter } from './filters/http-error.filter';


async function bootstrap() { //función asíncrona que sirve como punto de entrada de la aplicación.
  const app = await NestFactory.create(AppModule);// creamos una instancia de la app Nestjs utilizando el AppModule
  
  app.useGlobalFilters(new HttpErrorFilter()); // Configura el filtro global
  app.useGlobalPipes(new ValidationPipe()); //serie de comprobaciones que se realizan antes de ejecutar el cuerpo de un método en un controlador. Aquí, lo estamos configurando de manera global para toda la aplicación, esto significa que todas las rutas se beneficiarán automáticamente del flujo de validaciones proporcionado por ValidationPipe.



  await app.listen(3000);
}
bootstrap();
