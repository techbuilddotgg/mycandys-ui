import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { classnames } from '@/utils/classnames';
import { getOrderStatusColor, OrderStatus } from '@/models/order';

interface SelectProps {
  items: { label: string; className?: string }[];
  selectedItem: string | null;
  setSelectedItem: (itemName: string) => void;
}

export default function Select({
  items,
  selectedItem,
  setSelectedItem,
}: SelectProps) {
  const [isActiveSelect, setIsActiveSelect] = useState(false);

  const handleItemClick = (itemName: string) => {
    setSelectedItem(itemName);
    setIsActiveSelect(false);
  };

  return (
    <div className="relative" aria-expanded={isActiveSelect}>
      <button
        onClick={() => {
          setIsActiveSelect(!isActiveSelect);
        }}
        aria-haspopup="listbox"
        aria-labelledby="select-label"
        className={classnames(
          'flex w-[200px] cursor-pointer items-center rounded-md border-2 border-black bg-primary py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none',
          getOrderStatusColor(selectedItem as OrderStatus),
        )}
      >
        <div className="mx-auto flex items-center capitalize">
          {selectedItem === null ? 'Select' : selectedItem}
          <FaChevronDown
            style={{ transform: `rotate(${isActiveSelect ? '180deg' : '0'})` }}
            className={'ml-3 h-4 w-4 transition-transform ease-in-out'}
          />
        </div>
      </button>
      <div
        style={{
          top: isActiveSelect ? '60px' : '50px',
          opacity: isActiveSelect ? '1' : '0',
          visibility: isActiveSelect ? 'visible' : 'hidden',
        }}
        role="listbox"
        aria-labelledby="select-label"
        className="absolute left-0 top-[70px] w-[200px] rounded-md border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
      >
        {items.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                handleItemClick(item.label);
              }}
              className={classnames(
                'hover:bg-primary-dark block w-full border-b-2 border-black bg-primary px-5 py-3 first:rounded-t-[5px] last:rounded-b-[5px]',
                item.className,
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
