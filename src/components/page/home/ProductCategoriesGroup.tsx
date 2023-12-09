'use client';
import RadioGroup from '@/components/ui/RadioGroup';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useEffect } from 'react';

interface ProductCategoriesGroupProps {
  categories: string[];
}

const ProductCategoriesGroup = ({
  categories,
}: ProductCategoriesGroupProps) => {
  const {
    urlQuery: { category },
    updateQueryParams,
  } = useQueryParams();

  const setActiveItem = (item: string) => {
    updateQueryParams({ category: item });
  };

  useEffect(() => {
    if (category === 'All') {
      updateQueryParams({ category: undefined });
    }
  }, [categories, category, updateQueryParams]);

  return (
    <RadioGroup
      activeItem={category || 'All'}
      setActiveItem={setActiveItem}
      items={['All', ...(categories || [])]}
    />
  );
};

export default ProductCategoriesGroup;
