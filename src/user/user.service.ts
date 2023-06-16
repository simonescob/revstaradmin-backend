import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/User';
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';

@Injectable()
export class UserService {

  private readonly users: User[] = [
    { 
      id: 1, 
      username: 'simo1',
      name: 'simoadmin',
      password: '$2a$12$wLZ12z0H.jZIGZHEMwVOBOxBHn2zYMfWtOJFirH951rKutHF0t28S', 
      email: 'simon+admin@gmail.com',
      type: 'admin'
    },
    { 
      id: 2, 
      username: 'simo2',
      name: 'simoexter',
      password: '$2a$12$wLZ12z0H.jZIGZHEMwVOBOxBHn2zYMfWtOJFirH951rKutHF0t28S', 
      email: 'simon+normal@gmail.com',
      type: 'external'
    },
  ];

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find((u) => u.username === username);
    
    if (user) {
      try {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          return {
            token: this.generateToken(user.id, user.type),
            message: 'sesion iniciada'
          }
        }
      } catch (error) {
        // Handle the error (e.g., log it or throw a custom exception)
        throw new Error('Password comparison failed');
      }
    }

    return null;
  }

  findByUsername(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }

  private generateToken(userId: number, userType: string): string {
    const secretKey = 'Qhsw8cHAtippQ/w+syt9o0kwoKPC7ozxoMeXIXvmxM4='; // Replace with your own secret key
    const expiresIn = '1h'; // Set the expiration time as per your requirements
    const payload = { userId, userType };
    const token = sign(payload, secretKey, { expiresIn });
    return token;
  }

}
