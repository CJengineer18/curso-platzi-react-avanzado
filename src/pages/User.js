import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'

const User = () => {
  const { removeAuth } = useContext(Context)

  return (
    <div>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </div>
  )
}

export default User
