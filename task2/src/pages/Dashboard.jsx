import StatCard from "../components/StatCard";
import SalesChart from "../components/SalesChart";
import OrdersChart from "../components/OrdersChart";

function Dashboard() {
  return (
    <div className="space-y-6">
      {/* STAT CARDS */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Traffic" value="350,897" />
        <StatCard title="New Users" value="2,356" />
        <StatCard title="Sales" value="924" />
        <StatCard title="Performance" value="49.65%" /> */}

        {/* STAT CARDS */}
        <div className="rounded-xl bg-sky-400 px-6 py-8">
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
  <StatCard
    title="Traffic"
    value="350,897"
    percent="+3.48%"
    subtitle="Since last month"
    icon="📊"
    color="bg-rose-500"
  />

  <StatCard
    title="New Users"
    value="2,356"
    percent="-3.48%"
    subtitle="Since last week"
    icon="👥"
    color="bg-orange-500"
  />

  <StatCard
    title="Sales"
    value="924"
    percent="-1.10%"
    subtitle="Since yesterday"
    icon="💰"
    color="bg-yellow-400 text-slate-900"
  />

  <StatCard
    title="Performance"
    value="49.65%"
    percent="+12%"
    subtitle="Since last month"
    icon="⚡"
    color="bg-cyan-400"
  />
  </div>
</div>
      

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <OrdersChart />
      </div>
    </div>
  );
}

export default Dashboard;

