import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Student', { schema: 'public' })
export class StudentEntity {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column('character varying', { name: 'Name', length: 20 })
  public name: string;

  @Column('integer', { name: 'Age' })
  public age: number;
}
