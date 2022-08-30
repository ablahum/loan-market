import 'antd/dist/antd.css'
import TableApp from '../components/TableApp'

const author = [
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
]

const Author = () => {
  return <TableApp dataSource={author} />
}

export default Author
