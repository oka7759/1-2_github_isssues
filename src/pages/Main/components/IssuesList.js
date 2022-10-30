import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Spin from './Spin';
import { GlobalContext } from '../../../context/GlobalContext';
import {
  BsChatDots,
  BsFillPersonFill,
  BsFillStopwatchFill,
} from 'react-icons/bs';

const IssuesList = () => {
  const { buckets, isLoding, last } = useContext(GlobalContext);
  return (
    <IssuesListLayout>
      {buckets.map((issue, idx) => {
        const { title, user, updated_at, id, comments, number } = issue;

        return idx === 4 ? (
          <React.Fragment key={id}>
            <WantedAD>
              <a
                href="https://www.wanted.co.kr/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/logo.png" alt="광고" />
              </a>
            </WantedAD>
            <Link to={`/detail/${number}`}>
              <IssuesListBox>
                <h1>
                  <Badge bg="secondary">#{number}</Badge> Title: {title}
                </h1>

                <UserBox>
                  <Writer>
                    <BsFillPersonFill />
                    <Badge bg="primary">{user.login}</Badge>
                  </Writer>
                  <Date>
                    <BsFillStopwatchFill />
                    <Badge bg="info">{updated_at.substr(0, 10)}</Badge>
                  </Date>
                  <Comment>
                    <BsChatDots />
                    <Badge bg="success">{comments}</Badge>
                  </Comment>
                </UserBox>
              </IssuesListBox>
            </Link>
          </React.Fragment>
        ) : (
          <Link to={`/detail/${number}`}>
            <IssuesListBox key={id}>
              <h1>
                <Badge bg="secondary">#{number}</Badge> Title: {title}
              </h1>

              <UserBox>
                <Writer>
                  <BsFillPersonFill /> <Badge bg="primary">{user.login}</Badge>
                </Writer>
                <Date>
                  <BsFillStopwatchFill />
                  <Badge bg="info">{updated_at.substr(0, 10)}</Badge>
                </Date>
                <Comment>
                  <BsChatDots />
                  <Badge bg="success">{comments}</Badge>
                </Comment>
              </UserBox>
            </IssuesListBox>
          </Link>
        );
      })}
      {isLoding && !last && <Spin />}
    </IssuesListLayout>
  );
};

export default IssuesList;

const IssuesListLayout = styled.div`
  width: 100%;
  height: auto;
  min-height: 500px;
  background-color: white;
`;
const IssuesListBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 20px 0px 20px 20px;
  h1 {
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
  }
  :hover {
    background-color: #eeee;
    transition: 1s;
    cursor: pointer;
  }
`;
const UserBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  font-weight: 500;
`;
const Writer = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;
const Date = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  svg {
    margin-right: 10px;
  }
`;
const Comment = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;

  svg {
    margin-right: 10px;
  }
`;
const WantedAD = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;

  img {
    display: block;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
`;
