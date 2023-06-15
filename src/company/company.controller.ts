import { Body, Controller, Get, Post } from '@nestjs/common';
import { Company } from './company.entity';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {

  constructor(private companyService: CompanyService){}

  @Get("all-companies")
  getListCompanies(){
    return this.companyService.findAll();
  }

  @Post("create")
  createCompany(@Body() body: Company){
    this.companyService.create(body);
    return 'Company created';
  }

  @Post("update")
  updateCompany(@Body() body: Company){
    return this.companyService.update(body);
  }

  @Post("delete")
  deleteCompany(@Body('nit') nit){
    return this.companyService.delete(nit);
  }

}
