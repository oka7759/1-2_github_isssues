import React, { useCallback, useEffect, useContext } from 'react';
import { getIssuesList } from '../../api/api';
import IssuesList from './components/IssuesList';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  complet,
  errorMessage,
  isLast,
  isScroll,
  nowLoading,
  getBuckets,
} from '../../app/reducer/productReducer';

const Main = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const last = useSelector(state => state.last.value);
  const scroll = useSelector(state => state.scroll.value);

  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      dispatch(isScroll());
    }
  });

  const fetchData = useCallback(async () => {
    const payload = {
      sort: 'comments',
      per_page: 20,
      page: scroll,
    };

    dispatch(complet());

    await getIssuesList(payload)
      .then(({ data }) => {
        data.length === 0 && dispatch(isLast());
        dispatch(nowLoading());
        !last && dispatch(getBuckets(data));
      })

      .catch(e => {
        dispatch(errorMessage(e.message));
        navigator(`/error/${e.response.status}`);
      });
  }, [scroll]);

  useEffect(() => {
    !last && fetchData();
  }, [scroll]);

  return <IssuesList />;
};

export default Main;
