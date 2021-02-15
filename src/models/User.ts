import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') //Nome da tabela no banco de dados que esse model representa

class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

export default User;
