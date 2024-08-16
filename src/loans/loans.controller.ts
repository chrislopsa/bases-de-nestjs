import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LoansService } from './loans.service';
import { CreateLoanDTO } from './dto/loan.dto';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService){}

  static getLoanStatus(id: string) {
    return `Status of loan ${id}`;
  }

  static getLoanRisk (id: string) {
    return `Risk of loan ${id}`;
  }

  @Post()
  createLoan(@Body() createLoanDto: CreateLoanDTO) {
    return `Loan created for ${createLoanDto.userId}`;
  }

  @Get(':type/:id')
  getLoanInfo (@Param('type') type: string, @Param('id') id: string){
    if (type === 'status'){
      return LoansController.getLoanStatus(id);
    }else if (type === 'risk'){
      return LoansController.getLoanRisk(id);
    }else{
      return "type not valid!"
    }
  } 
}
