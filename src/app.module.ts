import { Module } from '@nestjs/common';
import { controllers } from './controllers';
import { TypeormModule } from './typeorm';
import { StudentModule } from './libs/student';
import { TeacherModule } from './libs/teacher';

@Module({
  imports: [TypeormModule, StudentModule, TeacherModule],
  controllers: [...controllers],
})
export class AppModule {}
