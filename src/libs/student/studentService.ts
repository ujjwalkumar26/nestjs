import { Injectable } from '@nestjs/common';
import { IStudentRepository } from './persistence';
import { Student } from './student.model';

@Injectable()
export class StudentService {
  private _studentRepository: IStudentRepository;
  public constructor(studentRepository: IStudentRepository) {
    this._studentRepository = studentRepository;
  }
  public async saveStudent(student: Student): Promise<void> {
    return this._studentRepository.saveStudent(student);
  }
}
