import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../../context/GlobalContext';

const HeaderCompo = () => {
  const { commentBuckets } = useContext(GlobalContext);
  const { user, title, created_at, comments } = commentBuckets;

  return (
    <HeaderBox>
      <Avartor>
        <img src={user.avatar_url} alt="avartor" />
      </Avartor>
      <TitleBox>
        <h1>{title}</h1>
        <p>
          Writer: {user.login} Time:
          {created_at.substr(0, 10)}
        </p>
      </TitleBox>
      <CommentBox>comment:{comments}</CommentBox>
    </HeaderBox>
  );
};

export default HeaderCompo;

const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0px;
  border-bottom: 1px solid #eee;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;
const Avartor = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
const TitleBox = styled.div`
  width: calc(100% - 250px);
  padding: 20px 20px;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
  h1 {
    font-size: 23px;
    font-weight: 500;
    line-height: 30px;
    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 24px;
    }
  }
  p {
    font-size: 15px;
    line-height: 30px;
    padding-left: 30px;
  }
`;

const CommentBox = styled.p`
  font-size: 17px;
  font-weight: 500;
`;
