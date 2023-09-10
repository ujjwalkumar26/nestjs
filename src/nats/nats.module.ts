import { Module } from '@nestjs/common';
import { NatsController } from './nats.controller';

@Module({
  imports: [],
  controllers: [NatsController],
})
export class NatsModule {}
