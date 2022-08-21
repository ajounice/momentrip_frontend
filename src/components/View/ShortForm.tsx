import React from 'react';
import { VerticalNavigation } from '../common/Navigation';
import '../../styles/components/View/ShortForm.css';

function ShortForm() {
  return (
    <div className="short-form-container">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video autoPlay muted width="250" height="250">
        <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/485050/movie.ogg" type="video/mp4" />
      </video>
      <VerticalNavigation />
    </div>
  );
}

export { ShortForm };
