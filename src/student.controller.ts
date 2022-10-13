import { Controller, Post, Get, Logger, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UpdateStudentDto } from './dtos';
import { Student } from './libs/student';
import { NameValidator } from './libs/common';

@Controller('/student')
export class StudentController {
  private _logger = new Logger('AppControllerLogger');
  private _appService: AppService;
  private _nameValidator: NameValidator;
  public constructor(appService: AppService) {
    this._appService = appService;
    this._nameValidator = new NameValidator();
  }

  @Get('/health')
  public getHealth(): string {
    this._logger.log('Received health request');
    return 'Controller running...';
  }

  @Post('/update')
  public async addStudent(
    @Body() updateStudent: UpdateStudentDto,
  ): Promise<void> {
    this._logger.log('Received student update request');
    const isValid = this._nameValidator.validateName(updateStudent, 'name');
    if (!isValid) {
      this._logger.warn(`Changed student name to: ${updateStudent.name}`);
    }
    const student = this._convertDtoToModel(updateStudent);
    return this._appService.saveStudent(student);
  }

  private _convertDtoToModel(updateStudent: UpdateStudentDto): Student {
    const student = new Student();
    student.name = updateStudent.name;
    student.age = updateStudent.age;
    return student;
  }
}
