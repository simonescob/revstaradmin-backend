import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/Product';

@Injectable()
export class ProductService {

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
  ]

  findAll(){
    return this.ListProducts;
  }

  create(data: Product){
    return data
  }
  
  update(data: Product){
    return data
  }
  
  delete(data: Product){
    return data
  }

}
