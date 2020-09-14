import React, { useState } from 'react';

import './App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Modal, ModalBody } from 'reactstrap';
import { DonutConfig } from './pie.navigation';
import { Settings } from './pie.format';
import Animation from './Assets/animation.gif';
import { ScrollTo } from './components/ScrollTo';

function App() {
  const [modal, setModal] = useState(false);

  const [action, setAction] = useState('');

  const toggle = () => setModal(!modal);

  Highcharts.setOptions({
    chart: {
      style: {
        fontFamily: 'Overpass !important',
      },
    },
  });

  const options = {
    ...Settings,
    plotOptions: {
      pie: {
        startAngle: 120,
      },
      shadow: false,
      borderWidth: 0,
      series: {
        dataLabels: {
          enabled: true,
          inside: true,
        },
        cursor: 'pointer',
        point: {
          events: {
            click: (e) => {
              if (e.point.name === 'COMPREHENSIVE SUPPORT') {
                window.location.href = '#comprehensive-support';
              } else if (e.point.name === 'TECH INFRASTRUCTURE: PURPLESENSE') {
                setModal(true);
                setAction('TECH INFRASTRUCTURE: PURPLESENSE');
              } else if (e.point.name === 'ONLINE REFERRAL SYSTEM') {
                setModal(true);
                setAction('ONLINE REFERRAL SYSTEM');
              } else if (e.point.name === 'EARLY WINNING') {
                setModal(true);
                setAction('EARLY WINNING');
              } else if (e.point.name === 'DATA & ANALYSIS') {
                setModal(true);
                setAction('DATA & ANALYSIS');
              } else if (e.point.name === 'IMPLEMENTATION') {
                setModal(true);
                setAction('IMPLEMENTATION');
              } else if (e.point.name === 'PLANNING') {
                setModal(true);
                setAction('PLANNING');
              } else if (e.point.name === 'RESOURCE MAPPING') {
                setModal(true);
                setAction('RESOURCE MAPPING');
              }
            },
          },
        },
      },
    },

    series: [DonutConfig.outerCircle, DonutConfig.innerCircle],
  };
  return (
    <div className='App'>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          {action === 'TECH INFRASTRUCTURE: PURPLESENSE' ? (
            <>
              <h5>{action}</h5>
              <div className='d-flex justify-content-center align-items-center flex-column'>
                <img className='w-100 h-100' src={Animation} alt='animation' />
                <small className='text-muted p-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur suscipit fuga, neque maxime cupiditate esse nobis quod
                  est dicta minima nesciunt reprehenderit non expedita
                  consequatur debitis molestiae possimus alias sed, doloribus
                  quo architecto obcaecati? Rem tenetur placeat rerum velit esse
                  voluptatum accusantium tempora cupiditate quos modi, porro,
                  officia ut expedita.
                </small>
              </div>
            </>
          ) : (
            <>
              {action === 'RESOURCE MAPPING' ||
              action === 'ONLINE REFERRAL SYSTEM' ||
              action === 'EARLY WINNING' ? (
                <>
                  <div className='d-flex justify-content-center align-items-center flex-column'>
                    <h5>{action}</h5>
                    <img
                      className='w-100 h-100'
                      src={Animation}
                      alt='animation'
                    />
                    <small className='text-muted p-2'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur suscipit fuga, neque maxime cupiditate esse nobis
                    </small>
                    <span className='font-weight-bold'>
                      Want To Learn More?
                    </span>
                  </div>
                </>
              ) : (
                <>
                  {action === 'DATA & ANALYSIS' ||
                  action === 'PLANNING' ||
                  action === 'IMPLEMENTATION' ? (
                    <>
                      <div className='d-flex justify-content-center align-items-center flex-column'>
                        <h5>{action}</h5>
                        <img
                          className='w-100 h-100'
                          src={Animation}
                          alt='animation'
                        />
                        <small className='text-muted p-2'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Tenetur suscipit fuga, neque maxime cupiditate
                          esse nobis
                        </small>
                      </div>
                    </>
                  ) : (
                    ''
                  )}
                </>
              )}
            </>
          )}
        </ModalBody>
      </Modal>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <ScrollTo />
    </div>
  );
}

export default App;
