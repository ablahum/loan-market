import 'antd/dist/antd.css'
import { Table } from '../components'

const data = [
  {
    id: 1,
    name: 'John Doe',
    phone: '08123456789',
    email: 'johndoe666@gmail.com',
  },
  {
    id: 2,
    name: 'Jessica Ng',
    phone: '08123456789',
    email: 'Jessica.ng@gmail.com',
  },
  {
    id: 3,
    name: 'John Doe',
    phone: '08123456789',
    email: 'johndoe666@gmail.com',
  },
  {
    id: 4,
    name: 'Jessica Ng',
    phone: '08123456789',
    email: 'Jessica.ng@gmail.com',
  },
  {
    id: 5,
    name: 'John Doe',
    phone: '08123456789',
    email: 'johndoe666@gmail.com',
  },
  {
    id: 6,
    name: 'John Doe',
    phone: '08123456789',
    email: 'johndoe666@gmail.com',
  },
  {
    id: 7,
    name: 'Jessica Ng',
    phone: '08123456789',
    email: 'Jessica.ng@gmail.com',
  },
  {
    id: 8,
    name: 'John Doe',
    phone: '08123456789',
    email: 'johndoe666@gmail.com',
  },
  {
    id: 9,
    name: 'Jessica Ng',
    phone: '08123456789',
    email: 'Jessica.ng@gmail.com',
  },
  {
    id: 10,
    name: 'John Doe',
    phone: '08123456789',
    email: 'johndoe666@gmail.com',
  },
]

const Customer = ({ setEditData }) => (
  <Table
    data={data}
    setEditData={setEditData}
  />
)

export default Customer
