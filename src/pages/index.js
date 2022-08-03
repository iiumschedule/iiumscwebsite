import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Typewriter from 'typewriter-effect';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Typewriter options={{
            loop: true,
          }}
            onInit={(typewriter) => {
              typewriter.typeString('IIUM Schedule Generator')
                .changeDeleteSpeed(20)
                .pauseFor(1300)
                .deleteChars(9)
                .typeString('Maker')
                .pauseFor(1300)
                .deleteChars(5)
                .typeString('Browser')
                .pauseFor(1300)
                .start();
            }}
          />
        </h1 >
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/downloads/beta">
            Get started ⚡
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello`}
      description="Generate your IIUM Schedule with only a few clicks. App available for Android, Web and Windows.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
