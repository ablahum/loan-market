import { useState } from 'react'
import { Button, Layout as LayoutAntd, Menu } from 'antd'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineHome, AiOutlinePoweroff } from 'react-icons/ai'
import { BiUser, BiPencil } from 'react-icons/bi'

import 'antd/dist/antd.css'
import './layout.css'
import logo from '../../assets/logo.jpg'

const { Header, Sider, Content, Footer } = LayoutAntd

const menuItems = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <AiOutlineHome style={{ fontSize: '1rem', padding: 'auto' }} />,
  },
  {
    id: 2,
    title: 'User Management',
    icon: <BiUser style={{ fontSize: '1rem', padding: 'auto' }} />,
  },
  {
    id: 3,
    title: 'News',
    icon: <BiPencil style={{ fontSize: '1rem', padding: 'auto' }} />,
  },
]

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <LayoutAntd style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className={collapsed ? 'logo-wrapper' : 'logo-wrapper-collapsed'}>
          <img
            src={logo}
            alt='logo'
            style={{ width: '5rem' }}
          />
          <h1 className={collapsed ? 'none' : 'username'}>Yoseph Duna</h1>

          <h2 className={collapsed ? 'none' : 'role'}>Author</h2>
        </div>

        <Menu
          defaultSelectedKeys={['2']}
          mode='inline'
          className='menu'
        >
          {menuItems.map((item) => (
            <Menu.Item
              key={item.id}
              icon={item.icon}
              style={{ fontSize: '1rem' }}
            >
              {item.title}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      <LayoutAntd>
        <Header className='header'>
          <div className='title-wrapper'>
            <div className='trigger'>
              <FiMenu onClick={() => setCollapsed(!collapsed)} />
            </div>

            <div className='title'>
              <h1 style={{ fontWeight: '700' }}>Loan Market</h1>

              <span className='slash'>/</span>

              <h1>User Management</h1>
            </div>
          </div>

          <Button className='logout-btn'>
            <AiOutlinePoweroff style={{ fontSize: '1rem', marginRight: '0.3rem' }} />

            <h2 style={{ fontSize: '1rem', margin: '0' }}>Log out</h2>
          </Button>
        </Header>

        <Content className='content-wrapper'>
          <div>{children}</div>
        </Content>

        <Footer style={{ backgroundColor: 'var(--base)' }}>
          <span style={{ fontWeight: '500' }}>Copyright</span> Loan Market &#169; 2021
        </Footer>
      </LayoutAntd>
    </LayoutAntd>
  )
}

export default Layout
