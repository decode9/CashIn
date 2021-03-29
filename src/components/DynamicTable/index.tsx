import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Props, StateProps } from './interface';
import styles from './styles.scss'
import { bindActionCreators } from 'redux';
import { logout } from '../../store/actions'

const DynamicTable: FC<Props> = ({ table, action }) => {

  const header: any = [
    'nombre',
    'hora',
    'persona'
  ]
  const data = [
    { nombre: 'hola', hora: 'hola', persona: 'hola' },
    { nombre: 'hola', hora: 'hola', persona: 'hola' },
    { nombre: 'hola', hora: 'hola', persona: 'hola' },
    { nombre: 'hola', hora: 'hola', persona: 'hola' },
    { nombre: 'hola', hora: 'hola', persona: 'hola' },
    { nombre: 'hola', hora: 'hola', persona: 'hola' },
    { nombre: 'hola', hora: 'hola', persona: 'hola' },
    { nombre: 'hola', hora: 'hola', persona: 'hola' },
    { nombre: 'hola', hora: 'hola', persona: 'hola' },
  ]

  const pages = [
    1, 2, 3, 4, 5
  ]
  return (
    <div className={styles._tableBody}>
      <table>
        <thead>
          <tr>
            {(header.length) ? header.map((value: any, key: any) => <th key={key}>{value}</th>) : null}
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {(data.length) ? data.map((value: any, key: any) => {
            return (
              <tr key={key}>
                {header.map((key: any, index: any) => <td key={index}>{value[key]}</td>)}
                <td className={styles._buttonContent}>
                  <button className={styles._editButton}>Editar</button>
                  <button className={styles._deleteButton}>Eliminar</button>
                </td>
              </tr>
            )
          }) : null}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={Math.floor(header.length / 2) + 1} className={styles._perPage}>
              <select v-model="perPage" name="per_page">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </td>
            <td colSpan={Math.ceil(header.length / 2)}>
              <div className={styles._pagination}>
                {pages.map((value, index) => (
                  <div key={index} className={(value === 1) ? styles._selected : ''}>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
const mapStateToProps = ({ table }: StateProps) => ({ table });

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    logout
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DynamicTable);
