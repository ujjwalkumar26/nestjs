import { Controller, Post, Logger, Body, UseGuards } from '@nestjs/common';
import { StudentService } from '../libs/student';
import { UpdateStudentDto } from '../dtos';
import { Student } from '../libs/student';
import { NameValidator } from '../libs/common';
import { HeaderApiKeyGuard } from '../libs/auth';

@UseGuards(HeaderApiKeyGuard)
@Controller('/student')
export class StudentController {
  private _logger = new Logger('AppControllerLogger');
  private _studentService: StudentService;
  private _nameValidator: NameValidator;
  public constructor(studentService: StudentService) {
    this._studentService = studentService;
    this._nameValidator = new NameValidator();
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
    return this._studentService.saveStudent(student);
  }

  private _convertDtoToModel(updateStudent: UpdateStudentDto): Student {
    const student = new Student();
    student.name = updateStudent.name;
    student.age = updateStudent.age;
    return student;
  }
}
