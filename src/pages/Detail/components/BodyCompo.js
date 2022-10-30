import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import { GlobalContext } from '../../../context/GlobalContext';

const BodyCompo = () => {
  const { commentBuckets } = useContext(GlobalContext);
  const { body } = commentBuckets;

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
