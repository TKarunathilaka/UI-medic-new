import React, { useState } from 'react';
import { Pill, Mail, Lock, Eye, EyeOff, User, Phone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const perks = [
  'Track your orders in real time',
  'Upload prescriptions digitally',
  'Get exclusive member discounts',
  '24/7 pharmacist chat support',
];

export default function RegisterPage({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const set = (field) => (e) =>
    setForm(f => ({ ...f, [field]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Account created successfully! Please sign in.');
    onNavigate('login');
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
            Join <span className="gradient-text">thousands</span> of happy patients.
          </h2>
          <p className="auth-brand-sub">
            Create your free client account and enjoy a seamless healthcare experience.
          </p>
          <ul className="auth-perks">
            {perks.map(p => (
              <li key={p} className="auth-perk">
                <CheckCircle2 size={18} className="perk-icon" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Card */}
        <div className="auth-card">
          <div className="auth-card-header">
            <div className="register-badge">Client Registration</div>
            <h1 className="auth-title">Create your account</h1>
            <p className="auth-subtitle">Free forever — no credit card required</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="form-group">
              <label className="form-label" htmlFor="reg-name">Full name</label>
              <div className="input-wrapper">
                <span className="input-icon"><User size={18} /></span>
                <input
                  id="reg-name"
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                  value={form.fullName}
                  onChange={set('fullName')}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label" htmlFor="reg-email">Email address</label>
              <div className="input-wrapper">
                <span className="input-icon"><Mail size={18} /></span>
                <input
                  id="reg-email"
                  type="email"
                  className="form-input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set('email')}
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="form-group">
              <label className="form-label" htmlFor="reg-phone">Phone number</label>
              <div className="input-wrapper">
                <span className="input-icon"><Phone size={18} /></span>
                <input
                  id="reg-phone"
                  type="tel"
                  className="form-input"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={set('phone')}
                />
              </div>
            </div>

            {/* Two-column passwords */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="reg-password">Password</label>
                <div className="input-wrapper">
                  <span className="input-icon"><Lock size={18} /></span>
                  <input
                    id="reg-password"
                    type={showPassword ? 'text' : 'password'}
                    className="form-input"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={set('password')}
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    className="input-toggle"
                    onClick={() => setShowPassword(v => !v)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="reg-confirm">Confirm password</label>
                <div className="input-wrapper">
                  <span className="input-icon"><Lock size={18} /></span>
                  <input
                    id="reg-confirm"
                    type={showConfirm ? 'text' : 'password'}
                    className="form-input"
                    placeholder="••••••••"
                    value={form.confirmPassword}
                    onChange={set('confirmPassword')}
                    required
                  />
                  <button
                    type="button"
                    className="input-toggle"
                    onClick={() => setShowConfirm(v => !v)}
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms */}
            <label className="checkbox-label" htmlFor="reg-agree">
              <input
                id="reg-agree"
                type="checkbox"
                className="checkbox-input"
                checked={form.agree}
                onChange={set('agree')}
                required
              />
              <span>
                I agree to the{' '}
                <a href="#" className="form-link">Terms of Service</a>{' '}
                and{' '}
                <a href="#" className="form-link">Privacy Policy</a>
              </span>
            </label>

            <button id="register-submit" type="submit" className="btn btn-primary btn-full">
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="auth-footer-text">
            Already have an account?{' '}
            <button id="go-login" className="form-link-btn" onClick={() => onNavigate('login')}>
              Sign in
            </button>
          </p>

          <button
            id="register-back-home"
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
