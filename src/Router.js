import React, { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Main from './pages/Main/Main';
import styled from 'styled-components';
import Header from './components/Header';
import Detail from './pages/Detail/Detail';
import { GlobalContext } from './context/GlobalContext';
import { useState } from 'react';

const Router = () => {
  const [scroll, setScroll] = useState(1);
  const [buckets, setBuckets] = useState([]);
  const [commentBuckets, setCommentBuckets] = useState();
  const [comment, setComment] = useState([]);
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <GlobalContext.Provider
          value={{
            scroll,
            setScroll,
            buckets,
            setBuckets,
            commentBuckets,
            setCommentBuckets,
            comment,
            setComment,
          }}
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </GlobalContext.Provider>

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
