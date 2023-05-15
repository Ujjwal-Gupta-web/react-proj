import React, { useEffect, useState } from 'react';
import Table from './components/UserTable';
import Badge from './components/Badge';
import AddUserModal from './components/AddUserModal';
import { CSVLink } from "react-csv";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

function App() {
  let [users, setUsers] = useState<Array<any>>([]);
  let [dispusers, setDispUsers] = useState<Array<any>>([]);
  let [page, setPage] = useState<number>(1);
  let [addUserModalToggle, setAddUserModalToggle] = useState<boolean>(false);

  let headers = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Last Login", key: "lastLogin" },
    { label: "Image URL", key: "imageUrl" },
    { label: "Status", key: "status" },
    { label: "Role", key: "role" },
  ];


  const getUsers = async () => {
    fetch("/api/api.json").then(res => res.json()).then((fin) => {
      setUsers(fin)
    })
  }

  const addUser=(userData:any)=>{
    userData.lastLogin=new Date().toISOString();
    setUsers([...users,userData])
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    setDispUsers(users.slice((page - 1) * (5), (page) * (5)))
  }, [users,page])

  return (
    <>
      {/* ADD USER MODAL */}
      {<AddUserModal showModal={addUserModalToggle} setShowModal={setAddUserModalToggle} addUser={addUser}/>}

      <div className='m-3 p-3'>
        <h2 className="text-3xl font-semibold dark:text-white">Company Settings</h2>

        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="mr-2">
            <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">General</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">User</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Plan</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Billing</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Integrations</a>
          </li>

        </ul>
      </div>

      <div className='p-3 m-3 border-solid border-2 border-dark-600'>
        <div className='flex items-center justify-between my-3'>

          <div>
            <h2 className="text-xl font-semibold dark:text-white">Users
              <span className="mx-3">
                <Badge text={JSON.stringify(users.length)} />
              </span>
            </h2>
            <h2 className="tracking-normal text-gray-500 md:text-sm dark:text-gray-400">Manage your team members and their account permissions here</h2>
          </div>

          <div>
            {/* DONWLOAD CSV */}
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              <CSVLink data={users} headers={headers}>
                Download CSV
              </CSVLink>;
            </button>
            <button
              type="button"
              onClick={() => setAddUserModalToggle(!addUserModalToggle)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add User</button>
          </div>
        </div>

        {/* USER TABLE */}
        <Table data={dispusers} setUsers={setUsers} users={users}/>

        {/* PAGINATION */}
        <div className='flex items-center justify-between my-3 text-gray-500'>

          <div className='p-3 border rounded font-bold flex items-center justify-around cursor-pointer'
            onClick={() => { if (page >= 0) setPage(page - 1) }}
          ><FaArrowLeft /><div className='mx-2'>Previous</div></div>

          <div>
            {[...Array(Math.ceil(users.length / 5))].map((ele, idx) => (idx + 1 >= page && idx < page + 3) && <span
              className={`mx-3 border p-1 rounded ${idx + 1 === page ? 'font-bold' : ''} cursor-pointer`}
              key={idx}
              onClick={() => setPage(idx + 1)}
            >
              {idx + 1}
            </span>)}
          </div>

          <div
            onClick={() => { if (page < Math.ceil(users.length / 5)) setPage(page + 1) }}
            className='p-3 border rounded font-bold flex items-center justify-around cursor-pointer'><div className='mx-2'>Next</div><FaArrowRight /></div>
        </div>

      </div>

    </>
  );
}

export default App;



