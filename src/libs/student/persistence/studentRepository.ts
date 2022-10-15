import { Injectable } from '@nestjs/common';
import { Student } from '../student.model';
import { IStudentRepository } from './studentRepositoryAbstract';
import { EntityManager } from 'typeorm';
import { StudentEntity } from './entity';

@Injectable()
export class StudentRepository extends IStudentRepository {
  private _manager: EntityManager;
  constructor(manager: EntityManager) {
    super();
    this._manager = manager;
  }

  public async saveStudent(student: Student): Promise<void> {
    const entity = new StudentEntity();
    entity.name = student.name;
    entity.age = student.age;
    await this._manager.getRepository(StudentEntity).save(entity);
  }
}
