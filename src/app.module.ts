import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';

@Module({
  imports: [],
  controllers: [AppController, CompanyController, ProductController],
  providers: [AppService, CompanyService, ProductService],
})
export class AppModule {}
