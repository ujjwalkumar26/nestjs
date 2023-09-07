import { Module } from '@nestjs/common';
import { RPCController } from './rpcController';
import { DevtoolsModule } from '@nestjs/devtools-integration';
@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.MODE !== 'PRODUCTION',
      port: 3001,
    }),
  ],
  controllers: [RPCController],
})
export class RPCModule {}
