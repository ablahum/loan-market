import { CloseOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select } from 'antd'
import './add-user.css'

const AddUser = ({ trigger, setTrigger }) => {
  return trigger ? (
    <div className='pop-up-wrapper'>
      <div className='pop-up'>
        <CloseOutlined onClick={() => setTrigger(false)} className='close' />
        <h2 className='add-user-title'>Add User</h2>
        <Form size='large' layout='vertical' wrapperCol={{ span: 24 }}>
          <Form.Item label='Name'>
            <Input />
          </Form.Item>
          <Form.Item label='Category'>
            <Select type='primary' placeholder='Choose one' bordered={false}></Select>
          </Form.Item>
          <Form.Item label='Office'>
            <Select placeholder='Choose one' bordered={false}></Select>
          </Form.Item>
          <Form.Item label='Phone'>
            <Input />
          </Form.Item>
          <Form.Item label='Email'>
            <Input />
          </Form.Item>
          <Form.Item label='Status'>
            <Select placeholder='Choose one' bordered={false}></Select>
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

export default AddUser
