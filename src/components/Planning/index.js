import React from 'react';
import Anim1 from '../../Assets/GIF - Planning/1.gif';
import Anim2 from '../../Assets/GIF - Planning/2.gif';
import Anim3 from '../../Assets/GIF - Planning/3.gif';

export const Planning = ({ action }) => {
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
              src={Anim3}
              alt=''
            />
          </div>
        </div>
      </div>

      <small>
        ProUnitas’ comprehensive support includes planning with your district,
        listening to the priorities and needs of your district to ensure that
        PurpleSENSE is maximized in your district
      </small>
    </div>
  );
};
