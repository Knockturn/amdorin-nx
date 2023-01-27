// libs/products/src/lib/products.service.ts

import { Injectable } from '@nestjs/common'
import { PrismaClient, Product } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class ProductService {
  public getProducts(): Promise<Product[]> {
    return prisma.product.findMany()
  }
}
