import { Teacher } from '../teacher.model';

export abstract class ITeacherRepository {
  public abstract saveTeacher(teacher: Teacher): Promise<void>;
}
