import { NestFactory } from '@nestjs/core';
import { RiderModule } from './rider.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RiderModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3001,
      },
    },
  );
  await app.listen();
}
bootstrap();
