import { Injectable } from '@nestjs/common';

@Injectable()
export class CompanyService {

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
    return this.ListCompanies;
  }

  create(data: Company){
    return data
  }

}
