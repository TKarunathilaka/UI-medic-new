import React, { useState } from 'react';
import { 
  Pill, 
  Search, 
  ShoppingBag, 
  User, 
  ShieldCheck, 
  Clock, 
  Truck, 
  Headset,
  ArrowRight,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import './index.css';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ClientDashboard from './ClientDashboard';
import ManagerDashboard from './ManagerDashboard';
import AdminDashboard from './AdminDashboard';

function App() {
  const [page, setPage] = useState('home');

  if (page === 'login')             return <LoginPage         onNavigate={setPage} />;
  if (page === 'register')          return <RegisterPage      onNavigate={setPage} />;
  if (page === 'client-dashboard')  return <ClientDashboard   onNavigate={setPage} />;
  if (page === 'manager-dashboard') return <ManagerDashboard  onNavigate={setPage} />;
  if (page === 'admin-dashboard')   return <AdminDashboard    onNavigate={setPage} />;

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container nav">
          <div className="logo">
            <Pill size={32} />
            <span>MediConnect</span>
          </div>
          
          <nav className="nav-links">
            <a href="#" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Medicines</a>
            <a href="#about" className="nav-link">Consult a Doctor</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          
          <div className="nav-actions">
            <button className="btn btn-outline" style={{ border: 'none' }}>
              <Search size={20} />
            </button>
            <button className="btn btn-outline" style={{ border: 'none' }}>
              <ShoppingBag size={20} />
            </button>
            <button id="nav-signin" className="btn btn-primary" onClick={() => setPage('login')}>
              <User size={18} />
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>
              Your Health, <br/>
              <span className="text-primary">Delivered with Care</span>
            </h1>
            <p>
              Order prescription medicines, health products, and get online doctor consultations from the comfort of your home. Fast, reliable, and 100% genuine.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">
                Upload Prescription
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-outline">
                <PhoneCall size={18} />
                Talk to Pharmacist
              </button>
            </div>
            
            <div className="mt-8" style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex' }}>
                <img src="https://i.pravatar.cc/100?img=1" alt="User" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid white' }} />
                <img src="https://i.pravatar.cc/100?img=2" alt="User" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid white', marginLeft: '-15px' }} />
                <img src="https://i.pravatar.cc/100?img=3" alt="User" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid white', marginLeft: '-15px' }} />
              </div>
              <p className="text-muted" style={{ margin: 0, fontSize: '0.875rem' }}>
                <span className="font-bold text-text">10k+</span> Happy Customers
              </p>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069&auto=format&fit=crop" 
              alt="Pharmacist preparing medicines" 
              className="hero-image"
              style={{ aspectRatio: '4/5' }}
            />
            
            <div className="glass-card" style={{ bottom: '2rem', right: '-2rem', left: 'auto', animationDelay: '1s' }}>
              <div className="glass-icon">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="font-bold">100% Genuine</h4>
                <p className="text-muted" style={{ fontSize: '0.875rem' }}>Certified Medicines</p>
              </div>
            </div>
            
            <div className="glass-card">
              <div className="glass-icon" style={{ background: 'var(--secondary)' }}>
                <Truck size={24} />
              </div>
              <div>
                <h4 className="font-bold">Fast Delivery</h4>
                <p className="text-muted" style={{ fontSize: '0.875rem' }}>Within 2 Hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="font-extrabold" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Choose MediConnect?</h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>We provide the best medical services for you and your family with top-notch quality and speed.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-bold mb-2">100% Secure</h3>
              <p className="text-muted">All our medicines are genuine and sourced directly from manufacturers.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--secondary)' }}>
                <Clock size={32} />
              </div>
              <h3 className="font-bold mb-2">24/7 Availability</h3>
              <p className="text-muted">Order your medicines anytime, day or night, through our platform.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                <Truck size={32} />
              </div>
              <h3 className="font-bold mb-2">Fast Delivery</h3>
              <p className="text-muted">Get your medicines delivered to your doorstep within hours.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899' }}>
                <Headset size={32} />
              </div>
              <h3 className="font-bold mb-2">Expert Support</h3>
              <p className="text-muted">Talk to our certified pharmacists for any medical queries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps" style={{ background: 'var(--background)' }}>
        <div className="container">
          <div className="text-center">
            <h2 className="font-extrabold" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How It Works</h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>Get your medicines in three simple steps.</p>
          </div>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="font-bold mb-2">Upload Prescription</h3>
              <p className="text-muted">Upload a clear photo of your valid doctor's prescription.</p>
            </div>
            
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="font-bold mb-2">Review & Confirm</h3>
              <p className="text-muted">Our pharmacists will review and create an order for you.</p>
            </div>
            
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="font-bold mb-2">Doorstep Delivery</h3>
              <p className="text-muted">Pay securely and receive your medicines at your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <Pill size={28} />
                <span>MediConnect</span>
              </div>
              <p className="footer-text">
                Your trusted partner for all healthcare needs. Providing genuine medicines with lightning-fast delivery.
              </p>
            </div>
            
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Medicines</a></li>
                <li><a href="#">Consultations</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Contact Us</h4>
              <ul>
                <li><a href="#">support@mediconnect.com</a></li>
                <li><a href="#">+1 (555) 123-4567</a></li>
                <li><a href="#">123 Health Ave, NY 10001</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} MediConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
