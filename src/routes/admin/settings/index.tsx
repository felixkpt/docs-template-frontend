import CreateOrUpdateUser from "@/Pages/Admin/Settings/Users/CreateOrUpdateUser"
import Index from "@/Pages/Admin/Settings/Users/User/Index"
import Profile from "@/Pages/User/Profile"
import Users from '@/Pages/Admin/Settings/Users/Index';
import rolePermissions from '@/routes/admin/settings/role-permissions'

const index = [

  {
    path: 'role-permissions',
    children: rolePermissions,
  },
]

export default index