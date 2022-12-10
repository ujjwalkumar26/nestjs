import { Injectable, NotFoundException } from '@nestjs/common';
import { ITeacherRepository, TeacherEntity } from './persistence';
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

  public async getTeacher(req: { id: number }): Promise<TeacherEntity> {
    const teacher = this._teacherRepository.getTeacherById(req.id);
    if (!teacher) throw new NotFoundException();
    return teacher;
  }
}
