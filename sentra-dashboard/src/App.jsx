import { useState, useEffect } from 'react';
import './App.css';
import sentraIcon from './assets/Sentra Icon.svg';
import sentraFooterIcon from './assets/Sentra-footer-icon.svg';
import sentraUser from './assets/user.svg';
import note from './assets/note.svg';
import aiIcon from './assets/ai-icon.svg';

import greatMood from './assets/mood-great.svg';
import goodMood from './assets/mood-good.svg';
import okayMood from './assets/mood-okay.svg';
import sadMood from './assets/mood-sad.svg';
import stressMood from './assets/mood-stress.svg';

import great from './assets/chara-great.svg';
import good from './assets/chara-good.svg';
import okay from './assets/chara-okay.svg';
import sad from './assets/chara-sad.svg';
import stress from './assets/chara-stress.svg';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const [selectedMood, setSelectedMood] = useState('Great');
  const [isChartReady, setIsChartReady] = useState(false);

  useEffect(() => {
    setIsChartReady(true);
  }, []);

  const moods = [
    { id: 'Great', img: greatMood },
    { id: 'Good', img: goodMood },
    { id: 'Okay', img: okayMood },
    { id: 'Sad', img: sadMood },
    { id: 'Stress', img: stressMood },
  ];

  const pieData = {
    labels: ['Great', 'Good', 'Okay', 'Sad', 'Stress'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#04C4D9', '#00A384', '#FCC21B', '#F2624E', '#FE6B03'],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  const pieOptions = {
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
    responsive: true,
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const charas = [great, good, okay, sad, stress];

  return (

    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <nav className="dashboard-nav">
          <div className="brand-container">
            <img src={sentraIcon} className="brand-logo-img" alt="Sentra" />
          </div>
          <img src={sentraUser} className="user-profile-icon" alt="user" />
        </nav>

        <main className="main-content">

          {/* Input Mood */}
          
          <div className="input-mood-card">

            <div className="input-mood">
              <h3 className="section-label">What do you fell today?</h3>
              <div className="mood-carousel">
                {moods.map((m) => (
                  <img
                    key={m.id}
                    src={m.img}
                    className={`mood-card-img ${selectedMood === m.id ? 'active' : ''}`}
                    onClick={() => setSelectedMood(m.id)}
                    alt={m.id}
                  />
                ))}
              </div>

              <div className="divider-dashed"></div>

              <h3 className="section-label">Wanna write something?</h3>
              <textarea className="journal-input" placeholder="Type here..."></textarea>
              <button className="btn-submit">Submit</button>
            </div>

            <div className="calendar">
              <div className="calendar-header">
                <button className="nav-btn">{'<'}</button>
                <span className="month-tag">March 2026</span>
                <button className="nav-btn">{'>'}</button>
              </div>

              <div className="calendar-grid">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                  <div key={d} className="day-name">{d}</div>
                ))}
                {days.map(d => (
                  <div key={d} className={`day-box ${d === 17 ? 'today' : ''}`}>
                    <div className="day-top">
                      <span className="date-num">{d}</span>
                      {d <= 17 && <img src={note} className="doc-icon" alt="" />}
                    </div>

                    {d <= 17 && (
                      <img
                        src={d % 2 === 0 ? great : stress}
                        className="mood-emoji-calendar"
                        alt="mood"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>

        <div className="divider-dashed"></div>

         {/* Mood Summary */}

        <section className="mood-summary-section">

          <div className="main-combined-card">

            <div className="combined-header">
              <h5 className="main-panel-title">Mood Chart</h5>
              <a href="#" className="report-link">Report</a>
            </div>

            <div className="combined-content-wrapper">

              <div className="chart-grey-box">
                <div className="chart-inner-header">
                  <div className="filter-dropdown">
                    Last 7 Days
                  </div>
                </div>
                <div className="pie-render-area">
                  <div className="pie-size-fix">
                    {isChartReady && <Pie data={pieData} options={pieOptions} />}
                  </div>
                </div>
              </div>

              <div className="ai-white-box">
                <h6 className="ai-subtitle">Summarize AI</h6>
                <div className="ai-icon-center">
                  <img src={aiIcon} className="ai-icon-img" alt="AI Icon" />
                </div>
                <button className="btn-summarize">Summarize</button>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* Footer */}

      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-main-row">
            <div className="footer-brand-col">
              <img src={sentraFooterIcon} alt="Sentra" className="footer-logo-img" />
            </div>

            <div className="footer-links-grid">
              <div className="footer-col">
                <h5 className="footer-title">Resources</h5>
                <ul className="footer-links">
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Guides</a></li>
                  <li><a href="#">Webinars</a></li>
                  <li><a href="#">Knowledge Base</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h5 className="footer-title">Company</h5>
                <ul className="footer-links">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Partners</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h5 className="footer-title">Legal</h5>
                <ul className="footer-links">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms Of Service</a></li>
                  <li><a href="#">Cookie Policy</a></li>
                  <li><a href="#">Compliance</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright">© 2026 Sentra Inc. — All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;