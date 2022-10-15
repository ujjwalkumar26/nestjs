import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('Teacher', { schema: 'public' })
export class TeacherEntity {
  @PrimaryGeneratedColumn({ name: 'Id' })
  public id: number;

  @Column('character varying', { name: 'Name', length: 20 })
  public name: string;

  @Column('character varying', { name: 'Subject', length: 20 })
  public subject: string;
}
