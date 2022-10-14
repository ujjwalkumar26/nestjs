import { Injectable } from '@nestjs/common';
import { ITeacherRepository } from './persistence';
import { Teacher } from './teacher.model';

@Injectable()
export class TeacherService {
  private _teacherRepository: ITeacherRepository;
  public constructor(teacherRepository: ITeacherRepository) {
    this._teacherRepository = teacherRepository;
  }
  public async saveTeacher(teacher: Teacher): Promise<void> {
    return this._teacherRepository.saveTeacher(teacher);
  }
}
