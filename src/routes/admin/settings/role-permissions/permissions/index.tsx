import Permissions from '@/Pages/Admin/Settings/RolePermissions/Permissions/Index';
import CreateOrUpdatePermission from '@/Pages/Admin/Settings/RolePermissions/Permissions/CreateOrUpdatePermission';
import AuthenticatedLayout from '@/Layouts/Authenicated/AuthenticatedLayout';

const relativeUri = 'settings/role-permissions/permissions/';

const index = [
    {
        path: '',
        element: <AuthenticatedLayout uri={relativeUri} permission="" Component={Permissions} />,
    },
    {
        path: 'create',
        element: <AuthenticatedLayout uri={relativeUri + 'create'} permission="" Component={CreateOrUpdatePermission} />,
    },
    {
        path: 'detail/:id/edit',
        element: <AuthenticatedLayout uri={relativeUri + 'detail/:id/edit'} permission="" Component={CreateOrUpdatePermission} />,
    },
];

export default index;
