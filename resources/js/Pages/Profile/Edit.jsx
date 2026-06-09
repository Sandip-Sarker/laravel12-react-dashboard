import { useState } from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'update-password', label: 'Update Password' },
    { id: 'delete-account', label: 'Delete Account' },
];

export default function Edit({ mustVerifyEmail, status }) {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <DashboardLayout title="Profile">
            <Head title="Profile" />

            <div className="space-y-6">
                <div className="bg-white p-6 shadow-sm rounded-3xl border border-gray-100">
                    <div className="mb-6 border-b border-gray-100 pb-4">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
                                <p className="mt-1 text-sm text-gray-500">
                                    Update your account information and password securely.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 overflow-hidden rounded-3xl border border-gray-200 bg-gray-50">
                        <div className="flex flex-col sm:flex-row">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-200 ${
                                        activeTab === tab.id
                                            ? 'bg-white text-gray-900 shadow-sm'
                                            : 'text-gray-500 hover:bg-white hover:text-gray-900'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        {activeTab === 'profile' && (
                            <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="max-w-xl"
                                />
                            </div>
                        )}

                        {activeTab === 'update-password' && (
                            <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                                <UpdatePasswordForm className="max-w-xl" />
                            </div>
                        )}

                        {activeTab === 'delete-account' && (
                            <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                                <DeleteUserForm className="max-w-xl" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
