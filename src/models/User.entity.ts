import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity({ name: 'user' })
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  login: string

  @Column()
  password: string

  @Column()
  createdAt: Date

  @Column()
  updatedAt: Date
}

export default User
