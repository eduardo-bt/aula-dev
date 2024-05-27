import { UpdateProductDto } from "../dtos/update-product.dto";

export class UpdateProductCommand {
    constructor(
      public readonly id: number,
      public readonly updateDTO: UpdateProductDto,
    ) {}
  }
  