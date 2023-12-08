import RadioGroup from '@/components/ui/RadioGroup';
import { useCategories } from '@/hooks/useProducts';

export default function ProductFilter() {
  const { data } = useCategories();
  return (
    <aside
      className={
        'h-fit rounded-md border-2 border-black bg-primary p-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
      }
    >
      <RadioGroup items={['All', ...(data || [])]} />
    </aside>
  );
}
