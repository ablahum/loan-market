import { useState } from 'react'
import { Button, Layout as LayoutAntd, Menu } from 'antd'
import 'antd/dist/antd.css'
import './layout.css'
import logo from '../../assets/logo.jpg'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineHome, AiOutlinePoweroff } from 'react-icons/ai'
import { BiUser, BiPencil } from 'react-icons/bi'

const { Header, Sider, Content, Footer } = LayoutAntd

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <LayoutAntd style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={collapsed ? 'logo-wrapper' : 'logo-wrapper-collapsed'}>
          <img src={logo} alt='logo' style={{ width: '5rem' }} />
          <h1 className={collapsed ? 'none' : 'username'}>Yoseph Duna</h1>
          <h2 className={collapsed ? 'none' : 'role'}>Author</h2>
        </div>

        <Menu defaultSelectedKeys={['2']} mode='inline' className='menu'>
          <Menu.Item key={1} icon={<AiOutlineHome style={{ fontSize: '1rem', padding: 'auto' }} />} style={{ fontSize: '1rem' }}>
            Dashboard
          </Menu.Item>
          <Menu.Item key={2} icon={<BiUser style={{ fontSize: '1rem', padding: 'auto' }} />} style={{ fontSize: '1rem' }}>
            User Management
          </Menu.Item>
          <Menu.Item key={3} icon={<BiPencil style={{ fontSize: '1rem', padding: 'auto' }} />} style={{ fontSize: '1rem' }}>
            News
          </Menu.Item>
        </Menu>
      </Sider>

      <LayoutAntd>
        <Header className='header'>
          <div className='title-wrapper'>
            <FiMenu className='trigger' onClick={() => setCollapsed(!collapsed)} />
            <h1 className='title'>
              <span style={{ fontWeight: '700' }}>Loan Market / </span>User Management
            </h1>
          </div>

          <Button className='logout-btn'>
            <AiOutlinePoweroff style={{ fontSize: '1.5rem', marginRight: '0.3rem' }} />
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
