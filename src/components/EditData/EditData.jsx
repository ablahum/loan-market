import { CloseOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select } from 'antd'
import './edit-data.css'

const { Option } = Select

const EditData = ({ trigger, setTrigger }) => {
  return trigger ? (
    <div className='pop-up-wrapper'>
      <div className='pop-up'>
        <CloseOutlined onClick={() => setTrigger(false)} className='close' />

        <h2 className='add-user-title'>Edit Data</h2>

        <Form size='large' layout='vertical' wrapperCol={{ span: 24 }}>
          <Form.Item label='Name'>
            <Input value={'Djoni Gunawan'} />
          </Form.Item>
          <Form.Item label='Category'>
            <Select type='primary' placeholder='Choose one' bordered={false}>
              <Option value='jack'>Advisor</Option>
            </Select>
          </Form.Item>
          <Form.Item label='Office'>
            <Select placeholder='Choose one' bordered={false}>
              <Option value='jack'>LM Kemanggisan</Option>
            </Select>
          </Form.Item>
          <Form.Item label='Phone'>
            <Input value={'08123456789'} />
          </Form.Item>
          <Form.Item label='Email'>
            <Input value={'djoni.gunawan@loanmarket.co.id'} />
          </Form.Item>
          <Form.Item label='Status'>
            <Select placeholder='Choose one' bordered={false}>
              <Option value='jack'>Active</Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8 }}>
            <Button size={'large'} className='submit'>
              <PlusCircleOutlined />
              Add
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  ) : (
    ''
  )
}

export default EditData
