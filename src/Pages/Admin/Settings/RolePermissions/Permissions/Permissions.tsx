import AutoTable from '@/components/AutoTable';
import CreateModel from '@/components/CreateModel';
import React, { useEffect, useState } from 'react';

const Permissions = () => {
  const [data, setData] = useState({})

  useEffect(() => {
  }, [data])

  return (
    <div>
      <h3>Permissions List</h3>
      <div>
        <div className='d-flex justify-content-end'>
          <button type="button" className="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#createModel">Create permission</button>
        </div>
        <AutoTable
          baseUri='/admin/settings/role-permissions/permissions'
          columns={[
            {
              label: 'ID',
              key: 'id',
            },
            {
              label: 'Permission Name',
              key: 'name',
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
      </div>
      {
        data && <><CreateModel data={data} actionUrl='/admin/settings/role-permissions/permissions' /></>
      }
    </div>
  );
};

export default Permissions;
