import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useSelector } from 'react-redux';

const FooterCompo = () => {
  const comment = useSelector(state => state.comments.value);
  console.log(comment);

  return (
    <FooterBox>
      {comment[0] &&
        comment[0].map(item => {
          const { id, body, user, created_at } = item;
          return (
            <CommentItem key={id}>
              <ItemAvartor>
                <img src={user.avatar_url} alt="avatarimg" />
              </ItemAvartor>
              <CommentBubble>
                <h3>
                  {user.login} <span>{created_at.substr(0, 10)}</span>
                </h3>
                <p>
                  <ReactMarkdown
                    className="markdown-body"
                    children={body}
                    remarkPlugins={[remarkGfm]}
                  />
                </p>
              </CommentBubble>
            </CommentItem>
          );
        })}
    </FooterBox>
  );
};

export default FooterCompo;

const FooterBox = styled.div`
  width: 100%;
`;

const CommentItem = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const ItemAvartor = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
const CommentBubble = styled.div`
  position: relative;
  width: calc(100% - 100px);
  padding: 20px;
  background: #eeee;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;

  :after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 15px 15px 15px 0;
    border-color: transparent #eeee;
    display: block;
    width: 0;
    z-index: 1;
    left: -15px;
    top: 12px;
  }

  h3 {
    font-size: 17px;
    font-weight: 600;
    line-height: 23px;
    padding-bottom: 10px;
    span {
      float: right;
    }
  }
  p {
    overflow-wrap: break-word;
  }
`;
