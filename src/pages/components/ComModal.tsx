// 사용할 store Import
import CustomModal from '../../components/common/CustomModal';
import BasicModal from '../../components/common/BasicModal';
import Button from '../../components/Button/Button';

import { useState } from 'react';
const ButtonModalEx = () => {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [basicModalOpen, setBasicModalOpen] = useState(false);
  const confirm = () => {
    console.log('동의');
  };
  const alert = () => {
    console.log('alert');
  };
  const submit = () => {
    console.log('submit');
  };
  return (
    <>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-10">
        <div className="max-w-sm flex flex-col gap-2">
          <Button type="button" title="alert 모달" color="primary" handleClick={() => setAlertModalOpen(true)} />
          <Button type="button" title="confirm 모달" color="primary" handleClick={() => setConfirmModalOpen(true)} />
          <Button type="button" title="custom 모달" color="black" handleClick={() => setBasicModalOpen(true)} />
        </div>
      </div>
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <BasicModal
          open={alertModalOpen}
          setOpen={setAlertModalOpen}
          type="alert"
          title="alert"
          ok="yes"
          cancel="cancel"
          okAction={confirm}
        >
          동의하시나요?
        </BasicModal>

        <BasicModal
          open={confirmModalOpen}
          setOpen={setConfirmModalOpen}
          type="confirm"
          title="CONFIRM"
          ok="yes"
          size="sm"
          okAction={alert}
        >
          alert!
        </BasicModal>

        <CustomModal open={basicModalOpen} setOpen={setBasicModalOpen} title="custom modal" size="xl">
          <div>
            {/* Modal content */}
            <div className="px-5 py-4">
              <div className="text-sm">
                <div className="font-medium text-slate-800 mb-3">
                  custom modal 예시 입니다~ children 요소는 알아서 component화 잘해서 사용하기~ custom modal 예시
                  입니다~
                </div>
              </div>
              <div className="flex flex-wrap items-center mb-2"></div>
              <div className="space-y-3">
                <div>어쩌구 저쩌구</div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="px-5 pt-4">
              <div className="flex flex-wrap justify-end space-x-2">
                <Button
                  type="button"
                  title="custom 모달"
                  color="black"
                  handleClick={() => {
                    setBasicModalOpen(false);
                    submit();
                  }}
                ></Button>
              </div>
            </div>
          </div>
        </CustomModal>
      </div>
    </>
  );
};

export default ButtonModalEx;
