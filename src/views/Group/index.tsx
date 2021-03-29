import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DynamicTable } from '../../components';
import { Props, StateProps } from './interface';
import styles from './styles.scss'

const Group: FC<Props> = () => {

  return (
    <div className={styles._groupContainer}>
      <div className={styles._groupHeader}>
        <div>
          <h2>Grupos</h2>
        </div>
        <div>
          <div className={styles._buttons}>
            <button>Crear</button>
          </div>
        </div>
      </div>
      <div className={styles._groupContent}>
        <DynamicTable />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Group);
