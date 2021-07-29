import React from 'react';
import clsx from 'clsx';
import styles from './AboutFeatures.module.css';

const FeatureList = [{
        title: 'Richard Scheglmann',
        img: require('../../static/img/scheglmann.jpg').default,
        description: ( 
          <>
            Lehrer an einer bayerischen Mittelschule
          </>
        ),
    },
    {
        title: 'Benjamin Vötterle',
        img: require('../../static/img/voetterle.jpg').default,
        description: ( 
        <>
           Konrektor an einer anderen bayerischen Mittelschule
        </>
        ),
    },

];

function Feature({ img, title, description, }) {
    return ( 
      
        <div className = { clsx('col col--6') } >

          <div className = "text--center" >
            <img className = { styles.portrait } src = { img }
            alt = { title }/> 
          </div > 
          <div className = "text--center padding-horiz--md" >
            <h3> { title } </h3> 
            <p> { description } </p> 
          </div> 

        </div>
      
    ); 
}

export default function AboutFeatures() {
    return ( 
      <section className = { styles.features } >
        <div className = "container" >
            <div className = "row" >  {
             FeatureList.map((props, idx) => ( <
                Feature key = { idx } {...props }
                />
            ))
            } 
          </div> 
        </div> 
      </section>
    );
}