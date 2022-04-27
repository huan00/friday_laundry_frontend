import Client from './Client'

export const RegisterUser = async (data) => {
  try {
    const res = await Client.get('/auth/sesson')
    return res.data
  } catch (error) {
    throw error
  }
}

export const SignInUser = async (data) => {
  try {
    const res = Client.post('/auth/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}
