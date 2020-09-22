import React from 'react';
import Anim1 from '../../Assets/GIF - Implementation/feedback.gif';
import Anim2 from '../../Assets/GIF - Implementation/support.gif';

export const Implementation = ({ action }) => {
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
