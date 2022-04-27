import Client from './Client'

export const RegisterUser = async (data) => {
  try {
    const res = await Client.get('/auth/sesson')
    return res.data
  } catch (error) {
    throw error
  }
}
