import 'antd/dist/antd.css'
import { Table } from '../components'

const data = [
  {
    id: 1,
    name: 'John Doe',
    office: 'LM Alam Sutera',
    phone: '08123456789',
    email: 'anastasia.flavina@loanmarket.co.id',
  },
  {
    id: 2,
    name: 'HJ. Herlandin Laksmiwat',
    office: 'LM Intercon',
    phone: '08123456789',
    email: 'andin.laksmiwati@gmail.com',
  },
  {
    id: 3,
    name: 'Harimurni',
    office: 'LM Kelapa Gading',
    phone: '08123456789',
    email: 'harimurni@gmail.com',
  },
  {
    id: 4,
    name: 'Djoni Gunawan',
    office: 'LM Kemanggisan',
    phone: '08123456789',
    email: 'djoni.gunawan@loanmarket.com',
  },
  {
    id: 5,
    name: 'David Lai Min Layardi',
    office: 'LM Kelapa Gading',
    phone: '08123456789',
    email: 'david.laimin@gmail.com',
  },
  {
    id: 6,
    name: 'HJ. Herlandin Laksmiwat',
    office: 'LM Intercon',
    phone: '08123456789',
    email: 'andin.laksmiwati@gmail.com',
  },
  {
    id: 7,
    name: 'Harimurni',
    office: 'LM Kelapa Gading',
    phone: '08123456789',
    email: 'harimurni@gmail.com',
  },
  {
    id: 8,
    name: 'Djoni Gunawan',
    office: 'LM Kemanggisan',
    phone: '08123456789',
    email: 'djoni.gunawan@loanmarket.com',
  },
  {
    id: 9,
    name: 'David Lai Min Layardi',
    office: 'LM Kelapa Gading',
    phone: '08123456789',
    email: 'david.laimin@gmail.com',
  },
  {
    id: 10,
    name: 'Djoni Gunawan',
    office: 'LM Kemanggisan',
    phone: '08123456789',
    email: 'djoni.gunawan@loanmarket.com',
  },
]

const Advisor = ({ setEditData }) => (
  <Table
    data={data}
    setEditData={setEditData}
  />
)

export default Advisor
