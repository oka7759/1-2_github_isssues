import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderCompo>
      <Link to="/">
        <h1>angular / angular-cli</h1>
      </Link>
    </HeaderCompo>
  );
};

export default Header;

const HeaderCompo = styled.div`
  width: 100%;
  background-color: #3a3a3a;
  h1 {
    text-align: center;
    line-height: 70px;
    font-weight: 700;
    font-size: 20px;
    color: white;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
  }
`;
