import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.entity';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.findAll();
    return users;
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.userRepository.findById(id);
    return user;
  }

  async create(data: User): Promise<User> {
    const user = await this.userRepository.create(data);
    return user;
  }

  async update(id: string, data: Partial<User>): Promise<User | null> {
    const user = await this.userRepository.update(id, data);
    return user;
  }

  async delete(id: string): Promise<boolean> {
    const isDeleted = await this.userRepository.delete(id);
    return isDeleted;
  }
}
