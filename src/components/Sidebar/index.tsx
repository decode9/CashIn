import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Props, StateProps } from './interface';
import styles from './styles.scss'
import { bindActionCreators } from 'redux';
import { logout } from '../../store/actions'
import { Link, Location } from '@reach/router';

const Sidebar: FC<Props> = ({ auth, action }) => {

  const { username } = auth;

  const menu = [
    { 'name': 'Inicio', 'route': '/' },
    { 'name': 'Punto de venta', 'route': '/pos' },
    { 'name': 'Grupo', 'route': '/groups' },
    { 'name': 'Categorias', 'route': '/categories' },
    { 'name': 'Productos', 'route': '/products' },
    { 'name': 'Configuracion', 'route': '/configuration' }
  ]

  return (
    <Location>
      {({ location }) => {
        return (<div className={styles._sidebarContainer}>
          <div className={styles._sidebarHeader}>
            <img src="/images/GORILLA.png" height={100} width={100} alt="profilePicture" />
            <p className={styles._mainName}>Restaurante</p>
            <p className={styles._mainUsername}>{username}</p>
            <button className={styles._logoutButton} onClick={action.logout}>Cerrar Sesion</button>
          </div>
          <div className={styles._sidebarContent}>

            <ul>
              {menu.map((value, index) => {
                return (<Link to={value.route} key={index}><li className={(location.pathname === value.route) ? styles._active : ''} >{value.name}</li></Link>)
              })}
            </ul>

          </div>
        </div>)
      }}
    </Location>

  )
}
const mapStateToProps = ({ auth }: StateProps) => ({ auth });

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    logout
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
