import { Button, Space, Table } from 'antd'
import Column from 'antd/lib/table/Column'
import 'antd/dist/antd.css'
import './table-app.css'

const TableApp = ({ dataSource }) => {
  const office = dataSource.filter((d) => d.office)
  const hasOffice = office.length > 1

  return (
    <Table dataSource={dataSource} pagination={false}>
      <Column title='No.' dataIndex='id' key='id' />
      <Column title='Name' dataIndex='name' key='name' width={hasOffice ? '30%' : '40%'} />
      {hasOffice && <Column title='Office' dataIndex='office' key='office' width='20%' />}
      <Column title='Phone' dataIndex='phone' key='phone' width='10%' />
      <Column title='Email' dataIndex='email' key='email' width='40%' />
      <Column
        title='Action'
        key='action'
        render={() => (
          <Space>
            <Button className='edit-btn'>Edit</Button>
            <Button className='delete-btn'>Delete</Button>
          </Space>
        )}
      />
    </Table>
  )
}

export default TableApp
