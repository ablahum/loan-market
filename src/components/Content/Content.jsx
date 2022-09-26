import { Button, Dropdown, Input, Menu, Space, Tabs, Divider } from 'antd'
import 'antd/dist/antd.css'
import './content.css'
import { FiFilter } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { DownOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

const { TabPane } = Tabs

const menu = (
  <Menu
    items={[
      {
        label: '1',
        key: '1',
      },
      {
        label: '2',
        key: '2',
      },
      {
        label: '3',
        key: '3',
      },
    ]}
  />
)

const Content = ({ addUser, setAddUser, customer, author, advisor }) => {
  return (
    <div className='content-wrapper'>
      <div className='main-content'>
        <Button size={'large'} className='add-btn' onClick={() => setAddUser(true)}>
          <BiUser />
          <span className='plus'>
            <AiOutlinePlus />
          </span>
          Add User
        </Button>

        <div className='content'>
          <div className='search-wrapper'>
            <Input size='large' placeholder='Enter Keyword' prefix={<BsSearch style={{ margin: '0 0.7rem' }} />} className='search' />
            <Button size='large' className='filter-btn'>
              <FiFilter style={{ marginRight: '.5rem' }} />
              <span style={{ fontWeight: '600' }}>Filters</span>
            </Button>
          </div>

          <Tabs defaultActiveKey='2' tabBarGutter={60}>
            <TabPane tab='Customer' key='1'>
              {customer}
            </TabPane>
            <TabPane tab='Author' key='2'>
              {author}
            </TabPane>
            <TabPane tab='Super Admin' key='3' />
            <TabPane tab='BDE' key='4' />
            <TabPane tab='Advisor' key='5'>
              {advisor}
            </TabPane>
            <TabPane tab='Admin Office' key='6' />
            <TabPane tab='Principal' key='7' />
            <TabPane tab='Principal LMI' key='8' />
            <TabPane tab='Bank Officer' key='9' />
            <TabPane tab='Bank Admin' key='10' />
            <TabPane tab='Bank Principal' key='11' />
          </Tabs>
        </div>
      </div>

      <div className='content pagination-wrapper'>
        <div>
          <h2>1-5 of 5</h2>
        </div>

        <div className='pagination'>
          <h2>The page you're on</h2>

          <Dropdown overlay={menu}>
            <Button className='page-btn'>
              <Space>
                1
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>

          <Divider type='vertical' style={{ height: '20px', backgroundColor: 'var(--primary)' }} />

          <div>
            <Button className='nav-btn' style={{ margin: '0px 0.5rem 0 1rem' }}>
              <ArrowLeftOutlined />
            </Button>

            <Button className='nav-btn'>
              <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
