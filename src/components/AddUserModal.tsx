import React, { useState } from 'react'

const AddUserModal = ({ showModal, setShowModal, addUser }: any) => {
  const [newuser, setNewUser] = useState({
    name: "",
    email: "",
    lastLogin: "",
    imageUrl: "https://source.unsplash.com/random/?profile",
    status: "",
    role: ""
  });
  const handleUserChange=(e:any)=>{
    setNewUser({...newuser,[e.target.name]:e.target.value})
  }
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add new user
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    <div className="flex items-center justify-between my-1">
                      <div>Email</div>
                      <input 
                      name="email"
                      type="text" className="p-2 rounded border" mx-2 p-3
                      onChange={(e) => handleUserChange(e)}
                      />
                    </div>
                    <div className="flex items-center justify-between my-1">
                      <div>Name</div>
                      <input type="text" className="p-2 rounded border mx-2 p-3"
                        name='name'
                        onChange={(e) => handleUserChange(e)}
                      />
                    </div>
                    <div className="flex items-center justify-between my-1">
                      <div>Role</div>
                      <input type="text" className="p-2 rounded border mx-2 p-3"
                        name='role'
                        onChange={(e) => handleUserChange(e)}
                      />
                    </div>
                    <div className="flex items-center justify-between my-1">
                      <div>Status</div>
                      <input type="text" className="p-2 rounded border mx-2 p-3"

                        name='status'
                        onChange={(e) => handleUserChange(e)}
                      />
                    </div>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      addUser(newuser)
                      setShowModal(false)
                    }}
                  >
                    Add User
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>)
}

export default AddUserModal
