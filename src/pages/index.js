import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { ThemeProvider, Container, Text, Button } from '@te-whatu-ora/anatomic';
import { myCovidRecord } from '@te-whatu-ora/anatomic-themes';

import styles from './index.module.css';
import '@te-whatu-ora/anatomic/styles';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Explore the API Standards
          </Link>
          <Container>
            <Text>Hello Anantomic!</Text>
            <Button variant="primary">Primary button</Button>
          </Container>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`HelloWorld API Standards`}
      description="Description will go into a meta tag in <head />">
        <ThemeProvider theme={myCovidRecord.className}>
          <HomepageHeader />
          <main>
            <HomepageFeatures />
          </main>
        </ThemeProvider>
    </Layout>
  );
}
