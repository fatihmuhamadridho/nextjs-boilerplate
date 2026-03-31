import { Product } from './product.model';
import { ProductRepository } from './product.repository';
import { ProductRequest, ProductResult } from './product.interface';

export class GetProductsUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(params?: ProductRequest.getProducts): Promise<ProductResult.getProducts> {
    const response = await this.productRepository.getProducts(params);
    const limit = response?.limit ?? 0;
    const totalItems = response?.total ?? 0;
    const totalPages = limit > 0 ? Math.ceil(totalItems / limit) : 0;
    const page = limit > 0 ? Math.floor((response?.skip ?? 0) / limit) + 1 : 1;

    return {
      status: {
        code: 'SUCCESS',
        message: 'SUCCESS HIT API',
      },
      data: (response?.products ?? []).map(
        (product) =>
          new Product({
            id: product?.id ?? 0,
            title: product?.title ?? '',
            description: product?.description ?? '',
            category: product?.category ?? '',
            price: product?.price ?? 0,
            discountPercentage: product?.discountPercentage ?? 0,
            rating: product?.rating ?? 0,
            stock: product?.stock ?? 0,
            tags: product?.tags ?? [],
            brand: product?.brand ?? '',
            sku: product?.sku ?? '',
            weight: product?.weight ?? 0,
            dimensions: {
              width: product?.dimensions?.width ?? 0,
              height: product?.dimensions?.height ?? 0,
              depth: product?.dimensions?.depth ?? 0,
            },
            warrantyInformation: product?.warrantyInformation ?? '',
            shippingInformation: product?.shippingInformation ?? '',
            availabilityStatus: product?.availabilityStatus ?? '',
            reviews:
              product?.reviews?.map((review) => ({
                rating: review?.rating ?? 0,
                comment: review?.comment ?? '',
                date: review?.date ?? '',
                reviewerName: review?.reviewerName ?? '',
                reviewerEmail: review?.reviewerEmail ?? '',
              })) ?? [],
            returnPolicy: product?.returnPolicy ?? '',
            minimumOrderQuantity: product?.minimumOrderQuantity ?? 0,
            meta: {
              createdAt: product?.meta?.createdAt ?? '',
              updatedAt: product?.meta?.updatedAt ?? '',
              barcode: product?.meta?.barcode ?? '',
              qrCode: product?.meta?.qrCode ?? '',
            },
            images: product?.images ?? [],
            thumbnail: product?.thumbnail ?? '',
          })
      ),
      meta: {
        page,
        limit,
        totalItems,
        totalPages,
      },
    };
  }
}
