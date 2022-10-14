import { Teacher } from '../teacher.model';
import { ITeacherRepository } from './teacherRepositoryAbstract';

export class TeacherRepository extends ITeacherRepository {
  public saveTeacher(teacher: Teacher): Promise<void> {
    //TODO:
    return Promise.resolve();
  }
}
