import { Head, Link, usePage } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

export default function DashboardLayout({ title, children }) {
    const user = usePage().props.auth.user;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [cmsOpen, setCmsOpen] = useState(false);
    const [profileDropdown, setProfileDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const userName = user?.name || 'User';
    const userInitial = userName.charAt(0).toUpperCase();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setProfileDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <Head title={title || 'Dashboard'} />

            <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
                <div className="md:hidden bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
                    <span className="text-lg font-bold text-gray-800">SU <span className="text-indigo-600">EDE</span></span>
                    <button
                        type="button"
                        onClick={() => setSidebarOpen((open) => !open)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div
                    className={`sidebar fixed inset-y-0 left-0 z-50 w-64 transform bg-white border-r border-gray-100 transition-transform duration-300 md:relative md:translate-x-0 ${
                        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="hidden md:flex h-16 items-center px-8 border-b border-gray-50">
                        <span className="text-xl font-bold text-gray-800 tracking-tight">
                            SU <span className="text-indigo-600">EDE</span>
                        </span>
                    </div>

                    <div className="h-full flex flex-col justify-between pb-4 pt-6 px-4 md:px-6">
                        <nav className="space-y-2">
                            <Link
                                href={route('dashboard')}
                                className={`flex items-center px-4 py-3 text-sm sm:text-base rounded-xl transition-all duration-200 ${
                                    route().current('dashboard')
                                        ? 'bg-indigo-50 text-indigo-700 font-semibold'
                                        : 'text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                <span className="ml-2">Dashboard</span>
                            </Link>
                            <button
                                type="button"
                                onClick={() => setCmsOpen((open) => !open)}
                                className={`w-full flex items-center justify-between px-4 py-3 text-sm sm:text-base rounded-xl transition-all duration-200 ${
                                    route().current('dashboard') || route().current('profile.edit')
                                        ? 'bg-gray-50 text-gray-800 font-semibold'
                                        : 'text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                    <span className="ml-2">Category</span>
                                </div>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${cmsOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            <div className={`pl-6 space-y-1 mt-1 transition-all duration-200 ${cmsOpen ? 'block' : 'hidden'}`}>
                                <span className="flex items-center px-4 py-2.5 text-sm text-gray-600 rounded-xl">Category One</span>
                                <span className="flex items-center px-4 py-2.5 text-sm text-gray-600 rounded-xl">Category Two</span>
                            </div>
                        </nav>

                        <div className="border-t border-gray-100 p-4">
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="flex items-center w-full px-4 py-3 text-sm sm:text-base text-gray-500 hover:bg-red-50 hover:text-red-700 rounded-xl transition-all duration-200"
                            >
                                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                <span>Logout</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`} onClick={() => setSidebarOpen(false)} />

                <main className="flex-1 flex flex-col min-w-0 overflow-hidden w-full md:w-auto">
                    <header className="hidden md:flex h-16 items-center justify-between px-4 sm:px-6 md:px-8 bg-white border-b border-gray-100 flex-shrink-0">
                        <h1 className="text-base sm:text-lg font-semibold text-gray-800 truncate">Dashboard</h1>
                        <div className="flex items-center space-x-3 sm:space-x-4 relative" ref={dropdownRef}>
                            <button
                                type="button"
                                onClick={() => setProfileDropdown((open) => !open)}
                                className="flex items-center space-x-3 sm:space-x-4 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors duration-200"
                            >
                                <span className="text-xs sm:text-sm text-gray-500 hidden sm:inline truncate">{userName}</span>
                                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                    {userInitial}
                                </div>
                            </button>

                            {profileDropdown && (
                                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                                    <div className="px-4 py-3 border-b border-gray-100">
                                        <p className="text-sm font-semibold text-gray-800">{userName}</p>
                                        <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                                    </div>
                                    <Link
                                        href={route('profile.edit')}
                                        className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        Profile
                                    </Link>
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="w-full text-left flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200 border-t border-gray-100"
                                    >
                                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    </header>

                    <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}
