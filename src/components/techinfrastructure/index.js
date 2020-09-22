import React from 'react';
import Animation from '../../Assets/animation.gif';

export const Techinfrastructure = ({ action }) => {
  return (
    <div>
      <h5>{action}</h5>
      <img className='w-100 h-100' src={Animation} alt='animation' />
      <small className='p-2'>
        Each school is outfitted with an online referral, early warning
        platform, and resource map that transforms how school staff
        refer/identify and connect students to social and health services both
        internal and external to the district. For the first time schools can
        quantify the demand for services and know where resources are,
        maximizing on existing health, social, and human services
      </small>
    </div>
  );
};
