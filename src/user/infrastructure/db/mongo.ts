import { connect } from 'mongoose'

const DB_URI = `${process.env.DB_URI}`

const dbInit = async () => {
  await connect(DB_URI)
  console.log('Done')
}

export default dbInit
