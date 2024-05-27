import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { SearchProductQuery } from "../queries/search-product.query";
import { ProductRepository } from "../repositories/product.repository";

@QueryHandler(SearchProductQuery)
export class SearchProductHandler implements IQueryHandler<SearchProductQuery> {
  constructor(private readonly productRepository: ProductRepository) { }

  async execute(query: SearchProductQuery) {
    return await this.productRepository.search(query.searchString);
  } 
}