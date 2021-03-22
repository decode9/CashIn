import { navigate, Router } from '@reach/router';
import React, { FC, useEffect } from 'react';
import { StateProps, Props } from './interface';
import { Sidebar } from '../../components';
import Dashboard from '../Dashboard';
import styles from './styles.scss'
import { connect } from 'react-redux';
import Group from '../Group';

const Home: FC<Props> = ({ auth }) => {
  const { isAuth } = auth;

  useEffect(() => {
    if (isAuth) navigate('/');
  }, [auth])
  return (
    <div className={styles._pageContent}>
      <Sidebar />
      <div className={styles._page}>
        <Router>
          <Dashboard path='/' default={true} />
          <Group path='/groups' />
        </Router>
      </div>
    </div>
  )
}


const mapStateToProps = ({ auth }: StateProps) => ({ auth });

export default connect(mapStateToProps)(Home);