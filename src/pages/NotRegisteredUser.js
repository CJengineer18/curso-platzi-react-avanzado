import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <div>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              register({ variables: { input } }).then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              })
            }

            const errorMsg = error && 'El usuario ya existe o hay algun problema'

            return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
          }
        }
      </RegisterMutation>

      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              login({ variables: { input } }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }

            const errorMsg = error && 'La contraseña no es correcta o el usuario no existe'

            return <UserForm error={errorMsg} disabled={loading} onSubmit={onSubmit} title='Iniciar Sesión' />
          }
        }
      </LoginMutation>
    </div>
  )
}

export default NotRegisteredUser
