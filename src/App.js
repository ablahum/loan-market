import { useState } from 'react'
import { Layout, Content, AddUser, EditData } from './components'
import { Author, Advisor, Customer, BankOfficer } from './data'

function App() {
  const [addUser, setAddUser] = useState(false)
  const [editData, setEditData] = useState(false)

  return (
    <>
      <Layout>
        <Content
          customer={<Customer setEditData={setEditData} />}
          author={<Author setEditData={setEditData} />}
          advisor={<Advisor setEditData={setEditData} />}
          bankOfficer={<BankOfficer setEditData={setEditData} />}
          setAddUser={setAddUser}
        />

        {addUser && <AddUser trigger={addUser} setTrigger={setAddUser} />}
        {editData && <EditData trigger={editData} setTrigger={setEditData} />}
      </Layout>
    </>
  )
}

export default App
