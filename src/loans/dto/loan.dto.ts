import { IsString, IsNotEmpty, IsNumber } from 'class-validator';


export class CreateLoanDTO{
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

}