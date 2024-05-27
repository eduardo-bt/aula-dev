import { HttpException, HttpStatus } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UpdateProductCommand } from "../commands/update-product.command";
import { ProductRepository } from "../repositories/product.repository";

@CommandHandler(UpdateProductCommand)
export class UpdateProductHandler implements ICommandHandler<UpdateProductCommand> {
  constructor(private readonly productRepository: ProductRepository) { }

  async execute(command: UpdateProductCommand) {
    const updateDTO = command.updateDTO;
    const id = command.id;
    const product = await this.productRepository.getMany({id});

    if (product.length === 0) {
      throw new HttpException(
        'Não foi possível atualizar o produto',
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.productRepository.updateProduct(id, updateDTO);
  } 
}