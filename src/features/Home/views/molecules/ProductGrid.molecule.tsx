import { SimpleGrid } from '@mantine/core';
import { ProductCard } from '../atoms/ProductCard.atom';
import { ProductCardSkeleton } from '../atoms/ProductCardSkeleton.atom';
import type { ProductCardView } from '../interfaces/product.interface';
import styles from './ProductGrid.module.scss';

type ProductGridProps = {
  products: ProductCardView[];
  isLoading?: boolean;
  isFetching?: boolean;
};

export const ProductGrid = ({ products, isLoading, isFetching }: ProductGridProps) => {
  if (isLoading || isFetching) {
    return (
      <SimpleGrid className={styles.root} cols={{ base: 1, sm: 2, lg: 3 }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </SimpleGrid>
    );
  }

  return (
    <SimpleGrid className={styles.root} cols={{ base: 1, sm: 2, lg: 3 }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};
