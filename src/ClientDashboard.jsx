import React, { useState } from 'react';
import { 
  Pill, 
  ShoppingBag, 
  Clock, 
  Truck, 
  CheckCircle2, 
  FileText, 
  Calendar, 
  CreditCard, 
  ArrowRight, 
  LogOut, 
  User, 
  ShieldCheck, 
  PlusCircle, 
  Search,
  Bell,
  RefreshCw,
  PhoneCall
} from 'lucide-react';

export default function ClientDashboard({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [prescriptionUploaded, setPrescriptionUploaded] = useState(false);

  const medicines = [
    { id: 1, name: 'Amoxicillin 500mg', category: 'Antibiotics', price: '$12.50', inStock: true, rating: 4.8 },
    { id: 2, name: 'Paracetamol 650mg', category: 'Pain Relief', price: '$5.20', inStock: true, rating: 4.9 },
    { id: 3, name: 'Cetirizine 10mg', category: 'Allergy', price: '$8.00', inStock: true, rating: 4.7 },
    { id: 4, name: 'Vitamin C + Zinc', category: 'Supplements', price: '$14.99', inStock: true, rating: 5.0 },
  ];

  const recentOrders = [
    { id: 'MED-9402', date: 'Today, 2:15 PM', items: 'Amoxicillin 500mg x 2, Vitamin C', total: '$39.99', status: 'Out for Delivery' },
    { id: 'MED-8910', date: 'Sep 10, 2026', items: 'Paracetamol 650mg, Cetirizine', total: '$18.40', status: 'Delivered' },
    { id: 'MED-7734', date: 'Aug 28, 2026', items: 'Blood Pressure Monitor', total: '$45.00', status: 'Delivered' },
  ];

  return (
    <div className="dashboard-layout">
      {/* Top Navbar */}
      <header className="dash-header">
        <div className="dash-header-inner">
          <div className="dash-brand" onClick={() => onNavigate('home')}>
            <div className="dash-logo-icon">
              <Pill size={24} />
            </div>
            <div>
              <span className="dash-brand-name">MediConnect</span>
              <span className="role-tag client-tag">Client Portal</span>
            </div>
          </div>

          <div className="dash-nav-center">
            <button 
              className={`dash-nav-pill ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`dash-nav-pill ${activeTab === 'medicines' ? 'active' : ''}`}
              onClick={() => setActiveTab('medicines')}
            >
              Order Medicines
            </button>
            <button 
              className={`dash-nav-pill ${activeTab === 'prescriptions' ? 'active' : ''}`}
              onClick={() => setActiveTab('prescriptions')}
            >
              Prescriptions
            </button>
          </div>

          <div className="dash-user-actions">
            {/* Quick Role Jump for Testing */}
            <div className="quick-switch-dropdown">
              <span className="quick-switch-label">Switch View:</span>
              <button className="switch-chip" onClick={() => onNavigate('manager-dashboard')}>Manager</button>
              <button className="switch-chip" onClick={() => onNavigate('admin-dashboard')}>Admin</button>
            </div>

            <div className="user-profile-badge">
              <div className="user-avatar client-avatar">AC</div>
              <div className="user-details">
                <span className="user-name">Alex Carter</span>
                <span className="user-role-label">Verified Client</span>
              </div>
            </div>

            <button className="dash-logout-btn" onClick={() => onNavigate('login')} title="Sign Out">
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="dash-main container">
        {/* Welcome Banner */}
        <div className="welcome-banner">
          <div>
            <h1 className="welcome-title">Welcome back, Alex! 👋</h1>
            <p className="welcome-sub">
              Your prescription order <strong className="text-primary">#MED-9402</strong> is on the delivery route. Expected by 4:30 PM today.
            </p>
          </div>
          <div className="banner-cta">
            <button 
              className="btn btn-primary"
              onClick={() => {
                setPrescriptionUploaded(true);
                setTimeout(() => setPrescriptionUploaded(false), 4000);
              }}
            >
              <PlusCircle size={18} />
              {prescriptionUploaded ? 'Prescription Sent!' : 'Upload Prescription'}
            </button>
          </div>
        </div>

        {prescriptionUploaded && (
          <div className="alert-toast success">
            <CheckCircle2 size={20} />
            <span>Prescription received! A certified pharmacist is currently preparing your order.</span>
          </div>
        )}

        {/* Stats Grid */}
        <div className="dash-metrics-grid">
          <div className="metric-card">
            <div className="metric-icon-box bg-blue">
              <Truck size={22} />
            </div>
            <div>
              <p className="metric-label">Active Orders</p>
              <h3 className="metric-value">1 in Transit</h3>
              <span className="metric-sub text-primary">Arriving in ~45 mins</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-box bg-emerald">
              <FileText size={22} />
            </div>
            <div>
              <p className="metric-label">Active Prescriptions</p>
              <h3 className="metric-value">3 Registered</h3>
              <span className="metric-sub text-secondary">All doctor-verified</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-box bg-purple">
              <Calendar size={22} />
            </div>
            <div>
              <p className="metric-label">Next Doctor Consult</p>
              <h3 className="metric-value">Tomorrow</h3>
              <span className="metric-sub">10:30 AM with Dr. Jenkins</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-box bg-amber">
              <CreditCard size={22} />
            </div>
            <div>
              <p className="metric-label">Health Reward Points</p>
              <h3 className="metric-value">450 Pts</h3>
              <span className="metric-sub text-amber">$45.00 discount applicable</span>
            </div>
          </div>
        </div>

        {/* Two-Column Section: Live Order Tracking & Quick Refills */}
        <div className="dash-two-col">
          {/* Live Order Tracker */}
          <div className="dash-card">
            <div className="dash-card-header">
              <div className="card-header-title">
                <Truck size={20} className="text-primary" />
                <h3>Active Delivery: #MED-9402</h3>
              </div>
              <span className="badge badge-success">Out for Delivery</span>
            </div>

            <div className="order-progress-stepper">
              <div className="step-point completed">
                <div className="point-circle"><CheckCircle2 size={16} /></div>
                <span className="point-label">Order Placed</span>
                <span className="point-time">1:30 PM</span>
              </div>
              <div className="step-line completed"></div>
              <div className="step-point completed">
                <div className="point-circle"><CheckCircle2 size={16} /></div>
                <span className="point-label">Pharmacist Packed</span>
                <span className="point-time">1:55 PM</span>
              </div>
              <div className="step-line active"></div>
              <div className="step-point current">
                <div className="point-circle"><Truck size={16} /></div>
                <span className="point-label">On the Way</span>
                <span className="point-time">2:15 PM</span>
              </div>
              <div className="step-line"></div>
              <div className="step-point">
                <div className="point-circle"><CheckCircle2 size={16} /></div>
                <span className="point-label">Delivered</span>
                <span className="point-time">Est. 4:30 PM</span>
              </div>
            </div>

            <div className="order-items-summary">
              <div className="summary-item">
                <span>Amoxicillin 500mg (10 Caps) x 2</span>
                <span className="font-semibold">$25.00</span>
              </div>
              <div className="summary-item">
                <span>Vitamin C 1000mg Effervescent</span>
                <span className="font-semibold">$14.99</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-item total">
                <span>Total Paid</span>
                <span className="text-primary font-bold">$39.99</span>
              </div>
            </div>
          </div>

          {/* Quick Refill / Consultation Card */}
          <div className="dash-card">
            <div className="dash-card-header">
              <div className="card-header-title">
                <RefreshCw size={20} className="text-secondary" />
                <h3>Quick Prescriptions Refill</h3>
              </div>
              <span className="badge badge-outline">Auto-Refill Available</span>
            </div>

            <div className="refill-list">
              <div className="refill-item">
                <div>
                  <h4 className="refill-title">Metformin 500mg</h4>
                  <p className="refill-detail">Daily 1 Tab • 4 days remaining</p>
                </div>
                <button className="btn btn-outline btn-sm" onClick={() => alert('Refill request sent for Metformin!')}>
                  Refill Now
                </button>
              </div>

              <div className="refill-item">
                <div>
                  <h4 className="refill-title">Atorvastatin 20mg</h4>
                  <p className="refill-detail">Daily 1 Tab • 7 days remaining</p>
                </div>
                <button className="btn btn-outline btn-sm" onClick={() => alert('Refill request sent for Atorvastatin!')}>
                  Refill Now
                </button>
              </div>

              <div className="consult-promo-box">
                <div>
                  <h4>Need to consult a doctor?</h4>
                  <p>Certified physicians ready for instant video or chat call.</p>
                </div>
                <button className="btn btn-primary btn-sm" onClick={() => alert('Connecting to Doctor consultation...')}>
                  <PhoneCall size={14} />
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Catalog & Recent Orders */}
        <div className="dash-two-col mt-6">
          {/* Medicines Catalog */}
          <div className="dash-card">
            <div className="dash-card-header">
              <div className="card-header-title">
                <Pill size={20} className="text-primary" />
                <h3>Frequently Ordered Medicines</h3>
              </div>
              <button className="link-action" onClick={() => alert('Viewing all medicines')}>
                View All <ArrowRight size={14} />
              </button>
            </div>

            <div className="medicines-grid">
              {medicines.map((med) => (
                <div key={med.id} className="medicine-item-card">
                  <div className="med-icon"><Pill size={20} /></div>
                  <div className="med-info">
                    <h4>{med.name}</h4>
                    <span className="med-cat">{med.category}</span>
                    <div className="med-price-row">
                      <span className="med-price">{med.price}</span>
                      <button 
                        className="btn-add-cart"
                        onClick={() => alert(`Added ${med.name} to cart!`)}
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Orders Table */}
          <div className="dash-card">
            <div className="dash-card-header">
              <div className="card-header-title">
                <Clock size={20} className="text-muted" />
                <h3>Order History</h3>
              </div>
            </div>

            <div className="table-responsive">
              <table className="dash-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((ord) => (
                    <tr key={ord.id}>
                      <td className="font-semibold text-primary">{ord.id}</td>
                      <td>{ord.date}</td>
                      <td className="font-semibold">{ord.total}</td>
                      <td>
                        <span className={`status-pill ${ord.status === 'Out for Delivery' ? 'status-delivery' : 'status-delivered'}`}>
                          {ord.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
