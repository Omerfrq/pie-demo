import React from 'react';
import Anim1 from '../../Assets/GIF - Online Referral System/1.gif';
import Anim2 from '../../Assets/GIF - Online Referral System/2.gif';
import Anim3 from '../../Assets/GIF - Online Referral System/3.gif';
import Anim4 from '../../Assets/GIF - Online Referral System/4.gif';

export const OnlineReferralSystem = ({ action }) => {
  return (
    <div>
      <h5 className='text-center border-bottom border-muted p-1'>{action}</h5>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6'>
            <img className='h-100 w-100' src={Anim1} alt='' />
          </div>
          <div className='col-md-6'>
            <img className='h-100 w-100' src={Anim2} alt='' />
          </div>
          <div className='col-md-6'>
            <img className='h-100 w-100' src={Anim3} alt='' />
          </div>
          <div className='col-md-6 p-4'>
            <img className='h-100 w-100' src={Anim4} alt='' />
          </div>
        </div>
      </div>

      <small>
        Transforms how schools refer/identify and connect students to needed
        services through a clear and accountable, integrated referral
        platform. School districts are able to interweave multiple stakeholders
        in alerting the right person to address the whole child
      </small>
    </div>
  );
};
