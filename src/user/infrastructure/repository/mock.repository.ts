import { UserEntity } from '../../domain/user.entity'
import { UserRepository } from '../../domain/user.repository'

const MOCK_USER = {
  name: 'Leifer',
  password: 'hola',
  uuid: '000-000',
}

export class MockRepository implements UserRepository {
  async findUserById(uuid: string): Promise<any> {
    const user = MOCK_USER
    console.log(uuid)
    return user
  }
  async registerUser(userIn: UserEntity): Promise<any> {
    const user = MOCK_USER
    console.log(userIn)
    return user
  }
  async listUser(): Promise<any> {
    const users = [MOCK_USER, MOCK_USER, MOCK_USER]
    return users
  }
}
