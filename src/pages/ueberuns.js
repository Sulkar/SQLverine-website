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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',            
            fontSize: '20px',
          }}>
        <p>&#9993; Kontakt: <a href="mailto:info@sqlverine.org">info@sqlverine.org</a></p> 
        </div>
      </Layout>
    );
  }
  
  export default ueberuns;
