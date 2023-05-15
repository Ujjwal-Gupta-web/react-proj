import React, { useState, useEffect } from 'react'

const EditUserModal = ({ showModal, setShowModal, user, editUser }: any) => {
    const [newData, setNewData] = useState({});
    const handleUserChange = (e: any) => {
        setNewData({ ...newData, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        setNewData(user)
    }, [user])

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
                                        Edit User
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
                                            <input type="text" className="p-2 rounded border" mx-2 p-3 disabled
                                                defaultValue={user.email}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between my-1">
                                            <div>Name</div>
                                            <input type="text" className="p-2 rounded border mx-2 p-3"
                                                defaultValue={user.name}
                                                name='name'
                                                onChange={(e) => handleUserChange(e)}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between my-1">
                                            <div>Role</div>
                                            <input type="text" className="p-2 rounded border mx-2 p-3"
                                                defaultValue={user.role}
                                                name='role'
                                                onChange={(e) => handleUserChange(e)}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between my-1">
                                            <div>Status</div>
                                            <input type="text" className="p-2 rounded border mx-2 p-3"
                                                defaultValue={user.status}
                                                name='status'
                                                onChange={(e) => handleUserChange(e)}
                                            />
                                        </div>
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-blue-800 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            editUser(newData);
                                            setShowModal(false);
                                        }}
                                    >
                                        Save Changes
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

export default EditUserModal
