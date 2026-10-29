import React from 'react';
import Header from './Header';
import About from './About';
import Integrations from './Integrations';
import Process from './Process';
import Work from './Work';
import InquiryForm from './InquiryForm';

const LandingPage = () => {
  return (
    <>
      <Header />
      <About />
      <Integrations />
      <Process />
      <Work />
      <InquiryForm />
    </>
  );
};

export default LandingPage;
