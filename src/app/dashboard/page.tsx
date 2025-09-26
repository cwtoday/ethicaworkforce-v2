'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { User } from '@/lib/supabase/types';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session?.user) {
          router.push('/login');
          return;
        }

        // For demo purposes, create a user object from session data
        const userData = session.user.user_metadata;
        const demoUser: User = {
          id: session.user.id,
          email: session.user.email || '',
          name: userData.name || userData.full_name || session.user.email?.split('@')[0] || 'User',
          role: userData.role || 'nurse',
          avatar_url: userData.avatar_url || null
        };

        setUser(demoUser);
      } catch (error) {
        console.error('Error fetching user:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [router, supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">EthicaWorkforce Dashboard</h1>
            <Button onClick={handleLogout} variant="outline">
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Welcome back, {user.name}!</h2>
            <p className="text-gray-600">Role: {user.role.replace('_', ' ').toUpperCase()}</p>
            <p className="text-gray-600">Email: {user.email}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user.role === 'nurse' && (
              <>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-blue-900">Profile Setup</h3>
                  <p className="text-blue-700 mt-2">Complete your nursing profile to get matched with opportunities.</p>
                  <Button className="mt-4" size="sm">Complete Profile</Button>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-green-900">Applications</h3>
                  <p className="text-green-700 mt-2">Track your job applications and interview status.</p>
                  <Button className="mt-4" size="sm">View Applications</Button>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-purple-900">Learning</h3>
                  <p className="text-purple-700 mt-2">Access exam preparation and online courses.</p>
                  <Button className="mt-4" size="sm">Start Learning</Button>
                </div>
              </>
            )}

            {user.role === 'hospital' && (
              <>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-blue-900">Post Positions</h3>
                  <p className="text-blue-700 mt-2">Create job postings to attract qualified nurses.</p>
                  <Button className="mt-4" size="sm">Post Job</Button>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-green-900">Candidates</h3>
                  <p className="text-green-700 mt-2">Review applications and manage interviews.</p>
                  <Button className="mt-4" size="sm">View Candidates</Button>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-orange-900">Team Management</h3>
                  <p className="text-orange-700 mt-2">Manage your hospital team and permissions.</p>
                  <Button className="mt-4" size="sm">Manage Team</Button>
                </div>
              </>
            )}

            {user.role === 'admin' && (
              <>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-red-900">User Management</h3>
                  <p className="text-red-700 mt-2">Manage users, roles, and permissions.</p>
                  <Button className="mt-4" size="sm">Manage Users</Button>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-yellow-900">Analytics</h3>
                  <p className="text-yellow-700 mt-2">View platform statistics and reports.</p>
                  <Button className="mt-4" size="sm">View Analytics</Button>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-indigo-900">System Settings</h3>
                  <p className="text-indigo-700 mt-2">Configure platform settings and features.</p>
                  <Button className="mt-4" size="sm">Settings</Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}