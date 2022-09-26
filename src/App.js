import { useState } from 'react'
import { Layout, Content, AddUser, EditData } from './components'
import { Author, Advisor, Customer } from './data'

function App() {
  const [addUser, setAddUser] = useState(false)
  const [editData, setEditData] = useState(false)

  return (
    <>
      <Layout>
        <Content author={<Author setEditData={setEditData} />} advisor={<Advisor setEditData={setEditData} />} customer={<Customer setEditData={setEditData} />} addUser={addUser} setAddUser={setAddUser} />

        {addUser && <AddUser trigger={addUser} setTrigger={setAddUser} />}
        {editData && <EditData trigger={editData} setTrigger={setEditData} />}
      </Layout>
    </>
  )
}

export default App
