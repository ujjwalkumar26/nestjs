import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { RPCModule } from './gRPC';
import { join } from 'path';
import { Transport } from '@nestjs/microservices';

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
}
bootstrap();
