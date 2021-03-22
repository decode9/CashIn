import React, { FC } from 'react';
import { connect } from 'react-redux';
import Home from '../Home';
import Login from '../Login';
import { Props, StateProps } from './interface';

const Main: FC<Props> = ({ auth }) => {

  const { isAuth } = auth;

  return (
    <>
      {isAuth ? <Home /> : <Login />}
    </>
  )
}

const mapStateToProps = ({ auth }: StateProps) => ({ auth });


export default connect(mapStateToProps,)(Main);
