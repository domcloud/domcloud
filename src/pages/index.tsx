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
        title={`DOM Cloud`}
        description="DOM Cloud is a free and open-source hosting service for your web applications. Start hosting your web apps now!"
        image="/assets/bg/canon.png"
      />
      <main>
        <Home />
      </main>
    </Layout>
  );
}
