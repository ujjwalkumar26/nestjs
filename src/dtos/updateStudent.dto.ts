import { IsNotEmpty, IsNumber } from 'class-validator';
export class UpdateStudentDto {
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  @IsNumber()
  public age: number;
}
