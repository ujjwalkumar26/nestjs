import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { TeacherController } from './teacher.controller';
import { AppService } from './app.service';
import { AppRepo } from './app.repo';
import { IAppRepo } from './app.repoAbstract';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController],
  providers: [AppService, { provide: IAppRepo, useClass: AppRepo }],
})
export class AppModule {}
