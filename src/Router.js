import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Main from './pages/Main/Main';
import styled from 'styled-components';
import Header from './components/Header';
import Detail from './pages/Detail/Detail';
import { GlobalContext } from './context/GlobalContext';
import { useState } from 'react';
import ErrorsPage from './pages/ErrorsPage/ErrorsPage';

const Router = () => {
  const [scroll, setScroll] = useState(1);
  const [buckets, setBuckets] = useState([]);
  const [commentBuckets, setCommentBuckets] = useState();
  const [comment, setComment] = useState([]);
  const [error, setError] = useState('');
  const [isLoding, setIsLoding] = useState(false);
  const [last, setLast] = useState(false);
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <GlobalContext.Provider
          value={{
            last,
            setLast,
            isLoding,
            setIsLoding,
            scroll,
            setScroll,
            buckets,
            setBuckets,
            commentBuckets,
            setCommentBuckets,
            comment,
            setComment,
            error,
            setError,
          }}
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="error/:id" element={<ErrorsPage />} />
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
