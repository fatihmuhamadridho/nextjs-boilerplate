import { Card, Group, Skeleton, Stack } from '@mantine/core';
import styles from './ProductCardSkeleton.module.scss';

export const ProductCardSkeleton = () => {
  return (
    <Card className={styles.card}>
      <Stack gap="md">
        <Skeleton unstyled className={`${styles.media} ${styles.pulse}`} />

        <Stack className={styles.meta} gap={6}>
          <Group className={styles.metaRow} justify="space-between" align="flex-start" gap="xs" wrap="nowrap">
            <Stack className={styles.titleStack} gap={6}>
              <Skeleton unstyled className={`${styles.line} ${styles.lineShort} ${styles.pulse}`} />
              <Skeleton unstyled className={`${styles.line} ${styles.lineMid} ${styles.pulse}`} />
            </Stack>
            <Skeleton unstyled className={`${styles.badge} ${styles.pulse}`} />
          </Group>

          <Skeleton unstyled className={`${styles.line} ${styles.lineFull} ${styles.pulse}`} />
          <Skeleton unstyled className={`${styles.line} ${styles.lineWide} ${styles.pulse}`} />
          <Skeleton unstyled className={`${styles.line} ${styles.lineShort} ${styles.pulse}`} />
        </Stack>

        <Group className={styles.footer} justify="space-between" align="center">
          <Skeleton unstyled className={`${styles.price} ${styles.pulse}`} />
          <Skeleton unstyled className={`${styles.stock} ${styles.pulse}`} />
        </Group>
      </Stack>
    </Card>
  );
};
