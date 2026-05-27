import { ProductRepository } from '@features/Home/domain/product.repository';
import { ProductRequest, ProductResponse } from '@features/Home/domain/product.interface';
import { FetchService } from '@services/fetch.service';
import { handleHttpError } from '@utils/handleHttpError.util';

type HttpErrorLike = Parameters<typeof handleHttpError>[0];

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private readonly fetchService: FetchService) {}

  async getProducts(_: ProductRequest.getProducts | undefined): Promise<ProductResponse.getProducts> {
    try {
      void _;
      const response = await this.fetchService.get<ProductResponse.getProducts>('/products');
      return response;
    } catch (error) {
      throw handleHttpError(error as HttpErrorLike, 'Something went wrong');
    }
  }
}
