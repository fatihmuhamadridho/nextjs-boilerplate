import { Badge, Card, Group, Image, Stack, Text } from '@mantine/core';
import type { ProductCardView } from '../interfaces/product.interface';
import styles from './ProductCard.module.scss';

type ProductCardProps = {
  product: ProductCardView;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className={styles.card}>
      <Stack className={styles.stack} gap="md">
        <Image alt={product.title} className={styles.media} src={product.thumbnail || product.images?.[0] || ''} />

        <Stack className={styles.meta} gap={6}>
          <Group className={styles.metaRow} justify="space-between" align="flex-start" gap="xs" wrap="nowrap">
            <Text className={styles.title}>{product.title}</Text>
            <Badge className={styles.category} variant="filled">
              {product.category}
            </Badge>
          </Group>
          <Text className={styles.description}>{product.description}</Text>
        </Stack>

        <Group className={styles.footer} justify="space-between" align="center">
          <Text className={styles.price}>${product.price.toFixed(2)}</Text>
          <Text className={styles.stock}>Stock {product.stock}</Text>
        </Group>
      </Stack>
    </Card>
  );
};
