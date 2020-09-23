import React from 'react';
import Anim1 from '../../Assets/GIF - Resource Map/map.gif';

export const ResourceMap = ({ action }) => {
  return (
    <div>
      <h5 className='text-center border-bottom border-muted p-1'>{action}</h5>
      <div className='col-md-12'>
        <div className='row'>
          <div style={{ height: '300px' }} className='col-md-12'>
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
        School Resource Map provides a school district/school with clarity on
        resources are available to each school so district leaders know how to
        fill student gaps by assessing the supply and potential collaborations
        between various organizations.
      </small>
    </div>
  );
};
