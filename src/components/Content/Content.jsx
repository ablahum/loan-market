import { Button, Dropdown, Input, Menu, Space, Tabs as TabsAntd, Divider } from 'antd'
import { DownOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { FiFilter } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'

import 'antd/dist/antd.css'
import './content.css'

const { TabPane } = TabsAntd

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

const ButtonAdd = ({ setAddUser }) => (
  <Button
    size='large'
    className='add-btn'
    onClick={() => setAddUser(true)}
  >
    <BiUser />
    <span className='plus'>
      <AiOutlinePlus />
    </span>
    Add User
  </Button>
)

const Search = () => (
  <div className='search-wrapper'>
    <Input
      size='large'
      placeholder='Enter Keyword'
      prefix={<BsSearch style={{ margin: '0 0.7rem' }} />}
      className='search'
    />

    <Button
      size='large'
      className='filter-btn'
    >
      <FiFilter style={{ marginRight: '.5rem' }} />
      <span className='filters'>Filters</span>
    </Button>
  </div>
)

const tabsData = [
  {
    key: 1,
    tab: 'Customer',
  },
  {
    key: 2,
    tab: 'Author',
  },
  {
    key: 3,
    tab: 'Super Admin',
  },
  {
    key: 4,
    tab: 'BDE',
  },
  {
    key: 5,
    tab: 'Advisor',
  },
  {
    key: 6,
    tab: 'Admin Office',
  },
  {
    key: 7,
    tab: 'Principal',
  },
  {
    key: 8,
    tab: 'Principal LMI',
  },
  {
    key: 9,
    tab: 'Bank Officer',
  },
  {
    key: 10,
    tab: 'Bank Admin',
  },
  {
    key: 11,
    tab: 'Bank Principal',
  },
]

const Tabs = ({ customer, author, advisor, bankOfficer }) => {
  return (
    <TabsAntd
      defaultActiveKey='1'
      tabBarGutter={60}
    >
      {tabsData.map((item) => (
        <TabPane
          key={item.key}
          tab={item.tab}
        >
          {(() => {
            if (item.key === 1) {
              return customer
            } else if (item.key === 2) {
              return author
            } else if (item.key === 5) {
              return advisor
            } else if (item.key === 9) {
              return bankOfficer
            }
          })()}
        </TabPane>
      ))}
    </TabsAntd>
  )
}

const Pagination = () => (
  <div className='pagination-wrapper'>
    <h2>1-5 of 5</h2>

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

      <Divider
        type='vertical'
        className='divider'
      />

      <div style={{ marginLeft: '1rem' }}>
        <Button
          className='nav-btn'
          style={{ margin: '0px 0.5rem 0 0' }}
        >
          <ArrowLeftOutlined />
        </Button>

        <Button className='nav-btn'>
          <ArrowRightOutlined />
        </Button>
      </div>
    </div>
  </div>
)

const Content = ({ setAddUser, customer, author, advisor, bankOfficer }) => (
  <>
    <ButtonAdd setAddUser={setAddUser} />

    <div className='content-wrapper'>
      <div className='content'>
        <Search />

        <Tabs
          customer={customer}
          author={author}
          advisor={advisor}
          bankOfficer={bankOfficer}
        />
      </div>

      <div className='content'>
        <Pagination />
      </div>
    </div>
  </>
)

export default Content
