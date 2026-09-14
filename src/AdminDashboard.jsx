import React, { useState } from 'react';
import { 
  Pill, 
  ShieldCheck, 
  Users, 
  Activity, 
  DollarSign, 
  Lock, 
  LogOut, 
  Search, 
  Filter, 
  UserCheck, 
  UserX, 
  CheckCircle2, 
  Server, 
  AlertCircle,
  Building2,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';

export default function AdminDashboard({ onNavigate }) {
  const [users, setUsers] = useState([
    { id: 'USR-01', name: 'Dr. Sarah Jenkins', email: 's.jenkins@mediconnect.com', role: 'Doctor', branch: 'Downtown Dispensary', status: 'Active' },
    { id: 'USR-02', name: 'Marcus Ray', email: 'm.ray@mediconnect.com', role: 'Manager', branch: 'Downtown Dispensary', status: 'Active' },
    { id: 'USR-03', name: 'Alex Carter', email: 'alex.c@gmail.com', role: 'Client', branch: 'Online Delivery', status: 'Active' },
    { id: 'USR-04', name: 'Elena Rostova', email: 'e.rostova@mediconnect.com', role: 'Manager', branch: 'Westside Branch', status: 'Active' },
    { id: 'USR-05', name: 'David Beckham', email: 'd.beckham@yahoo.com', role: 'Client', branch: 'Online Delivery', status: 'Suspended' },
  ]);

  const [auditLogs] = useState([
    { id: 'LOG-881', event: 'Manager Marcus approved emergency prescription #MED-9402', time: '5 mins ago', level: 'Info' },
    { id: 'LOG-882', event: 'Security policy SSL certificate renewed automatically', time: '28 mins ago', level: 'Security' },
    { id: 'LOG-883', event: 'New client registration verified: alex.c@gmail.com', time: '1 hour ago', level: 'User' },
    { id: 'LOG-884', event: 'Database automated hourly backup completed (2.4 GB)', time: '2 hours ago', level: 'System' },
  ]);

  const toggleUserStatus = (userId) => {
    setUsers(users.map(u => u.id === userId ? {
      ...u,
      status: u.status === 'Active' ? 'Suspended' : 'Active'
    } : u));
  };

  return (
    <div className="dashboard-layout">
      {/* Top Navbar */}
      <header className="dash-header">
        <div className="dash-header-inner">
          <div className="dash-brand" onClick={() => onNavigate('home')}>
            <div className="dash-logo-icon admin-bg">
              <ShieldCheck size={24} />
            </div>
            <div>
              <span className="dash-brand-name">MediConnect</span>
              <span className="role-tag admin-tag">Enterprise Admin System</span>
            </div>
          </div>

          <div className="system-health-pill">
            <span className="pulse-indicator"></span>
            <span>All 4 Branches & APIs 100% Operational</span>
          </div>

          <div className="dash-user-actions">
            {/* Quick Switch */}
            <div className="quick-switch-dropdown">
              <span className="quick-switch-label">Switch View:</span>
              <button className="switch-chip" onClick={() => onNavigate('client-dashboard')}>Client</button>
              <button className="switch-chip" onClick={() => onNavigate('manager-dashboard')}>Manager</button>
            </div>

            <div className="user-profile-badge">
              <div className="user-avatar admin-avatar">AD</div>
              <div className="user-details">
                <span className="user-name">Super Administrator</span>
                <span className="user-role-label">Root Level Privileges</span>
              </div>
            </div>

            <button className="dash-logout-btn" onClick={() => onNavigate('login')} title="Sign Out">
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dash-main container">
        {/* Metric Cards */}
        <div className="dash-metrics-grid">
          <div className="metric-card">
            <div className="metric-icon-box bg-purple">
              <DollarSign size={22} />
            </div>
            <div>
              <p className="metric-label">Total Monthly Revenue</p>
              <h3 className="metric-value">$128,450.00</h3>
              <span className="metric-sub text-secondary">+22.4% MoM growth</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-box bg-blue">
              <Users size={22} />
            </div>
            <div>
              <p className="metric-label">Total Active Users</p>
              <h3 className="metric-value">14,342</h3>
              <span className="metric-sub text-primary">14.2k clients • 42 staff</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-box bg-emerald">
              <Building2 size={22} />
            </div>
            <div>
              <p className="metric-label">Pharmacy Branches</p>
              <h3 className="metric-value">4 Active</h3>
              <span className="metric-sub text-secondary">All synced to cloud</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-box bg-indigo">
              <Server size={22} />
            </div>
            <div>
              <p className="metric-label">System Uptime</p>
              <h3 className="metric-value">99.98%</h3>
              <span className="metric-sub">Avg latency: 24ms</span>
            </div>
          </div>
        </div>

        {/* User Management Section */}
        <div className="dash-card mt-6">
          <div className="dash-card-header">
            <div className="card-header-title">
              <Users size={20} className="text-primary" />
              <h3>User Directory & Access Control</h3>
            </div>
            <button className="btn btn-primary btn-sm" onClick={() => alert('New user registration dialog')}>
              + Add New Staff / Manager
            </button>
          </div>

          <div className="table-responsive">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>System Role</th>
                  <th>Assigned Branch</th>
                  <th>Account Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="font-mono text-muted">{user.id}</td>
                    <td className="font-semibold">{user.name}</td>
                    <td className="text-muted">{user.email}</td>
                    <td>
                      <span className={`role-pill ${
                        user.role === 'Admin' ? 'role-admin' :
                        user.role === 'Manager' ? 'role-manager' :
                        'role-client'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td>{user.branch}</td>
                    <td>
                      <span className={`status-pill ${user.status === 'Active' ? 'status-delivered' : 'status-critical'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <button 
                        className={`btn btn-xs ${user.status === 'Active' ? 'btn-outline' : 'btn-primary'}`}
                        onClick={() => toggleUserStatus(user.id)}
                      >
                        {user.status === 'Active' ? 'Suspend' : 'Activate'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Two-Column: Audit Logs & Branch Performance */}
        <div className="dash-two-col mt-6">
          {/* Audit Logs */}
          <div className="dash-card">
            <div className="dash-card-header">
              <div className="card-header-title">
                <Activity size={20} className="text-secondary" />
                <h3>Real-time System Audit Trail</h3>
              </div>
              <span className="badge badge-outline">Live Feed</span>
            </div>

            <div className="audit-log-list">
              {auditLogs.map((log) => (
                <div key={log.id} className="audit-log-item">
                  <div className="audit-icon-wrapper">
                    <CheckCircle2 size={16} className="text-secondary" />
                  </div>
                  <div className="audit-log-content">
                    <p className="audit-text">{log.event}</p>
                    <span className="audit-time">{log.time}</span>
                  </div>
                  <span className="audit-tag">{log.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Branch Performance Summary */}
          <div className="dash-card">
            <div className="dash-card-header">
              <div className="card-header-title">
                <Building2 size={20} className="text-purple" />
                <h3>Branch Dispensary Performance</h3>
              </div>
            </div>

            <div className="branch-list">
              <div className="branch-item">
                <div>
                  <h4 className="branch-name">Downtown Central Dispensary</h4>
                  <p className="branch-stats">480 Orders today • 98.4% on-time delivery</p>
                </div>
                <div className="branch-rev">
                  <span className="rev-amount">$4,820</span>
                  <span className="rev-trend text-secondary">↑ 14%</span>
                </div>
              </div>

              <div className="branch-item">
                <div>
                  <h4 className="branch-name">Westside Health Hub</h4>
                  <p className="branch-stats">310 Orders today • 99.1% on-time delivery</p>
                </div>
                <div className="branch-rev">
                  <span className="rev-amount">$3,240</span>
                  <span className="rev-trend text-secondary">↑ 8%</span>
                </div>
              </div>

              <div className="branch-item">
                <div>
                  <h4 className="branch-name">Uptown Medical Express</h4>
                  <p className="branch-stats">220 Orders today • 97.8% on-time delivery</p>
                </div>
                <div className="branch-rev">
                  <span className="rev-amount">$2,190</span>
                  <span className="rev-trend text-secondary">↑ 5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
