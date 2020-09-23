import React from 'react';
import Anim1 from '../../Assets/GIF - Online Referral System/1.gif';

export const OnlineReferralSystem = ({ action }) => {
  return (
    <div>
      <h5 className='text-center border-bottom border-muted p-1'>{action}</h5>
      <div className='col-md-12'>
        <div className='row'>
          <div
            style={{
              height: '300px',
            }}
            className='col-md-12'
          >
            <img
              style={{
                objectFit: 'contain',
              }}
              className='h-100 w-100'
              src={Anim1}
              alt=''
            />
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
