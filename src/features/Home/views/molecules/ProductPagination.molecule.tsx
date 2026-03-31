import { Group, Pagination, Text } from '@mantine/core';

type ProductPaginationProps = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  isFetching?: boolean;
};

export const ProductPagination = ({
  currentPage,
  totalPages,
  totalItems,
  onPageChange,
  isFetching,
}: ProductPaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <Group
      align="center"
      justify="space-between"
      wrap="wrap"
      style={{
        gap: '1rem',
        width: '100%',
        padding: '1rem 1.25rem',
        borderRadius: '1rem',
        border: '1px solid rgba(255,255,255,0.08)',
        background: '#171717',
      }}
    >
      <Text
        style={{
          margin: 0,
          color: '#a1a1aa',
          fontSize: '0.95rem',
          fontWeight: 500,
        }}
      >
        {totalItems} products{isFetching ? ' · Updating...' : ''}
      </Text>

      <Pagination
        value={currentPage}
        total={totalPages}
        onChange={onPageChange}
        withEdges
        siblings={1}
        boundaries={1}
        gap={8}
        color="blue"
        autoContrast
        styles={{
          root: {
            flexWrap: 'wrap',
          },
          control: {
            borderRadius: '0.75rem',
            border: '1px solid rgba(255,255,255,0.08)',
            backgroundColor: '#1f1f1f',
            color: '#d4d4d8',
            fontWeight: 600,
            transition: 'background-color 160ms ease, border-color 160ms ease, color 160ms ease, box-shadow 160ms ease',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
          },
          dots: {
            color: '#52525b',
          },
        }}
        vars={() => ({
          root: {
            '--pagination-control-size': '2.25rem',
            '--pagination-control-radius': '0.75rem',
            '--pagination-control-fz': '0.875rem',
            '--pagination-active-bg': '#2563eb',
            '--pagination-active-color': '#ffffff',
          },
        })}
      />
    </Group>
  );
};
