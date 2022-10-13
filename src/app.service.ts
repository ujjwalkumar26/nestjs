import { Injectable } from '@nestjs/common';
import { IAppRepo } from './app.repoAbstract';
import { Student } from './libs/student';
import { Teacher } from './libs/teacher';
@Injectable()
export class AppService {
  private _repo: IAppRepo;
  public constructor(repo: IAppRepo) {
    this._repo = repo;
  }
  public async saveStudent(student: Student): Promise<void> {
    return this._repo.saveStudent(student);
  }

  public async saveTeacher(teacher: Teacher): Promise<void> {
    return this._repo.saveTeacher(teacher);
  }
}
