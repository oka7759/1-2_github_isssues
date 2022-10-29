import React, { useState, useCallback, useEffect } from 'react';
import { getIssuesList } from '../../api/api';
import IssuesList from './components/IssuesList';

const Main = () => {
  const [scroll, setScroll] = useState(1);
  const [buckets, setBuckets] = useState([]);

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

      .catch(e => {});
  }, [scroll]);

  useEffect(() => {
    fetchData();
  }, [scroll]);

  return <IssuesList buckets={buckets} />;
};

export default Main;
