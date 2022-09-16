/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface IModalType {
  open: boolean;
  setOpen: (arg: boolean) => void;
  type?: string;
  title?: string;
  ok?: string;
  cancel?: string;
  okAction?: () => void;
  closeAction?: () => void;
  size?: string;
  children?: JSX.Element | string;
}

type sizeType = {
  [key: string]: string;
};

const sizes: sizeType = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
};

export default function BasicModal({
  open,
  setOpen,
  type,
  title,
  children,
  ok = 'ok',
  cancel = 'cancel',
  okAction = () => {
    null;
  },
  closeAction,
  size = 'lg',
}: IModalType) {
  const okButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={okButtonRef}
        onClose={closeAction !== undefined ? closeAction : setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
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
                className={`relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 ${sizes[size]} w-full sm:p-6`}
              >
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    {title && (
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        {title}
                      </Dialog.Title>
                    )}
                    {children && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{children}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-5 flex flex-col sm:mt-6 sm:flex sm:flex-row gap-2 sm:gap-3">
                  {type === 'confirm' && (
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      {cancel}
                    </button>
                  )}

                  <button
                    type="submit"
                    ref={okButtonRef}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:text-sm"
                    onClick={() => {
                      okAction();
                      setOpen(false);
                    }}
                  >
                    {ok}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
