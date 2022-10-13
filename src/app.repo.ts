import { Injectable, Logger } from '@nestjs/common';
import { Student } from './libs/student';
import { Teacher } from './libs/teacher';

@Injectable()
export class AppRepo {
  private _logger = new Logger('RepoLogger');
  public async saveStudent(student: Student): Promise<void> {
    //TODO:
    this._logger.log(`Saving student: ${JSON.stringify(student)}`);
    return Promise.resolve();
  }

  public async saveTeacher(teacher: Teacher): Promise<void> {
    //TODO:
    this._logger.log(`Saving teacher: ${JSON.stringify(teacher)}`);
    return Promise.resolve();
  }
}
