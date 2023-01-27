import { Outlet } from "react-router-dom";  // cuz we hv nested routes within dashboard
import AdminLayout from "../../hoc/admin.Layout";

const Dashboard = () => {
    return(
        <AdminLayout>
            <Outlet/>
        </AdminLayout>
    )
}

export default Dashboard;