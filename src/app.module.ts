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
      type: 'postgres',
      host: process.env.DB_HOST, // MySQL server host
      port: parseInt(process.env.DB_PORT), // MySQL server port
      username: process.env.DB_USER, // MySQL username
      password: process.env.DB_PASSWORD, // MySQL password
      database: process.env.DB_NAME, // MySQL database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Location of your entity files
      synchronize: true, // Automatic schema synchronization (use with caution in production)
    }),
    TypeOrmModule.forFeature([Product, Company]),
  ],
  controllers: [AppController, CompanyController, ProductController],
  providers: [AppService, CompanyService, ProductService],
})
export class AppModule {}
