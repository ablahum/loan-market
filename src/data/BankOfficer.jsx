import 'antd/dist/antd.css'
import { Table } from '../components'

const data = [
  {
    id: 1,
    name: 'Dicky K Ditya',
    bank: 'UOB KPR',
    phone: '08112651854',
    email: 'dickykurnia@uob.co.id',
  },
  {
    id: 2,
    name: 'Timothy Lim',
    bank: 'UOB KPR',
    phone: '082213346860',
    email: 'adriel.timothy@uob.co.id',
  },
  {
    id: 3,
    name: 'Meria Tiati',
    bank: 'UOB KPR',
    phone: '081933388087',
    email: 'meria.tiati@uob.co.id',
  },
  {
    id: 4,
    name: 'Herman Orlando',
    bank: 'MNC',
    phone: '081378613186',
    email: 'herman.orlando@mncbank.co.id',
  },
  {
    id: 5,
    name: 'Rasmono Pramono Aji',
    bank: 'MNC',
    phone: '08121060688',
    email: 'rasmono.pramono@mncbank.co.id',
  },
  {
    id: 6,
    name: 'Guritno',
    bank: 'MNC',
    phone: '081808185086',
    email: 'guritno.guritno@mncbank.co.id',
  },
  {
    id: 7,
    name: 'Maria Anisa Wijayanti',
    bank: 'MNC',
    phone: '081905057020',
    email: 'maria.wijayanti@mncbank.co.id',
  },
  {
    id: 8,
    name: 'Dea Sindy Atafani',
    bank: 'Mandiri',
    phone: '085555555388',
    email: 'dea.sindy@bankmandiri.co.id',
  },
  {
    id: 9,
    name: 'Steven Lie',
    bank: 'Mandiri',
    phone: '081330099979',
    email: 'steven@bankmandiri.co.id',
  },
  {
    id: 10,
    name: 'Yolanda',
    bank: 'Mandiri',
    phone: '085274491008',
    email: 'yolanda.lahesa@bankmandiri.co.id',
  },
]

const bankOfficer = ({ setEditData }) => <Table data={data} setEditData={setEditData} />

export default bankOfficer
