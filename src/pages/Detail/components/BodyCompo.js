import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';

const BodyCompo = ({ buckets }) => {
  const { body } = buckets;
  return (
    <BodyBox>
      <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
    </BodyBox>
  );
};

export default BodyCompo;

const BodyBox = styled.div`
  width: 100%;
  padding: 30px 10px;
  border-bottom: 1px solid #eee;
`;
