import { RiVideoLine, RiMapPinLine } from 'react-icons/ri';

export interface IButton {
  tabs: string[];
  selected: string;
  onChangeButton: (e: any) => void;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Tab({ tabs, selected, onChangeButton }: IButton) {
  return (
    <>
      <div className="block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={onChangeButton}
                className={classNames(
                  tab === selected
                    ? 'text-sm border-gray-900 text-gray-900'
                    : 'text-sm border-transparent text-gray-900 hover:text-gray-900 hover:border-gray-300',
                  'whitespace-nowrap py-4  border-b-2 w-full text-md',
                )}
              >
                {tab === 'RiVideoLine' ? (
                  <>
                    <RiVideoLine className="m-auto w-6 h-6"></RiVideoLine>
                    <span className="hidden">RiVideoLine</span>
                  </>
                ) : tab === 'RiMapPinLine' ? (
                  <>
                    <RiMapPinLine className="m-auto w-6 h-6"></RiMapPinLine>
                    <span className="hidden">RiMapPinLine</span>
                  </>
                ) : (
                  tab
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
