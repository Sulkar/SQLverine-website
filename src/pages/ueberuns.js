import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import AboutFeatures from '../components/AboutFeatures';

function About() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        
        <main>
          <div className="container">
          
          </div>
          <AboutFeatures />
        </main>
      </Layout>
    );
  }
  
  function Hello() {
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
  
  export default Hello;
  //export default About;