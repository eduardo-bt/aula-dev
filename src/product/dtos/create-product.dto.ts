import { IsDefined, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsDefined()
    @IsString()
    readonly name: string;
  
    @IsDefined()
    @IsString()
    readonly description: string;

    @IsDefined()
    @IsNumber()
    readonly price: number;
  
    @IsDefined()
    @IsNumber()
    readonly quantity: number;
}
