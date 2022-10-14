import { Student } from '../student.model';

export abstract class IStudentRepository {
  public abstract saveStudent(student: Student): Promise<void>;
}
