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
  createProduct(@Body() body: Product) {
    console.log(this.productService.create(body));
    return 'Product created.';
  }

  @Post("update")
  updateProduct(@Body() body: Product) {
    return this.productService.update(body);
  }

  @Post("delete")
  deleteProduct(@Body('id') id) {
    return this.productService.delete(id);
  }

}
