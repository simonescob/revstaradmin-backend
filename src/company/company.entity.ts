
import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity()
export class Company {
  
  @PrimaryColumn()
  nit: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  address: string;
  
  @Column({ type: 'varchar' })
  phone: number;

}