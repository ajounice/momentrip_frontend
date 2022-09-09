import React from 'react';

import { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { RiMore2Fill } from 'react-icons/ri';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const MyPageDropDown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md px-2 py-2 text-sm font-medium text-gray-700">
          <RiMore2Fill className="w-5 h-5 fill-black "></RiMore2Fill>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/mypage/profile-setting"
                  className={classNames(
                    active ? 'bg-gray-100 text-black' : 'text-gray-700',
                    'block px-4 py-2 text-base',
                  )}
                >
                  프로필 편집
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/mypage/setting"
                  className={classNames(
                    active ? 'bg-gray-100 text-black' : 'text-gray-700',
                    'block px-4 py-2 text-base',
                  )}
                >
                  설정
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MyPageDropDown;
