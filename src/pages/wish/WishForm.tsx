import React from 'react';
import '../../styles/pages/wish/WishForm.css';
import { ShortForm } from '../../components/View/ShortForm';

function WishForm() {
  console.log('wish form');
  return (
    <div className={'wish-form-container'}>
      <ShortForm />
    </div>
  );
}

export default WishForm;
