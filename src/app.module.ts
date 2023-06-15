import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/product.entity';
import { Company } from './company/company.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // MySQL server host
      port: 3306, // MySQL server port
      username: 'root', // MySQL username
      password: '', // MySQL password
      database: 'RevStarAdmin', // MySQL database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Location of your entity files
      synchronize: true, // Automatic schema synchronization (use with caution in production)
    }),
    TypeOrmModule.forFeature([Product, Company]),
  ],
  controllers: [AppController, CompanyController, ProductController],
  providers: [AppService, CompanyService, ProductService],
})
export class AppModule {}
