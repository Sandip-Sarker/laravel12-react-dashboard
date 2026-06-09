import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import React from 'react';

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    const firstError = Object.values(errors || {})[0] || null;

    return (
        <GuestLayout>
            <Head title="Admin Login" />

                <div className="mb-10 text-center rounded-3xl">
                    <h1 className="text-2xl font-bold text-gray-800 tracking-tight">SU <span className="text-indigo-600">EDE</span></h1>
                    <p className="mt-2 text-gray-500 font-medium">Admin Portal</p>
                </div>

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
                )}

                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 outline-none transition-all duration-200 placeholder-gray-400"
                            placeholder="admin@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 outline-none transition-all duration-200 placeholder-gray-400"
                            placeholder="••••••••"
                        />
                    </div>

                    {firstError && (
                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 italic">
                            {firstError}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md shadow-indigo-100"
                    >
                        Sign In to Dashboard
                    </button>
                </form>
        </GuestLayout>
    );
}
