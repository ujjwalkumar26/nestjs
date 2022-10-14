import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { TeacherController } from './teacher.controller';
import { AppService } from './app.service';
import { AppRepo } from './app.repo';
import { IAppRepo } from './app.repoAbstract';
import { TypeormModule } from './typeorm';

@Module({
  imports: [TypeormModule],
  controllers: [StudentController, TeacherController],
  providers: [AppService, { provide: IAppRepo, useClass: AppRepo }],
})
export class AppModule {}
