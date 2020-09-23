import React from 'react';
import Animation from '../../Assets/animation.gif';

export const DataAnalysis = ({ action }) => {
  return (
    <div>
      <h5 className='text-center border-bottom border-muted p-1'>{action}</h5>
      <div
        style={{
          height: 300,
        }}
      >
        <img
          style={{
            objectFit: 'contain',
          }}
          className='w-100 h-100'
          src={Animation}
          alt='animation'
        />
      </div>
      <small>
        Data is digested and reported on to the district in the form of valuable
        insights and actionable plans to augment the impact of the district’s
        student support department
      </small>
    </div>
  );
};
