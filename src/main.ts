import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
/**
 * How to generate a module:
 * nest g module "module name"
 * We have 2 entities: User and Note, 1 User can write many Notes
 * -controller is where to receive request from client
 * controller will call services to do implementations
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
