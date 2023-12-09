interface RadioGroupProps {
  items: string[];
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export default function RadioGroup({
  items,
  activeItem,
  setActiveItem,
}: RadioGroupProps) {
  return (
    <div className="font-bold">
      {items.map((item) => {
        const isChecked = activeItem === item;

        return (
          <button
            onClick={() => {
              setActiveItem(item);
            }}
            className="my-2 flex items-center"
            role="radio"
            aria-checked={isChecked}
            key={item}
          >
            <div className="mr-2.5 h-5 w-5 rounded-full bg-white p-1 outline outline-2 outline-black">
              {isChecked && (
                <div className="h-full w-full rounded-full bg-black"></div>
              )}
            </div>
            <p className={'capitalize'}>{item}</p>
          </button>
        );
      })}
    </div>
  );
}
