import { Module } from '@nestjs/common';
import { controllers } from './controllers';
import { TypeormModule } from './typeorm';
import { StudentModule } from './libs/student';
import { TeacherModule } from './libs/teacher';
import { AuthModule } from './libs/auth';
import { ConfigurationModule } from './config';
import { DevtoolsModule } from '@nestjs/devtools-integration';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.MODE !== 'PRODUCTION',
    }),
    TypeormModule,
    StudentModule,
    TeacherModule,
    ConfigurationModule,
    AuthModule,
  ],
  controllers: [...controllers],
})
export class AppModule {}
