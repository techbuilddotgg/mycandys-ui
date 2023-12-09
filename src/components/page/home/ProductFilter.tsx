import { getProductCategories } from '@/api/products';
import ProductCategoriesGroup from '@/components/page/home/ProductCategoriesGroup';

export default async function ProductFilter() {
  const categories = await getProductCategories();

  return (
    <aside
      className={
        'h-fit rounded-md border-2 border-black bg-primary p-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
      }
    >
      <ProductCategoriesGroup categories={categories} />
    </aside>
  );
}
