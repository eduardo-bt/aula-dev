import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaService } from 'nestjs-prisma';
import { ProductController } from './controllers/product.controller';
import { CreateProductHandler } from './handlers/create-product.handler';
import { GetAllProductHandler } from './handlers/get-all-product.handler';
import { SearchProductHandler } from './handlers/search-product.handler';
import { UpdateProductHandler } from './handlers/update-product.handler';
import { ProductRepository } from './repositories/product.repository';

const CommandHandlers = [
  CreateProductHandler,
  UpdateProductHandler,
];
const QueryHandlers = [
  GetAllProductHandler,
  SearchProductHandler,
];
const Services = [ProductRepository, PrismaService]

@Module({
  imports: [CqrsModule],
  controllers: [ProductController],
  providers: [...CommandHandlers, ...QueryHandlers, ...Services],
})
export class ProductModule {}
