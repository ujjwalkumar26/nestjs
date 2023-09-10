import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { RPCModule } from './gRPC';
import { join } from 'path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NatsModule } from './nats/nats.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);

  const rpcMicroService = await NestFactory.createMicroservice(RPCModule, {
    transport: Transport.GRPC,
    snapshot: true,
    options: {
      package: 'main',
      protoPath: join(__dirname, '/gRPC/proto/main.proto'),
      url: 'localhost:3001',
    },
  });
  await rpcMicroService.listen();
  const natsMicroService =
    await NestFactory.createMicroservice<MicroserviceOptions>(NatsModule, {
      transport: Transport.NATS,
      options: {
        servers: ['nats://localhost:4222'],
      },
    });
  await natsMicroService.listen();
}
bootstrap();
