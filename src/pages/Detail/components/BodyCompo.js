import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';

const BodyCompo = () => {
  const commentBuckets = useSelector(state => state.commnetBuckets.value);

  const { body } = commentBuckets[0];

  return (
    <BodyBox>
      <ReactMarkdown
        className="markdown-body"
        children={body}
        remarkPlugins={[remarkGfm]}
      />
    </BodyBox>
  );
};

export default BodyCompo;

const BodyBox = styled.div`
  width: 100%;
  padding: 30px 30px;
  border-bottom: 1px solid #eee;
  overflow-x: auto;
`;
