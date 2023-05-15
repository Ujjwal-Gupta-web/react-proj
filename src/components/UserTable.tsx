import React, { useState } from 'react'
import Badge from './Badge';
import moment from 'moment';
import DeleteUserModal from './DeleteUserModal';
import EditUserModal from './EditUserModal';
import { FaTrash, FaPen, FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';
import { sortByLastLoginAsc, sortByLastLoginDesc, sortByNameAsc, sortByNameDesc } from '../utility/sortFns';

interface IDataProps {
    name: string;
    email: string;
    lastLogin: string;
    imageUrl: string;
    status: string;
    role: string;
}
interface IProps {
    data: Array<IDataProps>;
    users: Array<IDataProps>;
    setUsers: any;
}


const Table = (props: IProps) => {

    let [isAscName, setIsAscName] = useState<boolean>(false);
    let [isAscLastLogin, setIsAscLastLogin] = useState<boolean>(false);
    let [deleteUserModalToggle, setDeleteUserModalToggle] = useState<boolean>(false);
    let [editUserModalToggle, setEditUserModalToggle] = useState<boolean>(false);
    let [selectedUserId, setSelectedUserId] = useState<string>("");
    let [selectedUser, setSelectedUser] = useState<IDataProps>({
        name: "",
        email: "",
        lastLogin: "",
        imageUrl: "",
        status: "",
        role: ""
    });

    const getTime = (dt: string) => {
        let date = dt;
        let ndate = moment(date).format('D MMM YYYY,h:mm:ss A').split(",");
        return <>
            {ndate[0]}<br />
            ({ndate[1]})
        </>;
    }

    const deleteUser = (userId: any) => {
        const newData = props.users.filter((d) => d.email !== userId);
        props.setUsers(newData)
    }

    const editUser = (userdets: any) => {
        const updatedData = props.users.map((d) => {
            if (d.email == userdets.email) {
                return userdets;
            }
            return d;
        }
        )
        props.setUsers(updatedData);
    }

    const sortNameAsc = () => {
        props.setUsers([...sortByNameAsc(props.users)])
    }
    const sortNameDesc = async () => {
        props.setUsers([...sortByNameDesc(props.users)])
    }
    const sortLastLoginAsc = () => {
        props.setUsers([...sortByLastLoginAsc(props.users)])
    }
    const sortLastLoginDesc = () => {
        props.setUsers([...sortByLastLoginDesc(props.users)])
    }

    return (<>

        {<DeleteUserModal showModal={deleteUserModalToggle} setShowModal={setDeleteUserModalToggle} userId={selectedUserId} deleteUser={deleteUser} />}
        {<EditUserModal showModal={editUserModalToggle} setShowModal={setEditUserModalToggle} user={selectedUser} editUser={editUser} />}

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 flex items-center justify-between"
                            onClick={() => {
                                if (!isAscName) {
                                    sortNameAsc();
                                }
                                else {
                                    sortNameDesc();
                                }
                                setIsAscName(!isAscName)
                            }}
                        >
                            <div>Name</div> {isAscName ? <FaLongArrowAltDown /> : <FaLongArrowAltUp />}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Role
                        </th>
                        <th scope="col" className="px-6 py-3 flex items-center justify-between"
                            onClick={() => {
                                if (!isAscLastLogin) {
                                    sortLastLoginAsc();
                                }
                                else {
                                    sortLastLoginDesc();
                                }
                                setIsAscLastLogin(!isAscLastLogin)
                            }}
                        >
                            <div>Last Login</div> {isAscLastLogin ? <FaLongArrowAltDown /> : <FaLongArrowAltUp />}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Delete</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data?.map(((res: IDataProps) =>

                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className='flex items-center'>
                                        <img
                                            className='rounded-full'
                                            style={{ height: "50px", width: "50px" }}
                                            src={res.imageUrl} />
                                        <div className='ml-1'>
                                            {res.name}<br />
                                            ({res.email})
                                        </div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    <Badge text={res.status} />
                                </td>
                                <td className="px-6 py-4">
                                    {res.role}
                                </td>
                                <td className="px-6 py-4">
                                    {getTime(res.lastLogin)}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-gray-600 dark:text-gray-500 hover:underline"
                                        onClick={() => {
                                            setSelectedUserId(res.email);
                                            setDeleteUserModalToggle(true);
                                        }}
                                    >
                                        <FaTrash /></a>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-gray-600 dark:text-gray-500 hover:underline"
                                        onClick={() => {
                                            setSelectedUser(res);
                                            setEditUserModalToggle(true);
                                        }}
                                    ><FaPen /></a>
                                </td>
                            </tr>

                        ))
                    }


                </tbody>
            </table>
        </div>
    </>
    )
}

export default Table