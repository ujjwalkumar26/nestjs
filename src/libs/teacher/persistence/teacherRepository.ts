import { Teacher } from '../teacher.model';
import { ITeacherRepository } from './teacherRepositoryAbstract';
import { EntityManager } from 'typeorm';
import { TeacherEntity } from './entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TeacherRepository extends ITeacherRepository {
  private _manager: EntityManager;
  constructor(manager: EntityManager) {
    super();
    this._manager = manager;
  }
  public async saveTeacher(teacher: Teacher): Promise<void> {
    const entity = new TeacherEntity();
    entity.name = teacher.name;
    entity.subject = teacher.subject;
    await this._manager.getRepository(TeacherEntity).save(entity);
  }
}
