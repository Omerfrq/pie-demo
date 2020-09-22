import React from 'react';
import Animation from '../../Assets/animation.gif';

export const DataAnalysis = ({ action }) => {
  return (
    <div>
      <h5>{action}</h5>
      <img className='w-100 h-100' src={Animation} alt='animation' />
      <small className='p-2'>
        Data is digested and reported on to the district in the form of valuable
        insights and actionable plans to augment the impact of the district’s
        student support department
      </small>
    </div>
  );
};
