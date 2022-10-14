import { Controller, Post, Get, Logger, Body } from '@nestjs/common';
import { TeacherService } from 'src/libs/teacher';
import { UpdateTeacherDto } from '../dtos/updateTeacher.dto';
import { Teacher } from '../libs/teacher';
import { NameValidator } from '../libs/common';

@Controller('/teacher')
export class TeacherController {
  private _logger = new Logger('TeacherController');
  private _teacherService: TeacherService;
  private _nameValidator: NameValidator;
  public constructor(teacherService: TeacherService) {
    this._teacherService = teacherService;
    this._nameValidator = new NameValidator();
  }

  @Get('/health')
  public getHealth(): string {
    this._logger.log('Received health request');
    return 'Controller running...';
  }

  @Post('/update')
  public async addTeacher(
    @Body() updateTeacher: UpdateTeacherDto,
  ): Promise<void> {
    this._logger.log('Received student update request');
    const isValid = this._nameValidator.validateName(updateTeacher, 'name');
    if (!isValid) {
      this._logger.warn(`Changed teacher name to: ${updateTeacher.name}`);
    }
    const teacher = this._convertDtoToModel(updateTeacher);
    return this._teacherService.saveTeacher(teacher);
  }

  private _convertDtoToModel(updateTeacher: UpdateTeacherDto): Teacher {
    const teacher = new Teacher();
    teacher.name = updateTeacher.name;
    teacher.subject = updateTeacher.subject;
    return teacher;
  }
}
