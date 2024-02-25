import React from 'react';
import { Hero } from "../components/organisms/Hero";
import { MainLayout } from "../components/layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
    </MainLayout>
  );
};

export default HomePage;

export const Head = () => (
  <>
    <title>Fiona Rx</title>
    <meta description="Page d'accueil du portfolio de Fiona Roux"></meta>
  </>
);