import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { User } from './user';

@Entity({ name: 'role' })
export class Role extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;

  @ManyToOne(() => User, (user: User) => user.roles, { onDelete: 'CASCADE' })
  user: User;

}