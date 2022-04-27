import Client from './Client'

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/customer/signup', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const SignInUser = async (data) => {
  try {
    const res = Client.post('/customer/login', data)

    localStorage.setItem('token', res.data.token)
    return res.data.customer
  } catch (error) {
    throw error
  }
}
