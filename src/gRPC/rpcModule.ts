import { Module } from '@nestjs/common';
import { RPCController } from './rpcController';
@Module({
  controllers: [RPCController],
})
export class RPCModule {}
