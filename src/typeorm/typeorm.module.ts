import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigService } from './config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfigService.getTypeOrmConfig())],
})
export class TypeormModule {}
