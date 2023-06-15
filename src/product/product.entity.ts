
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Product {
  
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'int' })
  amount: number;
  
  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'text' })
  description: string;
  
  @Column({ type: 'varchar', nullable: true })
  image?: string;

}