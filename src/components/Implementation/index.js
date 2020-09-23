import React from 'react';
import Anim1 from '../../Assets/GIF - Implementation/feedback.gif';

export const Implementation = ({ action }) => {
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
        ProUnitas conducts trainings for district staff, engaging multiple
        student support departments in surrounding each student with the support
        they need, all powered by PurpleSENSE.
      </small>
    </div>
  );
};
