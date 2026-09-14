import React, { useState } from 'react';
import { 
  Pill, 
  Package, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Users, 
  FileCheck, 
  LogOut, 
  Truck, 
  Search, 
  Filter,
  Check,
  RefreshCw,
  Eye,
  Store
} from 'lucide-react';

export default function ManagerDashboard({ onNavigate }) {
  const [orders, setOrders] = useState([
    { id: 'ORD-5501', customer: 'Sarah Connor', items: 'Amoxicillin 500mg, Paracetamol', priority: 'Urgent', status: 'Pending Review', amount: '$34.50' },
    { id: 'ORD-5502', customer: 'Michael Scott', items: 'Metformin 850mg (60 Tabs)', priority: 'Standard', status: 'Approved', amount: '$18.00' },
    { id: 'ORD-5503', customer: 'Emily Watson', items: 'Ventolin Inhaler, Cetirizine', priority: 'Urgent', status: 'Packing', amount: '$42.80' },
    { id: 'ORD-5504', customer: 'David Miller', items: 'Multivitamins, Omeprazole 20mg', priority: 'Standard', status: 'Ready for Courier', amount: '$29.90' },
  ]);

  const [inventory, setInventory] = useState([
    { id: 'SKU-101', name: 'Amoxicillin 500mg', batch: 'BX-2026-08', stock: 14, min: 25, status: 'Low Stock' },
    { id: 'SKU-102', name: 'Paracetamol 650mg', batch: 'BX-2026-11', stock: 140, min: 50, status: 'In Stock' },
    { id: 'SKU-103', name: 'Insulin Glargine 100U', batch: 'BX-2026-04', stock: 4, min: 15, status: 'Critical' },
    { id: 'SKU-104', name: 'Azithromycin 250mg', batch: 'BX-2026-09', stock: 32, min: 20, status: 'In Stock' },
    { id: 'SKU-105', name: 'Salbutamol Inhaler', batch: 'BX-2026-12', stock: 6, min: 12, status: 'Low Stock' },
  ]);

  const handleUpdateStatus = (orderId, newStatus) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  const handleReorder = (skuId) => {
    alert(`Reorder purchase request initiated for ${skuId}! Supplier notification sent.`);
  };

  return (
    <div className="dashboard-layout">
      {/* Top Navbar */}
      <header className="dash-header">
        <div className="dash-header-inner">
          <div className="dash-brand" onClick={() => onNavigate('home')}>
            <div className="dash-logo-icon manager-bg">
              <Pill size={24} />
            </div>
            <div>
              <span className="dash-brand-name">MediConnect</span>
              <span className="role-tag manager-tag">Pharmacy Manager Portal</span>
            </div>
          </div>

          <div className="branch-indicator">
            <Store size={16} className="text-secondary" />
            <span>Branch #04 - Downtown Central Dispensary</span>
          </div>

          <div className="dash-user-actions">
            {/* Quick Switch */}
            <div className="quick-switch-dropdown">
              <span className="quick-switch-label">Switch View:</span>
              <button className="switch-chip" onClick={() => onNavigate('client-dashboard')}>Client</button>
              <button className="switch-chip" onClick={() => onNavigate('admin-dashboard')}>Admin</button>
            </div>

            <div className="user-profile-badge">
              <div className="user-avatar manager-avatar">MR</div>
              <div className="user-details">
                <span className="user-name">Marcus Ray</span>
                <span className="user-role-label">Operations Manager</span>
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
            <div className="metric-icon-box bg-emerald">
              <TrendingUp size={22} />
            </div>
            <div>
              <p className="metric-label">Today's Dispensed Sales</p>
              <h3 className="metric-value">$4,820.50</h3>
              <span className="metric-sub text-secondary">+14.2% vs yesterday</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-box bg-blue">
              <Package size={22} />
            </div>
            <div>
              <p className="metric-label">Orders to Dispatch</p>
              <h3 className="metric-value">{orders.filter(o => o.status !== 'Dispatched').length} Pending</h3>
              <span className="metric-sub text-primary">2 Urgent priority</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-box bg-amber">
              <AlertTriangle size={22} />
            </div>
            <div>
              <p className="metric-label">Low Stock Alerts</p>
              <h3 className="metric-value">3 Medicines</h3>
              <span className="metric-sub text-amber">Immediate replenishment needed</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-box bg-purple">
              <Users size={22} />
            </div>
            <div>
              <p className="metric-label">On-Duty Staff</p>
              <h3 className="metric-value">6 Pharmacists</h3>
              <span className="metric-sub text-muted">2 couriers active</span>
            </div>
          </div>
        </div>

        {/* Order Fulfillment Queue */}
        <div className="dash-card mt-6">
          <div className="dash-card-header">
            <div className="card-header-title">
              <Package size={20} className="text-primary" />
              <h3>Pharmacy Fulfillment & Dispatch Queue</h3>
            </div>
            <span className="badge badge-outline">Live Queue: {orders.length} orders</span>
          </div>

          <div className="table-responsive">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Order #</th>
                  <th>Patient</th>
                  <th>Prescribed Items</th>
                  <th>Priority</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Quick Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="font-semibold text-primary">{order.id}</td>
                    <td className="font-semibold">{order.customer}</td>
                    <td className="text-muted">{order.items}</td>
                    <td>
                      <span className={`priority-pill ${order.priority === 'Urgent' ? 'priority-urgent' : 'priority-std'}`}>
                        {order.priority}
                      </span>
                    </td>
                    <td className="font-bold">{order.amount}</td>
                    <td>
                      <span className={`status-pill ${
                        order.status === 'Approved' ? 'status-delivered' :
                        order.status === 'Ready for Courier' ? 'status-delivery' :
                        'status-pending'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-button-group">
                        {order.status === 'Pending Review' && (
                          <button 
                            className="btn btn-primary btn-xs"
                            onClick={() => handleUpdateStatus(order.id, 'Approved')}
                          >
                            <Check size={14} /> Approve
                          </button>
                        )}
                        {order.status === 'Approved' && (
                          <button 
                            className="btn btn-secondary btn-xs"
                            onClick={() => handleUpdateStatus(order.id, 'Packing')}
                          >
                            <Package size={14} /> Pack
                          </button>
                        )}
                        {order.status === 'Packing' && (
                          <button 
                            className="btn btn-primary btn-xs"
                            onClick={() => handleUpdateStatus(order.id, 'Ready for Courier')}
                          >
                            <Truck size={14} /> Ready
                          </button>
                        )}
                        {order.status === 'Ready for Courier' && (
                          <button 
                            className="btn btn-outline btn-xs"
                            onClick={() => handleUpdateStatus(order.id, 'Dispatched')}
                          >
                            <CheckCircle2 size={14} /> Hand to Courier
                          </button>
                        )}
                        {order.status === 'Dispatched' && (
                          <span className="text-muted text-xs">Completed</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Medicine Inventory & Reorder Monitoring */}
        <div className="dash-card mt-6">
          <div className="dash-card-header">
            <div className="card-header-title">
              <AlertTriangle size={20} className="text-amber" />
              <h3>Stock Inventory & Auto-Replenishment</h3>
            </div>
            <button className="btn btn-outline btn-sm" onClick={() => alert('Exporting Inventory CSV...')}>
              Export Report
            </button>
          </div>

          <div className="table-responsive">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>SKU Code</th>
                  <th>Drug Name</th>
                  <th>Batch</th>
                  <th>Current Stock</th>
                  <th>Safety Min</th>
                  <th>Condition</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.id}>
                    <td className="font-mono text-muted">{item.id}</td>
                    <td className="font-semibold">{item.name}</td>
                    <td className="text-muted">{item.batch}</td>
                    <td>
                      <strong className={item.stock < item.min ? 'text-danger' : 'text-text'}>
                        {item.stock} units
                      </strong>
                    </td>
                    <td>{item.min} units</td>
                    <td>
                      <span className={`status-pill ${
                        item.status === 'Critical' ? 'status-critical' :
                        item.status === 'Low Stock' ? 'status-pending' :
                        'status-delivered'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <button 
                        className="btn btn-outline btn-xs"
                        onClick={() => handleReorder(item.id)}
                      >
                        <RefreshCw size={13} /> Reorder
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
