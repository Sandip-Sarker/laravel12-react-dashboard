import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Dashboard() {
    return (
        <DashboardLayout title="Dashboard">
            <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-1">
                    <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
                        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                            Welcome back
                        </h2>
                        <p className="mt-3 text-3xl font-semibold text-gray-900">
                            You’re logged in!
                        </p>
                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            This is your new dashboard design. Use this area to show your latest metrics, quick links, or important notifications.
                        </p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
