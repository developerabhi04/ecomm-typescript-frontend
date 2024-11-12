import { useSelector } from "react-redux";
import AdminSidebar from "../../../components/admin/AdminSidebar"
import { LineChart } from "../../../components/admin/Chart"
import { getLastMonths } from "../../../utils/features";
import { RootState } from "../../../redux/store";
import { useLineQuery } from "../../../redux/api/dashboardAPI";
import { CustomError } from "../../../types/api-types";
import toast from "react-hot-toast";
import { SkeletonLoader } from "../../../components/Loader";


const { last12Months: months } = getLastMonths();

const LineCharts = () => {

    const { user } = useSelector((state: RootState) => state.userReducer);

    const { isLoading, data, error, isError } = useLineQuery(user?._id!);

    const products = data?.charts.products || [];
    const users = data?.charts.users || [];
    const revenue = data?.charts.revenue || [];
    const discount = data?.charts.discount || [];

    if (isError) {
        const err = error as CustomError;
        toast.error(err.data.message);
    }


    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="chart-container">
                <h1>Line Charts</h1>
                {isLoading ? (<SkeletonLoader />) : (
                    <>
                        <section>
                            <LineChart
                                data={users}
                                label="Users"
                                borderColor="rgb(53, 162, 255)"
                                backgroundColor="rgba(53, 162, 255,0.5)"
                                labels={months}
                            />
                            <h2>Active Users</h2>
                        </section>

                        <section>
                            <LineChart
                                data={products}
                                backgroundColor={"hsla(269,80%,40%,0.4)"}
                                borderColor={"hsl(269,80%,40%)"}
                                label="Products"
                                labels={months}
                            />
                            <h2>Total Products (SKU)</h2>
                        </section>

                        <section>
                            <LineChart
                                data={revenue}
                                backgroundColor={"hsla(129,80%,40%,0.4)"}
                                borderColor={"hsl(129,80%,40%)"}
                                label="Revenue"
                                labels={months}
                            />
                            <h2>Total Revenue</h2>
                        </section>

                        <section>
                            <LineChart
                                data={discount}
                                backgroundColor={"hsla(29,80%,40%,0.4)"}
                                borderColor={"hsl(29,80%,40%)"}
                                label="Discount"
                                labels={months}
                            />
                            <h2>Discount Allotted</h2>
                        </section>
                    </>
                )}

            </main>
        </div>
    )
}

export default LineCharts