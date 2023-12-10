import config from '../../../tailwind.config';

type Props = {
  tabsArray: string[];
  activeTab: string;
  setActiveTab: (s: string) => void;
};

export default function Tabs({ tabsArray, activeTab, setActiveTab }: Props) {
  return (
    <div
      style={{
        gridTemplateColumns: Array(tabsArray.length)
          .fill('x')
          .map((tab: any) => '1fr')
          .join(' '),
      }}
      className="grid rounded-md"
    >
      {tabsArray.map((tab, index) => {
        return (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            style={{
              backgroundColor:
                activeTab === tab
                  ? config.theme.extend.colors['tertiary-dark']
                  : config.theme.extend.colors.tertiary,
            }}
            className="cursor-pointer border-2 border-black px-6 py-3 text-center font-bold text-white transition-colors first:rounded-ss-md last:rounded-se-md"
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
