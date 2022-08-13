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
    const res = await Client.post('/customer/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.customer
  } catch (error) {
    throw error
  }
}

export const UpdateUser = async (data) => {
  try {
    const res = await Client.put('/customer/update', data)
    localStorage.setItem('token', res.data.token)
    return res.data.customer
  } catch (error) {
    console.log(error)
  }
}

export const deleteUser = async (id) => {
  try {
    await Client.delete(`/customer/delete/${id}`)
  } catch (error) {}
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/customer/session')
    return res.data
  } catch (error) {
    throw error
  }
}
