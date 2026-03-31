import { Card, Stack, Text, Title } from '@mantine/core';
import { ProductGrid } from '../molecules/ProductGrid.molecule';
import { ProductPagination } from '../molecules/ProductPagination.molecule';
import type { ProductCardView } from '../interfaces/product.interface';
import styles from './ProductList.module.scss';

type ProductListProps = {
  products: ProductCardView[];
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  isFetching?: boolean;
  onPageChange: (page: number) => void;
};

export const ProductList = ({
  products,
  isLoading,
  isError,
  errorMessage,
  currentPage,
  totalPages,
  totalItems,
  isFetching,
  onPageChange,
}: ProductListProps) => {
  return (
    <Stack className={styles.section} gap="lg">
      <Stack className={styles.intro} gap={4}>
        <Text className={styles.eyebrow}>DummyJSON / Products</Text>
        <Title className={styles.title} order={2}>
          Products from API
        </Title>
        <Text className={styles.description}>
          Data produk sudah diambil lewat flow repository, use case, dan controller di `src/features/Home`.
        </Text>
      </Stack>

      {isError ? (
        <Card className={styles.errorCard}>
          <Text className={styles.errorTitle}>Failed to load products</Text>
          <Text className={styles.errorText}>{errorMessage || 'Unknown error'}</Text>
        </Card>
      ) : null}

      <ProductGrid products={products} isLoading={isLoading} isFetching={isFetching} />

      {totalPages > 1 ? (
        <Card className={styles.paginationCard}>
          <ProductPagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            isFetching={isFetching}
            onPageChange={onPageChange}
          />
        </Card>
      ) : null}
    </Stack>
  );
};
