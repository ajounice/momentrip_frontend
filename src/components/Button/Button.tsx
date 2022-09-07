export interface IButton {
  type?: 'button' | 'submit' | 'reset';
  title: string;
  disabled?: boolean;
  handleClick?: () => void;
  isSubmitting?: boolean;
  color?: string;
}

type colorType = {
  [key: string]: string;
};

const colors: colorType = {
  primary: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
  black: 'bg-gray-900 hover:bg-gray-700 focus:ring-gray-500',
};
export default function Button({
  type = 'submit',
  title,
  disabled = false,
  handleClick,
  isSubmitting = false,
  color = 'primary',
}: IButton) {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        onClick={handleClick}
        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${colors[color]} disabled:bg-gray-300`}
      >
        {title}
      </button>
    </>
  );
}
