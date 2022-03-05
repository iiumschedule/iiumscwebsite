import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_devices_re_dxae.svg').default,
    description: (
      <>
        Designed from the ground up to be easily installed
        to get your schedule quickly. (acah)
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_reading_time_re_phf7.svg').default,
    description: (
      <>
        Yup
      </>
    ),
  },
  {
    title: 'Powered by Flutter',
    Svg: require('@site/static/img/undraw_devices_re_dxae.svg').default,
    description: (
      <>
        Multi-platform easy access.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row align-self">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
