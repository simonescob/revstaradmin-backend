import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  private ListProducts = [
    {
      name: 'product 1',
      id: 1,
      price: 2034,
      description: '3057990871',
      amount: 73,
      image: 'https://i.imgur.com/2SWQQOR.jpg'
    },
    {
      name: 'product 2',
      id: 2,
      price: 2034,
      description: '3057990871',
      amount: 73,
      image: 'https://i.imgur.com/2yqBrku.jpg'
    },
    {
      name: 'product 3',
      id: 3,
      price: 2034,
      description: '3057990871',
      amount: 73,
      image: 'https://i.imgur.com/OIXgVNX.jpg'
    },
  ];

  findAll(){
    return this.productRepository.find();
  }

  async create(data: Product){
    const newProduct = this.productRepository.create(data);
    return this.productRepository.save(newProduct);
  }
  
  async update(data: Product){
    try {

      const productUpdated = await this.productRepository
      .createQueryBuilder('product')
      .update(Product)
      .set(data)
      .where("product.id = :id", { id: data.id })
      .execute()

      return productUpdated;
      
    } catch (error) {
      return `ha ocurrido un error: ${error}`
    }
  }
  
  async delete(id: number){
    try {

      const companydeleted = await this.productRepository
      .createQueryBuilder('product')
      .delete()
      .from(Product)
      .where("product.id = :id", { id })
      .execute()

      return companydeleted;
      
    } catch (error) {
      return `ha ocurrido un error: ${error}`
    }
  }

}
