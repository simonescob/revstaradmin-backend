import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

  constructor(private productService: ProductService) {}

  @Get("all-products")
  getListProducts(){
    return this.productService.findAll();
  }

  @Post("create")
  @HttpCode(201)
  createProduct(@Body() body: Product): string {
    console.log(this.productService.create(body));
    return 'Product created.';
  }

  @Post("update/:id")
  @HttpCode(201)
  updateProduct(@Body() body: Product): string {
    // console.log(this.productService.create(body));
    return 'Product updated';
  }

  @Post("delete/:id")
  @HttpCode(201)
  deleteProduct(@Body() body: Product): string {
    // console.log(this.productService.create(body));
    return 'Product deleted';
  }

}
