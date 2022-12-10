import { Teacher } from '../teacher.model';
import { TeacherEntity } from './entity';
export abstract class ITeacherRepository {
  public abstract saveTeacher(teacher: Teacher): Promise<void>;
  public abstract getTeacherById(
    id: number,
  ): Promise<TeacherEntity | undefined>;
}
