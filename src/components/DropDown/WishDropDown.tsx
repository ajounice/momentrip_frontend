import React, { useState } from 'react';

import { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { RiMore2Fill } from 'react-icons/ri';
import ModalPage from '../common/ModalPage';
import Input from '../common/Input';
import Button from '../Button/Button';
import { useForm } from 'react-hook-form';
import BasicModal from '../common/BasicModal';
import CustomModal from '../common/CustomModal';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const WishDropDown = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors, isSubmitted },
    getValues,
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
  });
  const [addFolderOpen, setAddFolderOpen] = useState(false);
  const [deleteFolderOpen, setDeleteFolderOpen] = useState(false);
  const [editFolderNameOpen, setEditFolderNameOpen] = useState(false);

  function deleteFolderHandler() {
    const id = new URLSearchParams(location.search).get('wish_id');
    console.log(id);
    // TODO folder 삭제 요청 후 /wish 페이지로 보내기
  }

  function editFolderNameRequest() {
    const name = document.getElementById('folderName');
    // TODO 폴더이름 변경 후 새로고침
    location.reload();
  }
  return (
    <>
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
                  <button
                    className={classNames(
                      active ? 'bg-gray-100 text-black' : 'text-gray-700',
                      'block px-4 py-2 text-base w-full text-left',
                    )}
                    onClick={() => setDeleteFolderOpen(true)}
                  >
                    폴더 삭제
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={classNames(
                      active ? 'bg-gray-100 text-black' : 'text-gray-700',
                      'block px-4 py-2 text-base w-full text-left',
                    )}
                    onClick={() => setEditFolderNameOpen(true)}
                  >
                    폴더 이름 변경
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {/* 모달 영역 */}
      <div className="relative overflow-y-auto overflow-x-hidden">
        <CustomModal open={editFolderNameOpen} setOpen={setEditFolderNameOpen} title="폴더 이름 변경" size="lg">
          <div className="my-8">
            <Input
              // label="폴더 이름"
              type="text"
              id="folderName"
              disabled={false}
              placeholder="폴더 이름을 입력하세요"
              defaultValue={''}
            ></Input>
            <div className="my-2 flex gap-2">
              <Button title="취소" handleClick={() => setEditFolderNameOpen(false)}></Button>
              <Button title="확인" handleClick={editFolderNameRequest}></Button>
            </div>
          </div>
        </CustomModal>
        <BasicModal
          open={deleteFolderOpen}
          setOpen={setDeleteFolderOpen}
          type="confirm"
          title="폴더를 삭제하시겠습니까?"
          ok="Yes"
          cancel="Cancel"
          okAction={deleteFolderHandler}
        ></BasicModal>
      </div>
    </>
  );
};

export default WishDropDown;
