import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Sidebar } from '../../components';
import { Props, StateProps } from './interface';

const Dashboard: FC<Props> = () => {

  return (
    <div className="_dashboardContainer">
      Hola
    </div>
  )
}

const mapStateToProps = ({ }: StateProps) => ({});

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
