import { Controller, Get, Param, Post } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {

  constructor(private companyService: CompanyService){}

  @Get("all-companies")
  getListCompanies(){
    return this.companyService.findAll();
  }

  @Post("create")
  createCompany(@Param() params: Company){
    return this.companyService.create(params);
  }

}
