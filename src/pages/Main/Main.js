import React, { useCallback, useEffect, useContext } from 'react';
import { getIssuesList } from '../../api/api';
import IssuesList from './components/IssuesList';
import { GlobalContext } from '../../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const { scroll, setScroll, buckets, setBuckets, setError } =
    useContext(GlobalContext);
  const navigator = useNavigate();

  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setScroll(scroll + 1);
    }
  });

  const fetchData = useCallback(async () => {
    const payload = {
      sort: 'comments',
      per_page: 20,
      page: scroll,
    };

    await getIssuesList(payload)
      .then(({ data }) => {
        setBuckets([...buckets, ...data]);
      })

      .catch(e => {
        setError(e.message);
        navigator(`/error/${e.response.status}`);
      });
  }, [scroll]);

  useEffect(() => {
    fetchData();
  }, [scroll]);

  return <IssuesList />;
};

export default Main;
