import React, { useState } from 'react';

import './App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Modal, ModalBody } from 'reactstrap';
import { DonutConfig } from './pie.navigation';
import { Settings } from './pie.format';
import { Techinfrastructure } from './components/techinfrastructure';
import { OnlineReferralSystem } from './components/OnlineReferralSystem';
import { EarlyWarning } from './components/EarlyWarning';
import { ResourceMap } from './components/ResourceMap';
import { Planning } from './components/Planning';
import { DataAnalysis } from './components/DataAnalysis';
import { Implementation } from './components/Implementation';
import { ComprehensiveSupport } from './components/ComprehensiveSupport';

const modalBody = (action) => {
  if (action === 'TECH INFRASTRUCTURE: PURPLESENSE') {
    return <Techinfrastructure action={action} />;
  } else if (action === 'ONLINE REFERRAL SYSTEM') {
    return <OnlineReferralSystem action={action} />;
  } else if (action === 'EARLY WARNING') {
    return <EarlyWarning action={action} />;
  } else if (action === 'DATA & ANALYSIS') {
    return <DataAnalysis action={action} />;
  } else if (action === 'IMPLEMENTATION') {
    return <Implementation action={action} />;
  } else if (action === 'PLANNING') {
    return <Planning action={action} />;
  } else if (action === 'RESOURCE MAP') {
    return <ResourceMap action={action} />;
  } else if (action === 'COMPREHENSIVE SUPPORT') {
    return <ComprehensiveSupport action={action} />;
  }
};

function App() {
  const [modal, setModal] = useState(false);

  const [action, setAction] = useState('');

  const toggle = () => setModal(!modal);

  Highcharts.setOptions({
    chart: {
      style: {
        fontFamily: 'Montserrat !important',
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
          connectorShape: 'straight',
        },
        cursor: 'pointer',
        point: {
          events: {
            click: (e) => {
              if (e.point.name === 'COMPREHENSIVE SUPPORT') {
                setModal(true);
                setAction('COMPREHENSIVE SUPPORT');
              } else if (e.point.name === 'TECH INFRASTRUCTURE: PURPLESENSE') {
                setModal(true);
                setAction('TECH INFRASTRUCTURE: PURPLESENSE');
              } else if (e.point.name === 'ONLINE REFERRAL SYSTEM') {
                setModal(true);
                setAction('ONLINE REFERRAL SYSTEM');
              } else if (e.point.name === 'EARLY WARNING') {
                setModal(true);
                setAction('EARLY WARNING');
              } else if (e.point.name === 'DATA & ANALYSIS') {
                setModal(true);
                setAction('DATA & ANALYSIS');
              } else if (e.point.name === 'IMPLEMENTATION') {
                setModal(true);
                setAction('IMPLEMENTATION');
              } else if (e.point.name === 'PLANNING') {
                setModal(true);
                setAction('PLANNING');
              } else if (e.point.name === 'RESOURCE MAP') {
                setModal(true);
                setAction('RESOURCE MAP');
              }
            },
          },
        },
      },
    },

    series: [DonutConfig.outerCircle, DonutConfig.innerCircle],
  };
  return (
    <div className='App mt-5'>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>{modalBody(action)}</ModalBody>
      </Modal>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default App;
