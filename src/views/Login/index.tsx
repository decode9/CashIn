import React, { FC, useEffect, useState } from 'react';
import { Props, StateProps } from './interface';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles.scss'
import { verifyUser, login } from '../../store/actions'
import { updateForm } from '../../utils';
import { formData, validationData } from './form'

const Login: FC<Props> = ({ auth, action }) => {

  useEffect(() => {
    action.verifyUser()
  }, [])

  const [form, setForm]: any = useState(formData);
  const [validation, setValidation]: any = useState(validationData);

  const dataForm = (event: any) => {
    const data = updateForm(event.target.name, event.target.value, validation, form);
    setForm(data['form'])
    setValidation(data['validation'])
  }

  return (
    <div className={styles._loginContainer}>
      <div className={styles._loginContent}>
        <img src="/images/GORILLA.png" width="150px" height="auto" alt="logo" />
        <h2>CashIn</h2>
        <div>
          <input placeholder='Usuario' value={form.username} name='username' onChange={dataForm} />
          {!validation.username && form.username !== '' ? (
            <p className={styles._error}>
              El Usuario es requerido. Minimo 4 Digitos. Maximo 15 Digitos, Solo
              numeros y letras
            </p>
          ) : null}
          <input placeholder='Contrasena' type='password' value={form.password} name='password' onChange={dataForm} />
          {!validation.password && form.password !== '' ? (
            <p className={styles._error}>
              La contrasena es requerida. Minimo 4 Digitos. Maximo 20 Digitos,
              Solo numeros y letras
            </p>
          ) : null}
          <button disabled={!validation.validate} className={styles._buttonLogin} onClick={() => action.login(form)}>
            Iniciar Sesion
					</button>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = ({ auth }: StateProps) => ({ auth });

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    verifyUser,
    login
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);