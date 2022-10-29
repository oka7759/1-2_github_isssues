import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getIssuesDetail, getComment } from '../../api/api';
import BodyCompo from './components/BodyCompo';
import FooterCompo from './components/FooterCompo';
import HeaderCompo from './components/HeaderCompo';

const Detail = () => {
  const [buckets, setBuckets] = useState();
  const [comment, setComment] = useState([]);
  const params = useParams();
  const fetchData = async () => {
    await getIssuesDetail(params.id).then(({ data }) => {
      setBuckets(data);
    });
    await getComment(params.id).then(({ data }) => {
      setComment(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    buckets && (
      <DetailContainer>
        <HeaderCompo buckets={buckets} />
        <BodyCompo buckets={buckets} />
        <FooterCompo comment={comment} />
      </DetailContainer>
    )
  );
};

export default Detail;
const DetailContainer = styled.div`
  width: 100%;
  background-color: white;
`;
