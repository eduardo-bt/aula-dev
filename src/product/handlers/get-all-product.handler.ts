import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetAllProductQuery } from "../queries/get-all-product.query";
import { ProductRepository } from "../repositories/product.repository";

@QueryHandler(GetAllProductQuery)
export class GetAllProductHandler implements IQueryHandler<GetAllProductQuery> {
  constructor(private readonly productRepository: ProductRepository) { }

  async execute() {
    return await this.productRepository.getMany();
  } 
}