import React, { useState } from 'react';
import { Pill, Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, User, Briefcase } from 'lucide-react';

const roles = [
  { id: 'client',  label: 'Client',   icon: User,        desc: 'Order medicines & consult doctors' },
  { id: 'manager', label: 'Manager',  icon: Briefcase,   desc: 'Manage orders & operations' },
  { id: 'admin',   label: 'Admin',    icon: ShieldCheck, desc: 'Full system access & control' },
];

export default function LoginPage({ onNavigate }) {
  const [selectedRole, setSelectedRole] = useState('client');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signing in as ${selectedRole}…`);
  };

  return (
    <div className="auth-page">
      <div className="auth-blob auth-blob-1" />
      <div className="auth-blob auth-blob-2" />

      <div className="auth-wrapper">
        {/* Branding panel */}
        <div className="auth-branding">
          <button className="auth-brand-logo" onClick={() => onNavigate('home')}>
            <Pill size={40} />
            <span>MediConnect</span>
          </button>
          <h2 className="auth-brand-headline">
            Healthcare at your <span className="gradient-text">fingertips.</span>
          </h2>
          <p className="auth-brand-sub">
            Genuine medicines, expert consultations, and lightning-fast delivery — all in one platform.
          </p>
          <div className="auth-brand-badges">
            <div className="auth-badge"><ShieldCheck size={16} /> 100% Genuine</div>
            <div className="auth-badge"><Pill size={16} /> 50k+ Medicines</div>
          </div>
        </div>

        {/* Card */}
        <div className="auth-card">
          <div className="auth-card-header">
            <h1 className="auth-title">Welcome back</h1>
            <p className="auth-subtitle">Sign in to your MediConnect account</p>
          </div>

          {/* Role Selector */}
          <div className="role-selector">
            {roles.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                id={`role-${id}`}
                className={`role-btn${selectedRole === id ? ' role-btn-active' : ''}`}
                onClick={() => setSelectedRole(id)}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>
          <p className="role-desc">
            {roles.find(r => r.id === selectedRole)?.desc}
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="login-email">Email address</label>
              <div className="input-wrapper">
                <span className="input-icon"><Mail size={18} /></span>
                <input
                  id="login-email"
                  type="email"
                  className="form-input"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-label-row">
                <label className="form-label" htmlFor="login-password">Password</label>
                <a href="#" className="form-link">Forgot password?</a>
              </div>
              <div className="input-wrapper">
                <span className="input-icon"><Lock size={18} /></span>
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="input-toggle"
                  onClick={() => setShowPassword(v => !v)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button id="login-submit" type="submit" className="btn btn-primary btn-full">
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>

          {selectedRole === 'client' && (
            <p className="auth-footer-text">
              Don't have an account?{' '}
              <button id="go-register" className="form-link-btn" onClick={() => onNavigate('register')}>
                Create one
              </button>
            </p>
          )}

          <button
            id="back-home"
            className="auth-back-link"
            onClick={() => onNavigate('home')}
          >
            ← Back to home
          </button>
        </div>
      </div>
    </div>
  );
}
