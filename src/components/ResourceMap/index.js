import React from 'react';
import Anim1 from '../../Assets/GIF - Resource Map/map.gif';
import Anim2 from '../../Assets/GIF - Resource Map/school.gif';
import Anim3 from '../../Assets/GIF - Resource Map/seesaw.gif';
import Anim4 from '../../Assets/GIF - Resource Map/carousel.gif';

export const ResourceMap = ({ action }) => {
  return (
    <div>
      <h5 className='text-center border-bottom border-muted p-1'>{action}</h5>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6'>
            <img
              style={{
                objectFit: 'contain',
              }}
              className='h-100 w-100'
              src={Anim1}
              alt=''
            />
          </div>
          <div className='col-md-6'>
            <img
              style={{
                objectFit: 'contain',
              }}
              className='h-100 w-100'
              src={Anim2}
              alt=''
            />
          </div>
          <div className='col-md-6'>
            <img
              style={{
                objectFit: 'contain',
              }}
              className='h-100 w-100'
              src={Anim3}
              alt=''
            />
          </div>
          <div className='col-md-6 p-4'>
            <img
              style={{
                objectFit: 'contain',
              }}
              className='h-100 w-100'
              src={Anim4}
              alt=''
            />
          </div>
        </div>
      </div>

      <small>
        School Resource Map provides a school district/school with clarity on
        resources are available to each school so district leaders know how to
        fill student gaps by assessing the supply and potential collaborations
        between various organizations.
      </small>
    </div>
  );
};
