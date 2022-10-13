import { Student } from './libs/student';
import { Teacher } from './libs/teacher';

export abstract class IAppRepo {
  public abstract saveStudent(student: Student): Promise<void>;
  public abstract saveTeacher(teacher: Teacher): Promise<void>;
}
