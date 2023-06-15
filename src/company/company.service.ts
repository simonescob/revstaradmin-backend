import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {

  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>
  ) {}

  private ListCompanies = [
    {
      name: 'empresa 1',
      phone: '98362375',
      id: 1,
      address: 'cale eogelghkewgwe'
    },
    {
      name: 'empresa 2',
      phone: '98362375',
      id: 2,
      address: 'cale eogelghkewgwe'
    },
    {
      name: 'empresa 3',
      phone: '98362375',
      id: 3,
      address: 'cale eogelghkewgwe'
    },
  ]

  findAll(){
    return this.companyRepository.find();
  }

  async create(data: Company){
    const newCompany = this.companyRepository.create(data);
    return this.companyRepository.save(newCompany);
  }

  async update(data: Company){
    try {

      const companyUpdated = await this.companyRepository
      .createQueryBuilder('company')
      .update(Company)
      .set(data)
      .where("company.nit = :nit", { nit: data.nit })
      .execute()

      return companyUpdated;
      
    } catch (error) {
      return `ha ocurrido un error: ${error}`
    }
  }

  async delete(nit: number){
    try {

      const companydeleted = await this.companyRepository
      .createQueryBuilder('company')
      .delete()
      .from(Company)
      .where("company.nit = :nit", { nit })
      .execute()

      return companydeleted;
      
    } catch (error) {
      return `ha ocurrido un error: ${error}`
    }
  }

}
