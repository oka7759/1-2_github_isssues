import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getIssuesDetail, getComment } from '../../api/api';
import BodyCompo from './components/BodyCompo';
import FooterCompo from './components/FooterCompo';
import HeaderCompo from './components/HeaderCompo';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/markdown.css';
import {
  errorMessage,
  getCommentBuckets,
  getComments,
  complet,
  nowLoading,
} from '../../app/reducer/productReducer';
import Spin from '../../components/Spin';

const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const commentBuckets = useSelector(state => state.commnetBuckets.value);
  const loading = useSelector(state => state.loading.value);
  const fetchData = async () => {
    dispatch(complet());
    await getIssuesDetail(params.id)
      .then(({ data }) => {
        dispatch(nowLoading());
        dispatch(getCommentBuckets(data));
      })
      .catch(e => {
        dispatch(errorMessage(e.message));
        navigator(`/error/${e.response.status}`);
      });

    await getComment(params.id)
      .then(({ data }) => {
        dispatch(getComments(data));
      })
      .catch(e => {
        dispatch(errorMessage(e.message));
        navigator(`/error/${e.response.status}`);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return commentBuckets.length > 0 ? (
    <DetailContainer>
      <HeaderCompo />
      <BodyCompo />
      <FooterCompo />
    </DetailContainer>
  ) : (
    <Spin />
  );
};

export default Detail;
const DetailContainer = styled.div`
  width: 100%;
  background-color: white;
`;
