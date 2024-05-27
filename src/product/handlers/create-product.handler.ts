import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateProductCommand } from "../commands/create-product.command";
import { ProductRepository } from "../repositories/product.repository";

@CommandHandler(CreateProductCommand)
export class CreateProductHandler implements ICommandHandler<CreateProductCommand> {
  constructor(private readonly productRepository: ProductRepository) { }

  async execute(command: CreateProductCommand) {
    const createDTO = command.createDTO;

    await this.productRepository.createProduct(createDTO);
  } 
}