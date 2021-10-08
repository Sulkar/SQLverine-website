import React from 'react';
import Layout from '@theme/Layout';
import AboutFeatures from '../components/AboutFeatures';

  
  function ueberuns() {
    return (
      <Layout title="Über uns">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',            
            fontSize: '20px',
          }}>

          <AboutFeatures />
                  
        </div>
      </Layout>
    );
  }
  
  export default ueberuns;
