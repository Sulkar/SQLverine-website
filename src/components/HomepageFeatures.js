import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [{
        title: 'SQL Editor',
        Svg: require('../../static/img/SQLverine-slategrey.svg').default,
        description: ( 
          <>
          Ein SQL Editor samt Lernumgebung nicht nur für Lernende. Den Umgang mit Datenbanken lernen, auch ohne viel Text zu schreiben. Rätsel und Problemstellungen lösen. Einfach im Webbrowser. 
          </>
        ),
        link: "https://editor.sqlverine.org",
    },
    {
        title: 'Autorentool',
        Svg: require('../../static/img/SQLverine-forestgreen.svg').default,
        description: ( 
        <>
            Aufgaben für den Editor einfach erstellen. Datenbanken erzeugen und aufbauen. Einfacher Im-/Export von Daten als CSV und Excel.
        </>
        ),
        link: "https://author.sqlverine.org",
    },
    {
        title: 'Dokumentation',
        Svg: require('../../static/img/SQLverine-goldenrod.svg').default,
        description: ( 
        <>
            Schüler * innen gerechte Dokumentation für SQL Befehle, den Editor und das Autorentool. 
        </>
        ),
        link: "https://docs.sqlverine.org",
    },
];

function Feature({ Svg, title, description, link }) {
    return ( 
      
        <div className = { clsx('col col--4') } >
          <a className = { styles.featureLink } href= { link } > 
          <div className = "text--center" >
            <Svg className = { styles.featureSvg }
            alt = { title }/> 
          </div > 
          <div className = "text--center padding-horiz--md" >
            <h3> { title } </h3> 
            <p> { description } </p> 
          </div> 
          </a>
        </div>
      
    ); 
}

export default function HomepageFeatures() {
    return ( 
      <section className = { styles.features } >
        <div className = "container" >
            <div className = "row" > {
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