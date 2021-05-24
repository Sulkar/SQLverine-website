import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [{
        title: 'SQL Editor',
        Svg: require('../../static/img/SQLverine-slategrey.svg').default,
        description: ( <
            >
            Den Umgang mit Datenbanken lernen ohne viel Text zu schreiben.Rätsel lösen.SQL lernen.Einfach im Webbrowser. <
            />
        ),
    },
    {
        title: 'Autorentool',
        Svg: require('../../static/img/SQLverine-forestgreen.svg').default,
        description: ( <
            >
            Aufgaben für den Editor einfach erstellen.Datenbanken erzeugen und aufbauen. <
            />
        ),
    },
    {
        title: 'Dokumentation',
        Svg: require('../../static/img/SQLverine-goldenrod.svg').default,
        description: ( <
            >
            Schüler * innen gerechte Dokumentation für SQL Befehle, den Editor und das Autorentool. <
            />
        ),
    },
];

function Feature({ Svg, title, description }) {
    return ( <
        div className = { clsx('col col--4') } >
        <
        div className = "text--center" >
        <
        Svg className = { styles.featureSvg }
        alt = { title }
        /> < /
        div > <
        div className = "text--center padding-horiz--md" >
        <
        h3 > { title } < /h3> <
        p > { description } < /p> < /
        div > <
        /div>
    );
}

export default function HomepageFeatures() {
    return ( <
        section className = { styles.features } >
        <
        div className = "container" >
        <
        div className = "row" > {
            FeatureList.map((props, idx) => ( <
                Feature key = { idx } {...props }
                />
            ))
        } <
        /div> < /
        div > <
        /section>
    );
}