import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Spin from '../../components/Spin';
import BodyCompo from './components/BodyCompo';
import FooterCompo from './components/FooterCompo';
import HeaderCompo from './components/HeaderCompo';
import { getIssuesDetail, getComment } from '../../api/api';
import {
  errorMessage,
  getCommentBuckets,
  getComments,
  complet,
  nowLoading,
} from '../../app/reducer/productReducer';
import '../../styles/markdown.css';

const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
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

  return loading ? (
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
