import React, { useState, useEffect } from 'react';
import { MapPin, CalendarHeart, Clock } from 'lucide-react';
import ScratchCard from './ScratchCard';
import './InvitationPage.css';
import './RevealDesign.css';
import './EventDetails.css';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown-wrapper">
      {Object.keys(timeLeft).length ? (
        <div className="timer-grid">
          <div className="time-box">
            <span className="time-value">{timeLeft.days}</span>
            <span className="time-label">Days</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.hours}</span>
            <span className="time-label">Hours</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.minutes}</span>
            <span className="time-label">Mins</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.seconds}</span>
            <span className="time-label">Secs</span>
          </div>
        </div>
      ) : (
        <span>It's Wedding Day! 🎉</span>
      )}
    </div>
  );
};

import coupleMain from './assets/couple-main.jpeg';

const ImageCarousel = () => {
  return (
    <div className="carousel-container" style={{ 
      position: 'relative', 
      width: '100%', 
      maxWidth: '450px', 
      margin: '0 auto 30px auto', 
      aspectRatio: '4/5', 
      overflow: 'hidden', 
      borderRadius: '20px', 
      maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
      WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)'
    }}>
      <img 
        src={coupleMain} 
        alt="Baskar and Mahalakshmi" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }} 
      />
    </div>
  );
};

const InvitationPage = () => {
  return (
    <div className="invitation-container">
      <div className="bg-pattern"></div>
      
      {/* Header Section */}
      <section className="section hero-section fade-in">
        <h2 className="script-title">Lokram <span className="script-ampersand">&</span> Mahalakshmi</h2>
        <p className="hero-quote">
          "With joyful hearts and the blessings of our families, we invite you to share in our wedding celebration."
        </p>
      </section>

      <div className="section-divider"><span className="divider-line"></span><span className="divider-icon">♥</span><span className="divider-line"></span></div>

      {/* Our Journey Section */}
      <section className="section journey-section" style={{ padding: '20px 20px 60px 20px' }}>
        <p className="scratch-hint">✦ Cherished moments ✦</p>
        <h2 className="section-title">A Love Story in Frame</h2>
        <div className="borderless-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ImageCarousel />
          <p className="quote-text" style={{ 
            marginTop: '10px', 
            textShadow: '0 2px 10px rgba(255,255,255,0.9), 0 0 20px rgba(255,255,255,0.8)',
            position: 'relative',
            zIndex: 2,
            padding: '0 20px'
          }}>
            "Two hearts, one promise, and a lifetime of love beginning with the grace of our families."
          </p>
        </div>
      </section>

      <div className="section-divider"><span className="divider-line"></span><span className="divider-icon">♥</span><span className="divider-line"></span></div>
      {/* Our Celebrations Section */}
      <section className="section celebrations-section">
        <p className="scratch-hint">✦ Save the Dates ✦</p>
        <h2 className="section-title">Our Celebrations</h2>
        <p className="scratch-hint" style={{ marginBottom: '25px' }}>✦ scratch the card to reveal ✦</p>
        
        <ScratchCard 
          coverText="Scratch Here"
          revealContent={
            <div className="reveal-new-design">
              <p className="reveal-month">NOV · 2026</p>
              <h1 className="reveal-date-number">13</h1>
              <h2 className="reveal-event-name">Wedding</h2>
              <div className="reveal-line"></div>
              <p className="reveal-venue">6:00 AM · LKN MAHAL, LATTERI</p>
            </div>
          }
        />
      </section>

      <div className="section-divider"><span className="divider-line"></span><span className="divider-icon">♥</span><span className="divider-line"></span></div>

      {/* ===== DAY 1 · NICHAYATHARTHAM & RECEPTION ===== */}
      <section className="section event-detail-section">
        <div className="event-block">
          <div className="day-banner">
            <div className="day-banner-line"></div>
            <span className="day-banner-text">DAY 1 · NICHAYATHARTHAM</span>
            <div className="day-banner-line"></div>
          </div>
          <div className="event-detail-card">
            <div className="event-stars">✦ · ✦</div>
            <h2 className="event-title-script">Nichayathartham</h2>

            <div className="event-info-row">
              <span className="event-info-icon">📅</span>
              <span className="event-info-label">DATE</span>
              <span className="event-info-dot">·</span>
              <span className="event-info-value">12 Nov 2026 · Thursday</span>
            </div>
            <div className="event-info-row">
              <span className="event-info-icon">🕒</span>
              <span className="event-info-label">TIME</span>
              <span className="event-info-dot">·</span>
              <span className="event-info-value">4:00 PM to 5:00 PM · Nichayathartham</span>
            </div>
            <div className="event-info-row">
              <span className="event-info-icon">🕡</span>
              <span className="event-info-label">TIME</span>
              <span className="event-info-dot">·</span>
              <span className="event-info-value">6:30 PM onwards · Reception</span>
            </div>
            <div className="event-info-row">
              <span className="event-info-icon">🏛️</span>
              <span className="event-info-label">VENUE</span>
              <span className="event-info-dot">·</span>
              <span className="event-info-value">LKN Mahal, Latteri - Gudiyatham Main Road, Latteri</span>
            </div>

            <p className="event-detail-quote">
              "With the blessings of our loved ones, we begin this beautiful journey of togetherness."
            </p>

            <p className="event-cta">✦ JOIN US FOR THIS JOYFUL BEGINNING ✦</p>
          </div>
        </div>
      </section>

      {/* ===== DAY 2 · WEDDING ===== */}
      <section className="section event-detail-section">
        <div className="event-block">
          <div className="day-banner">
            <div className="day-banner-line"></div>
            <span className="day-banner-text">DAY 2 · WEDDING</span>
            <div className="day-banner-line"></div>
          </div>
          <div className="event-detail-card">
            <div className="event-stars">✦ · ✦</div>
            <h2 className="event-title-script">Subhamuhurtham</h2>

            <div className="event-info-row">
              <span className="event-info-icon">📅</span>
              <span className="event-info-label">DATE</span>
              <span className="event-info-dot">·</span>
              <span className="event-info-value">13 Nov 2026 · Friday</span>
            </div>
            <div className="event-info-row">
              <span className="event-info-icon">🕘</span>
              <span className="event-info-label">TIME</span>
              <span className="event-info-dot">·</span>
              <span className="event-info-value">6:00 AM to 7:30 AM</span>
            </div>
            <div className="event-info-row">
              <span className="event-info-icon">🏛️</span>
              <span className="event-info-label">VENUE</span>
              <span className="event-info-dot">·</span>
              <span className="event-info-value">LKN Mahal, Latteri - Gudiyatham Main Road, Latteri</span>
            </div>

            <p className="event-detail-quote">
              "Today two souls become one — blessed by the sacred vows, bound by family, and carried forward by love."
            </p>

            <p className="event-cta">✦ WITNESS OUR MOST SACRED UNION ✦</p>
          </div>
        </div>
      </section>

      <div className="section-divider"><span className="divider-line"></span><span className="divider-icon">♥</span><span className="divider-line"></span></div>

      {/* The Venue Section */}
      <section className="section venue-section">
        <h2 className="section-title">The Venue</h2>
        <div className="card-container venue-card" style={{ flexDirection: 'column' }}>
          <div className="venue-details" style={{ width: '100%', textAlign: 'center' }}>
            <h3>LKN Mahal</h3>
            <p style={{ justifyContent: 'center' }}><MapPin size={16} className="inline-icon" /> Latteri - Gudiyatham Main Road, Latteri</p>
            <p className="features">Traditional venue · family blessings · warm celebrations</p>
            
            <iframe 
              src="https://maps.google.com/maps?q=LKN+Mahal,+Latteri+-+Gudiyatham+Main+Road,+Latteri&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="300" 
              style={{ border: 0, borderRadius: '12px', marginTop: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} 
              allowFullScreen="" 
              loading="lazy"
              title="Venue Map"
            ></iframe>
            
            <a 
              href="https://maps.google.com/maps?q=LKN+Mahal,+Latteri+-+Gudiyatham+Main+Road,+Latteri" 
              target="_blank" 
              rel="noreferrer"
              className="btn-primary"
              style={{ display: 'inline-block', marginTop: '25px' }}
            >
              ↗ Open in Google Maps App
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider"><span className="divider-line"></span><span className="divider-icon">♥</span><span className="divider-line"></span></div>

      {/* Counting Down Section */}
      <section className="section countdown-section">
        <h2 className="section-title">Counting Down</h2>
        <p className="countdown-desc">
          With joyful hearts and the blessings of our families, we invite you to witness the beginning of our beautiful forever.
        </p>
        <p className="event-date">
          <Clock size={16} className="inline-icon"/> 12 &amp; 13 · 11 · 2026 · LKN Mahal, Latteri
        </p>
        
        <CountdownTimer targetDate="2026-11-12T18:00:00" />
      </section>
      
      <footer className="footer">
        <div className="footer-hearts">♥ ♥ ♥</div>
        <p>Made with ❤️ Lokram & Mahalakshmi</p>
      </footer>
    </div>
  );
};

export default InvitationPage;
