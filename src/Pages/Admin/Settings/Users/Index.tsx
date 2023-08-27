import AutoTable from '@/components/AutoTable'
import { useState } from 'react'
import AutoModal from '@/components/AutoModal'
import usePermissions from '@/hooks/usePermissions'

type Props = {}

const Index = (props: Props) => {

    const [data, setData] = useState([])

    const { checkPermission } = usePermissions()

    return (

        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            {
                checkPermission('users', 'post') &&
                <div className='d-flex justify-content-end'>
                    <button type="button" className="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#AutoModal">Create User</button>
                </div>
            }
            <AutoTable
                baseUri='/admin/users'
                columns={[
                    {
                        label: 'ID',
                        key: 'id',
                    },
                    {
                        label: 'User Name',
                        key: 'name',
                    },
                    {
                        label: 'Roles',
                        key: 'Roles',
                    },
                    {
                        label: 'Created At',
                        key: 'created_at',
                    },
                    {
                        label: 'Action',
                        key: 'action',
                    },
                ]}
                setData={setData}
                search={true}
            />

            {
                data && <><AutoModal data={data} actionUrl='/admin/users' /></>
            }

        </div>
    )
}

export default Index