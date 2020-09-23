import React from 'react';

import Anim3 from '../../Assets/GIF - Early Warning/3.gif';

export const EarlyWarning = ({ action }) => {
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
              src={Anim3}
              alt=''
            />
          </div>
        </div>
      </div>
      <small>
        Allows for quick identification of students for services, catching them
        before they fall through the cracks using data points that are
        customizable to the district. Each student is given a color which allows
        for district staff to quickly see which students need the most attention
      </small>
    </div>
  );
};
