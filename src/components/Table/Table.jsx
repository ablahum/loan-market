import { Button, Space, Table as TableAntd } from 'antd'
import Column from 'antd/lib/table/Column'
import 'antd/dist/antd.css'
import './table.css'

const Table = ({ data, setEditData }) => {
  const office = data.filter((d) => d.office)
  const bank = data.filter((d) => d.bank)
  const hasOffice = office.length > 1
  const hasBank = bank.length > 1

  return (
    <TableAntd dataSource={data} pagination={false}>
      <Column title='No.' dataIndex='id' key='id' />
      <Column title='Name' dataIndex='name' key='name' width={hasOffice || hasBank ? '30%' : '40%'} />
      {hasOffice && <Column title='Office' dataIndex='office' key='office' width='20%' />}
      {hasBank && <Column title='Bank' dataIndex='bank' key='bank' width='20%' />}
      <Column title='Phone' dataIndex='phone' key='phone' width='10%' />
      <Column title='Email' dataIndex='email' key='email' width='40%' />
      <Column
        title='Action'
        key='action'
        render={() => (
          <Space>
            <Button className='edit-btn' onClick={() => setEditData(true)}>
              Edit
            </Button>
            <Button className='delete-btn'>Delete</Button>
          </Space>
        )}
      />
    </TableAntd>
  )
}

export default Table
