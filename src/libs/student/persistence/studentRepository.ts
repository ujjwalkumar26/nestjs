import { Injectable } from '@nestjs/common';
import { Student } from '../student.model';
import { IStudentRepository } from './studentRepositoryAbstract';

@Injectable()
export class StudentRepository extends IStudentRepository {
  constructor() {
    super();
  }

  public async saveStudent(student: Student): Promise<void> {
    //TODO
    return Promise.resolve();
  }
}
