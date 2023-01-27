// libs/products/src/lib/products.controller.ts

import { Controller, Get } from '@nestjs/common'
import { ProductService } from './products.service'

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  public getProducts() {
    return this.productService.getProducts()
  }
}
