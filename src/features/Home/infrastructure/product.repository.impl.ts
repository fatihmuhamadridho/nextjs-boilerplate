import { ProductRepository } from '@features/Home/domain/product.repository';
import { ProductRequest, ProductResponse } from '@features/Home/domain/product.interface';
import { FetchService } from '@services/fetch.service';
import { handleHttpError } from '@utils/handleHttpError.util';

type HttpErrorLike = Parameters<typeof handleHttpError>[0];

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private readonly fetchService: FetchService) {}

  async getProducts(params?: ProductRequest.getProducts): Promise<ProductResponse.getProducts> {
    try {
      const searchParams = new URLSearchParams();

      if (params?.limit !== undefined) searchParams.set('limit', String(params.limit));
      if (params?.skip !== undefined) searchParams.set('skip', String(params.skip));

      const queryString = searchParams.toString();
      const url = queryString ? `/products?${queryString}` : '/products';

      const response = await this.fetchService.get<ProductResponse.getProducts>(url);
      return response;
    } catch (error) {
      handleHttpError(error as HttpErrorLike, 'Something went wrong');
    }
  }
}
