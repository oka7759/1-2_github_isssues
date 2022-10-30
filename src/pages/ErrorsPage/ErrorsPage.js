import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { GlobalContext } from '../../context/GlobalContext';

const ErrorsPage = () => {
  const { error } = useContext(GlobalContext);
  const params = useParams();

  return (
    <ErrorsPageBox>
      <img src="/images/error.png" alt="error" />
      <ErrorH1>{params.id} 에러입니다.</ErrorH1>
      <ErrorP>{error}</ErrorP>
      <Link to="/">
        <Button variant="primary" size="lg" className="mt-3">
          돌아가기
        </Button>
      </Link>
    </ErrorsPageBox>
  );
};

export default ErrorsPage;

const ErrorsPageBox = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  text-align: center;
  background-color: white;
  padding: 150px 0;
  img {
    width: 100%;
    max-width: 300px;
  }
`;
const ErrorH1 = styled.h1`
  font-size: 50px;
  font-weight: 700;
`;
const ErrorP = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 40px;
`;
