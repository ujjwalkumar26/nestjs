import { IsNotEmpty } from 'class-validator';
export class UpdateTeacherDto {
  @IsNotEmpty()
  public name: string;
  @IsNotEmpty()
  public subject: string;
}
