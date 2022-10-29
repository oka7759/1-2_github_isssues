import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getIssuesDetail, getComment } from '../../api/api';
import BodyCompo from './components/BodyCompo';
import FooterCompo from './components/FooterCompo';
import HeaderCompo from './components/HeaderCompo';
import { GlobalContext } from '../../context/GlobalContext';

const Detail = () => {
  const { commentBuckets, setCommentBuckets, setComment } =
    useContext(GlobalContext);
  const params = useParams();
  const fetchData = async () => {
    await getIssuesDetail(params.id).then(({ data }) => {
      setCommentBuckets(data);
    });
    await getComment(params.id).then(({ data }) => {
      setComment(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    commentBuckets && (
      <DetailContainer>
        <HeaderCompo />
        <BodyCompo />
        <FooterCompo />
      </DetailContainer>
    )
  );
};

export default Detail;
const DetailContainer = styled.div`
  width: 100%;
  background-color: white;
`;
