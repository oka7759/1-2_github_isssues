import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Main from './pages/Main/Main';
import styled from 'styled-components';
import Header from './components/Header';
import Detail from './pages/Detail/Detail';
import ErrorsPage from './pages/ErrorsPage/ErrorsPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="error/:id" element={<ErrorsPage />} />
        </Routes>

        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default Router;
const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;
