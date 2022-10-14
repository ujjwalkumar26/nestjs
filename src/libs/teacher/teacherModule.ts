import { Module } from '@nestjs/common';
import { ITeacherRepository, TeacherRepository } from './persistence';
import { TeacherService } from './teacherService';
@Module({
  imports: [],
  providers: [
    { provide: ITeacherRepository, useClass: TeacherRepository },
    TeacherService,
  ],
  exports: [TeacherService],
})
export class TeacherModule {}
