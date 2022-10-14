import { Module } from '@nestjs/common';
import { StudentRepository, IStudentRepository } from './persistence';
import { StudentService } from './studentService';

@Module({
  imports: [],
  providers: [
    StudentService,
    {
      provide: IStudentRepository,
      useClass: StudentRepository,
    },
  ],
  exports: [StudentService],
})
export class StudentModule {}
