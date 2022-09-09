/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { RiCloseFill } from 'react-icons/ri';
interface IModalType {
  open: boolean;
  setOpen: (arg: boolean) => void;
  title?: string;
  desc?: string;
  size?: string;
  children: JSX.Element;
  close?: boolean;
}

type sizeType = {
  [key: string]: string;
};

const sizes: sizeType = {
  full: 'h-[85vh]',
  half: 'h-[45vh]',
  mini: 'h-[25vh]',
};

export default function ModalPage({
  open,
  setOpen,

  title,
  desc,
  size = 'full',
  close = true,
  children,
}: IModalType) {
  //   const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[999] " initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
        </Transition.Child>

        <div className="fixed z-[999] inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative bg-white rounded-lg px-4 pt-2 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg w-full ${sizes[size]} sm:p-6 `}
              >
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    {/* header */}
                    {close && <RiCloseFill className="w-6 h-6 absolute" onClick={() => setOpen(false)}></RiCloseFill>}
                    {title && (
                      <Dialog.Title as="h3" className="pt-1 text-lg leading-6 font-medium text-gray-900">
                        {title}
                      </Dialog.Title>
                    )}
                    {desc && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{desc}</p>
                      </div>
                    )}
                  </div>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
