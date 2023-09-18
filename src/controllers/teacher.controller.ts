import { Controller, Post, Logger, Body, UseGuards } from '@nestjs/common';
import { TeacherService } from '../libs/teacher';
import { UpdateTeacherDto } from '../dtos/updateTeacher.dto';
import { Teacher } from '../libs/teacher';
import { NameValidator } from '../libs/common';
import { HeaderApiKeyGuard } from '../libs/auth';

@UseGuards(HeaderApiKeyGuard)
@Controller('/teacher')
export class TeacherController {
  private _logger = new Logger('TeacherController');
  private _teacherService: TeacherService;
  private _nameValidator: NameValidator;
  public constructor(teacherService: TeacherService) {
    this._teacherService = teacherService;
    this._nameValidator = new NameValidator();
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
