import React from 'react';
import styled from 'styled-components';

const HeaderCompo = ({ buckets }) => {
  const { user, title, created_at, comments } = buckets;
  console.log(buckets);

  const date = new Date(created_at);
  return (
    <HeaderBox>
      <Avartor>
        <img src={user.avatar_url} alt="avartor" />
      </Avartor>
      <TitleBox>
        <h1>{title}</h1>
        <p>
          Writer: {user.login} Time:
          {new Intl.DateTimeFormat('kr').format(date)}
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
  h1 {
    font-size: 23px;
    font-weight: 500;
    line-height: 30px;
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
