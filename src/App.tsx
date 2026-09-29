import "./App.css";
import campusImage from "./assets/hccs-campus.jpg";
import logoImage from "./assets/hccs-logo2.png";

const alumniStories = [
  {
    name: "Maria Santos",
    batch: "Batch 2010",
    role: "Healthcare Professional",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    quote:
      "The values I learned at HCCSI continue to guide me in serving others today.",
  },
  {
    name: "Juan Dela Cruz",
    batch: "Batch 2005",
    role: "Business Professional",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    quote:
      "HCCSI gave me friendships, values, and memories that I continue to carry with me.",
  },
  {
    name: "Ana Reyes",
    batch: "Batch 1998",
    role: "Educator",
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80",
    quote:
      "Coming back to HCCSI always reminds me where my journey began.",
  },
];

const events = [
  {
    date: "15",
    month: "OCT",
    title: "Alumni Homecoming",
    description:
      "Reconnect with old friends and celebrate the HCCSI alumni community.",
  },
  {
    date: "08",
    month: "NOV",
    title: "Batch Reunion",
    description:
      "Bring your batch together and create new memories.",
  },
  {
    date: "20",
    month: "DEC",
    title: "Community Outreach",
    description:
      "Continue the spirit of service by giving back to the community.",
  },
];

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="container nav-content">
          <a href="#home" className="brand">
            <img src={logoImage} alt="HCCSI logo" className="brand-mark" />
            <div>
              <span className="brand-title">HCCSI</span>
              <span className="brand-subtitle">ALUMNI ASSOCIATION</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#stories">Alumni Stories</a>
            <a href="#events">Events</a>
            <a href="#legacy">Our Legacy</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <a href="#member-page" className="nav-button nav-button-portal">Member Portal</a>
            <a href="#join" className="nav-button">Join Us</a>
          </div>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="hero"
          style={{ backgroundImage: `linear-gradient(90deg, rgba(4,39,27,.96), rgba(4,39,27,.65)), url(${campusImage})` }}
        >
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <div className="hero-badge">HOLY CROSS COLLEGE OF SASA, INC.</div>
            <h1>
              One Community.
              <br />
              <span>One Legacy.</span>
            </h1>
            <p>
              Connecting generations of HCCSI alumni through faith, friendship,
              service, and a shared commitment to our alma mater.
            </p>
            <div className="hero-buttons">
              <a href="#join" className="button button-primary">
                Join the Alumni Association
              </a>
              <a href="#about" className="button button-outline">
                Discover Our Story
              </a>
            </div>
            <div className="hero-tagline">
              CONNECT. SERVE. GIVE BACK
            </div>
          </div>
        </section>

        <section id="about" className="intro section">
          <div className="container intro-grid">
            <div>
              <span className="section-label">OUR ALUMNI. OUR LEGACY.</span>
              <h2>The journey doesn't end<br />at graduation.</h2>
              <p>
                The HCCSI Alumni Association connects graduates from different
                generations and keeps the spirit of Holy Cross College of Sasa
                alive beyond the classroom.
              </p>
              <p>
                Through meaningful connections, alumni activities, community
                service, and opportunities to give back, we continue to build
                a stronger HCCSI community.
              </p>
              <a href="#join" className="text-link">
                Become part of our community →
              </a>
            </div>

            <div className="values-card">
              <div className="values-header">
                <span>THE HCCSI WAY</span>
                <h3>Faith. Love. Service. Integrity.</h3>
              </div>
              <div className="values-grid">
                <div className="value"><div className="value-number">01</div><h4>Faith</h4><p>Living with purpose and trust.</p></div>
                <div className="value"><div className="value-number">02</div><h4>Love</h4><p>Building meaningful relationships.</p></div>
                <div className="value"><div className="value-number">03</div><h4>Service</h4><p>Giving back to our community.</p></div>
                <div className="value"><div className="value-number">04</div><h4>Integrity</h4><p>Doing what is right.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container stats-grid">
            <div className="stat"><strong>1966</strong><span>Our Journey Began</span></div>
            <div className="stat"><strong>∞</strong><span>A Legacy That Continues</span></div>
            <div className="stat"><strong>HCCSI</strong><span>One Alma Mater</span></div>
            <div className="stat"><strong>1</strong><span>United Community</span></div>
          </div>
        </section>

        <section id="stories" className="section stories">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">ALUMNI STORIES</span>
                <h2>Where are they now?</h2>
              </div>
              <p>
                HCCSI alumni continue to make a difference in their families,
                professions, communities, and beyond.
              </p>
            </div>

            <div className="stories-grid">
              {alumniStories.map((story) => (
                <article className="story-card" key={story.name}>
                  <div className="story-image">
                    <img src={story.image} alt={story.name} />
                  </div>
                  <div className="story-content">
                    <span>{story.batch}</span>
                    <h3>{story.name}</h3>
                    <p className="story-role">{story.role}</p>
                    <blockquote>"{story.quote}"</blockquote>
                    <a href="#join">Read Story →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="events section">
          <div className="container">
            <div className="section-heading light">
              <div>
                <span className="section-label">GET CONNECTED</span>
                <h2>Connect. Celebrate. Reconnect.</h2>
              </div>
              <p>
                Stay connected with fellow HCCSI alumni through activities
                and community events.
              </p>
            </div>

            <div className="events-grid">
              {events.map((event) => (
                <article className="event-card" key={event.title}>
                  <div className="event-date">
                    <strong>{event.date}</strong>
                    <span>{event.month}</span>
                  </div>
                  <div>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <a href="#join">Learn More →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section achievements">
          <div className="container">
            <div className="center-heading">
              <span className="section-label">HCCSIANS MAKING A DIFFERENCE</span>
              <h2>From the halls of HCCSI<br />to the world.</h2>
              <p>
                Our alumni carry the HCCSI spirit into different professions
                and communities.
              </p>
            </div>

            <div className="achievement-grid">
              <div className="achievement"><span>01</span><h3>Education</h3><p>Teachers, professors, and educational leaders.</p></div>
              <div className="achievement"><span>02</span><h3>Healthcare</h3><p>Professionals dedicated to caring for others.</p></div>
              <div className="achievement"><span>03</span><h3>Business</h3><p>Entrepreneurs and professionals creating impact.</p></div>
              <div className="achievement"><span>04</span><h3>Public Service</h3><p>HCCSI alumni serving their communities.</p></div>
            </div>
          </div>
        </section>

        <section id="legacy" className="legacy">
          <div className="legacy-pattern"></div>
          <div className="container legacy-content">
            <span className="legacy-cross">✚</span>
            <span className="section-label">OUR IDENTITY</span>
            <h2>Crusaders in Green</h2>
            <div className="legacy-line"></div>
            <p className="legacy-quote">"With This Sign, Conquer."</p>
              <p className="legacy-description">
              Wherever life takes us, we carry the values, memories, and
              friendships formed at Holy Cross College of Sasa.
            </p>
            <div className="legacy-values">
              <span>FAITH</span><span>LOVE</span><span>SERVICE</span><span>INTEGRITY</span>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">CONTACT &amp; LOCATION</span>
                <h2>Stay connected with HCCSI.</h2>
              </div>
              <p>
                Visit the campus, reach out for inquiries, and stay updated on the latest happenings and community news.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-card contact-details">
                <ul className="contact-list">
                  <li>
                    <span className="contact-label">Address:</span>
                    <span>Km. 9, Sasa, Davao City 8000, Philippines</span>
                  </li>
                  <li>
                    <span className="contact-label">Landline:</span>
                    <span>
                      <a href="tel:+62822343385">(082) 234-3385</a> / <a href="tel:+62822340857">(082) 234-0857</a>
                    </span>
                  </li>
                  <li>
                    <span className="contact-label">Mobile:</span>
                    <span>
                      <a href="tel:+639518002244">0951-800-2244</a>
                    </span>
                  </li>
                  <li>
                    <span className="contact-label">Email:</span>
                    <span>
                      <a href="mailto:hccsasa66@hccsi.edu.ph">hccsasa66@hccsi.edu.ph</a>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="contact-card">
                <h3>Official Links</h3>
                <ul className="external-links">
                  <li>
                    <a href="https://hccsi.edu.ph/" target="_blank" rel="noreferrer">
                      Official Website
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/holycrosscollegeofsasa/" target="_blank" rel="noreferrer">
                      Holy Cross College of Sasa Facebook Page
                    </a>
                  </li>
                  <li>
                    <a href="https://en.wikipedia.org/wiki/Holy_Cross_College_of_Sasa" target="_blank" rel="noreferrer">
                      Wikipedia Holy Cross College of Sasa page
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="join-section">
          <div className="container join-content">
            <span className="section-label">STAY CONNECTED</span>
            <h2>Your HCCSI journey<br />didn't end at graduation.</h2>
            <p>
              Continue the legacy. Reconnect with fellow HCCSI alumni. Serve your
              community. Give back to the school that helped shape you.
            </p>
            <a href="mailto:alumni@example.com" className="button button-white">
              Join the Alumni Association
            </a>
          </div>
        </section>

        <section id="member-page" className="member-portal section">
          <div className="container member-portal-content">
            <span className="section-label">HCCSI MEMBERS</span>
            <h2>Member Portal</h2>
            <p>
              Member portal access is being prepared. For membership assistance,
              contact the Holy Cross College of Sasa office.
            </p>
            <a href="mailto:hccsasa66@hccsi.edu.ph" className="button button-primary">
              Contact HCCSI
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <img src={logoImage} alt="HCCSI logo" className="brand-mark" />
              <div>
                <span className="brand-title">HCCSI</span>
                <span className="brand-subtitle">ALUMNI ASSOCIATION</span>
              </div>
            </div>
            <p>
              Connecting generations of HCCSI alumni and continuing the legacy of
              Holy Cross College of Sasa.
            </p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#stories">Alumni Stories</a>
            <a href="#events">Events</a>
          </div>

          <div className="footer-column">
            <h4>Get Involved</h4>
            <a href="#join">Join Us</a>
            <a href="#join">Volunteer</a>
            <a href="#join">Mentorship</a>
            <a href="#join">Give Back</a>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <p>Holy Cross College of Sasa, Inc.</p>
            <p>Km. 9, Sasa, Davao City 8000, Philippines</p>
            <p>
              <a href="tel:+62822343385">(082) 234-3385</a>
            </p>
            <p>
              <a href="mailto:hccsasa66@hccsi.edu.ph">hccsasa66@hccsi.edu.ph</a>
            </p>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 HCCSI Alumni Association</span>
          <span>Holy Cross College of Sasa, Inc.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
