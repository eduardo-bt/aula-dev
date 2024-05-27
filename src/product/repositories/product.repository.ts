import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getMany(whereClause?: Prisma.ProductWhereInput) {
    return await this.prisma.product.findMany({
      where: whereClause,
    });
  }

  async search(searchString: string) {
    return await this.prisma.product.findMany({
      where: {
        name: {startsWith: searchString}
      }
    });
  }

  async createProduct(createProductDto: CreateProductDto) {
    await this.prisma.product.create({
      data: createProductDto,
    });
  }

  async updateProduct(id: bigint, updateProductDto: UpdateProductDto) {
    return await this.prisma.product.update({
      where: {id},
      data: updateProductDto,
    });
  }
}
