import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateProductCommand } from '../commands/create-product.command';
import { UpdateProductCommand } from '../commands/update-product.command';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { GetAllProductQuery } from '../queries/get-all-product.query';
import { SearchProductQuery } from '../queries/search-product.query';

@Controller('product')
export class ProductController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    await this.commandBus.execute(new CreateProductCommand(createProductDto));
    return { message: 'Produto criado com sucesso' };
  }

  @Get()
  async findAll() {
    return await this.queryBus.execute(new GetAllProductQuery());
  }

  @Get(':searchString')
  async search(@Param('searchString') searchString: string) {
    return await this.queryBus.execute(new SearchProductQuery(searchString));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    await this.commandBus.execute(new UpdateProductCommand(+id, updateProductDto));
    return { message: 'Produto atualizado com sucesso' };
  }
}
