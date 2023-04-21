import React from 'react';
import Layout from '@theme/Layout';
import Home from '../components/home';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import { PageMetadata } from '@docusaurus/theme-common';

export default function HomePage(): JSX.Element {
  return (
    <Layout>
      <PageMetadata
        title={`Starts your website!`}
        description="DOM Cloud is a free, modern hosting service for your web applications. Start hosting your web apps now!"
        image="/assets/bg/canon-home.png"
      />
      <main>
        <Home />
      </main>
    </Layout>
  );
}
