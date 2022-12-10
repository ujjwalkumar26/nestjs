import { Controller } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { GrpcMethod } from '@nestjs/microservices';
import { TeacherService, StudentService } from 'src/libs';
import {
  StudentRequest,
  StudentResponse,
  TeacherRequest,
  TeacherResponse,
} from './types';

@Controller()
export class RPCController {
  private _logger: Logger = new Logger('RPCControllerLogger');

  @GrpcMethod('StudentService', 'GetStudent')
  public async getStudent(req: StudentRequest): Promise<StudentResponse> {
    this._logger.log(`Received request getStudent: ${req}`);
    const student: StudentResponse = { id: 1, name: 'Ujjwal', age: 22 };
    return student;
  }

  @GrpcMethod('TeacherService', 'GetTeacher')
  public async getTeacher(req: TeacherRequest): Promise<TeacherResponse> {
    this._logger.log(`Received request getTeacher: ${req}`);
    const teacher: TeacherResponse = { id: 1, name: 'Ujjwal', subject: 'CSE' };
    return teacher;
  }
}
