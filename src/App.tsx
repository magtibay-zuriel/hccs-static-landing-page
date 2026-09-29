import { useEffect, useState } from "react";
import "./App.css";
import campusImage from "./assets/hccs-campus.jpg";
import logoImage from "./assets/hccsi-alumni-logo.png";

const alumniStories = [
  {
    id: "maria-santos",
    name: "Maria Santos",
    batch: "Batch 2010",
    role: "Healthcare Professional",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    quote:
      "The values I learned at HCCSI continue to guide me in serving others today.",
  },
  {
    id: "juan-dela-cruz",
    name: "Juan Dela Cruz",
    batch: "Batch 2005",
    role: "Business Professional",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    quote:
      "HCCSI gave me friendships, values, and memories that I continue to carry with me.",
  },
  {
    id: "ana-reyes",
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
    id: "alumni-homecoming",
    date: "15",
    month: "OCT",
    title: "Alumni Homecoming",
    description:
      "Reconnect with old friends and celebrate the HCCSI alumni community.",
    overview:
      "Come together with fellow graduates for a homecoming centered on reconnecting, celebrating shared memories, and strengthening the HCCSI alumni community.",
    emailSubject: "Alumni Homecoming details",
  },
  {
    id: "batch-reunion",
    date: "08",
    month: "NOV",
    title: "Batch Reunion",
    description:
      "Bring your batch together and create new memories.",
    overview:
      "Gather with your former classmates, catch up across the years, and make new memories as a batch.",
    emailSubject: "Batch Reunion details",
  },
  {
    id: "community-outreach",
    date: "20",
    month: "DEC",
    title: "Community Outreach",
    description:
      "Continue the spirit of service by giving back to the community.",
    overview:
      "Take part in the HCCSI spirit of service through an opportunity to give back to the community alongside fellow alumni.",
    emailSubject: "Community Outreach details",
  },
];

function getCurrentRoute() {
  const hash = window.location.hash;
  return hash.startsWith("#/") ? hash.slice(1).replace(/\/$/, "") || "/" : "/";
}

function App() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(getCurrentRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getCurrentRoute());
      setIsNavigationOpen(false);

      const hash = window.location.hash;
      if (hash && !hash.startsWith("#/")) {
        requestAnimationFrame(() => {
          document.getElementById(hash.slice(1))?.scrollIntoView();
        });
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="app">
      <header className="navbar">
        <div className="container nav-content">
          <a href="#/" className="brand">
            <img src={logoImage} alt="HCCSI logo" className="brand-mark" />
            <div>
              <span className="brand-title">HCCSI</span>
              <span className="brand-subtitle">ALUMNI ASSOCIATION</span>
            </div>
          </a>

          <nav
            id="site-navigation"
            className={`nav-links${isNavigationOpen ? " nav-links-open" : ""}`}
          >
            <a href="#/" onClick={() => setIsNavigationOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsNavigationOpen(false)}>About</a>
            <a href="#/stories" onClick={() => setIsNavigationOpen(false)}>Alumni Stories</a>
            <a href="#/events" onClick={() => setIsNavigationOpen(false)}>Events</a>
            <a href="#legacy" onClick={() => setIsNavigationOpen(false)}>Our Legacy</a>
            <a href="#contact" onClick={() => setIsNavigationOpen(false)}>Contact</a>
          </nav>

          <button
            type="button"
            className="nav-toggle"
            aria-label={isNavigationOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isNavigationOpen}
            aria-controls="site-navigation"
            onClick={() => setIsNavigationOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className="nav-actions">
            <a href="#/member-page" className="nav-button nav-button-portal">Member Portal</a>
            <a href="#join" className="nav-button">Join Us</a>
          </div>
        </div>
      </header>

        <main>
          {currentRoute === "/" ? (
            <>
        <section
          id="home"
          className="hero"
          style={{ backgroundImage: `linear-gradient(90deg, rgba(4,39,27,.96), rgba(4,39,27,.65)), url(${campusImage})` }}
        >
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <div className="hero-badge">HOLY CROSS COLLEGE OF SASA, INC.</div>
            <h1>
              CONNECT. SERVE.
              <br />
              <span>GIVE BACK.</span>
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
                <a href="#/stories" className="text-link">Browse all stories →</a>
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
                    <a href={`#/stories/${story.id}`} aria-label={`Read ${story.name}'s story`}>
                      <img src={story.image} alt={story.name} />
                    </a>
                  </div>
                  <div className="story-content">
                    <span>{story.batch}</span>
                    <h3><a href={`#/stories/${story.id}`}>{story.name}</a></h3>
                    <p className="story-role">{story.role}</p>
                    <blockquote>"{story.quote}"</blockquote>
                      <a href={`#/stories/${story.id}`}>Read Story →</a>
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
                <a href="#/events" className="text-link events-all-link">Browse all events →</a>
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
                    <h3><a href={`#/events/${event.id}`}>{event.title}</a></h3>
                    <p>{event.description}</p>
                    <a href={`#/events/${event.id}`}>Learn More →</a>
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

            </>
          ) : currentRoute === "/member-page" ? (
            <MemberPortalPage />
          ) : currentRoute === "/stories" ? (
            <StoriesPage />
          ) : currentRoute.startsWith("/stories/") ? (
            <StoryDetailPage story={alumniStories.find((story) => story.id === currentRoute.split("/")[2])} />
          ) : currentRoute === "/events" ? (
            <EventsPage />
          ) : currentRoute.startsWith("/events/") ? (
            <EventDetailPage event={events.find((event) => event.id === currentRoute.split("/")[2])} />
          ) : (
            <NotFoundPage />
          )}
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
            <a href="#/">Home</a>
            <a href="#about">About</a>
            <a href="#/stories">Alumni Stories</a>
            <a href="#/events">Events</a>
          </div>

          <div className="footer-column">
            <h4>Get Involved</h4>
            <a href="#/member-page">Member Portal</a>
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

function MemberPortalPage() {
  return (
    <section className="section standalone-page member-portal-page">
      <div className="container standalone-content">
        <a href="#/" className="back-link">← Back to home</a>
        <span className="section-label">HCCSI MEMBERS</span>
        <h1>Member Portal</h1>
        <p className="standalone-lead">
          A dedicated online space for HCCSI alumni is being prepared.
        </p>
        <div className="portal-preview">
          <span className="portal-preview-label">MEMBER ACCESS</span>
          <h2>Welcome, HCCSI alumni</h2>
          <p>
            Portal sign-in and member services will appear here when the alumni
            account system is ready. For membership assistance in the meantime,
            contact the college office.
          </p>
          <a href="mailto:hccsasa66@hccsi.edu.ph" className="button button-green">
            Contact HCCSI
          </a>
        </div>
        <div className="portal-shortcuts">
          <a href="#/stories">Explore alumni stories <span>→</span></a>
          <a href="#/events">Browse upcoming events <span>→</span></a>
        </div>
      </div>
    </section>
  );
}

function StoriesPage() {
  return (
    <section className="section standalone-page directory-page">
      <div className="container">
        <a href="#/" className="back-link">← Back to home</a>
        <div className="section-heading">
          <div>
            <span className="section-label">HCCSI ALUMNI</span>
            <h1>Alumni Stories</h1>
          </div>
          <p>Meet HCCSI alumni carrying the values of their school into their communities and professions.</p>
        </div>
        <div className="stories-grid">
          {alumniStories.map((story) => (
            <article className="story-card" key={story.id}>
              <div className="story-image">
                <a href={`#/stories/${story.id}`} aria-label={`Read ${story.name}'s story`}>
                  <img src={story.image} alt={story.name} />
                </a>
              </div>
              <div className="story-content">
                <span>{story.batch}</span>
                <h3><a href={`#/stories/${story.id}`}>{story.name}</a></h3>
                <p className="story-role">{story.role}</p>
                <blockquote>"{story.quote}"</blockquote>
                <a href={`#/stories/${story.id}`}>Read Story →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryDetailPage({ story }: { story: (typeof alumniStories)[number] | undefined }) {
  if (!story) return <NotFoundPage />;

  return (
    <section className="section standalone-page detail-page">
      <div className="container">
        <a href="#/stories" className="back-link">← All alumni stories</a>
        <article className="story-detail">
          <img src={story.image} alt={story.name} className="story-detail-image" />
          <div className="story-detail-content">
            <span className="section-label">{story.batch}</span>
            <h1>{story.name}</h1>
            <p className="story-role">{story.role}</p>
            <blockquote>"{story.quote}"</blockquote>
            <p>
              HCCSI alumni continue to connect, serve, and give back in the
              places where life and work take them. This story is part of the
              growing HCCSI alumni community.
            </p>
            <a href="#/stories" className="button button-green">Explore more stories</a>
          </div>
        </article>
      </div>
    </section>
  );
}

function EventsPage() {
  return (
    <section className="section standalone-page events-directory">
      <div className="container">
        <a href="#/" className="back-link">← Back to home</a>
        <div className="section-heading light">
          <div>
            <span className="section-label">HCCSI ALUMNI COMMUNITY</span>
            <h1>Events</h1>
          </div>
          <p>Connect with fellow HCCSI alumni through reunions, homecoming, and service.</p>
        </div>
        <div className="events-grid">
          {events.map((event) => (
            <article className="event-card" key={event.id}>
              <div className="event-date">
                <strong>{event.date}</strong>
                <span>{event.month}</span>
              </div>
              <div>
                <h3><a href={`#/events/${event.id}`}>{event.title}</a></h3>
                <p>{event.description}</p>
                <a href={`#/events/${event.id}`}>Event details →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventDetailPage({ event }: { event: (typeof events)[number] | undefined }) {
  if (!event) return <NotFoundPage />;

  return (
    <section className="section standalone-page event-detail-page">
      <div className="container standalone-content">
        <a href="#/events" className="back-link">← All events</a>
        <span className="section-label">HCCSI ALUMNI EVENT</span>
        <div className="event-detail-heading">
          <div className="event-detail-date">
            <strong>{event.date}</strong>
            <span>{event.month}</span>
          </div>
          <div>
            <span className="section-label">HCCSI ALUMNI EVENT</span>
            <h1>{event.title}</h1>
            <p className="standalone-lead">{event.description}</p>
          </div>
        </div>
        <div className="event-detail-grid">
          <article className="event-detail-overview">
            <span className="section-label">ABOUT THIS EVENT</span>
            <h2>Connect with the HCCSI community</h2>
            <p>{event.overview}</p>
            <a
              href={`mailto:hccsasa66@hccsi.edu.ph?subject=${encodeURIComponent(event.emailSubject)}`}
              className="button button-green"
            >
              Ask about this event
            </a>
          </article>
          <aside className="event-detail-note">
            <h2>Event information</h2>
            <dl className="event-info-list">
              <div><dt>Date</dt><dd>{event.month} {event.date}</dd></div>
              <div><dt>Time</dt><dd>Contact the alumni office</dd></div>
              <div><dt>Venue</dt><dd>Contact the alumni office</dd></div>
              <div><dt>Registration</dt><dd>Contact the alumni office</dd></div>
            </dl>
            <p className="event-info-caption">
              Time, venue, and registration information have not been provided yet.
            </p>
            <a href="mailto:hccsasa66@hccsi.edu.ph" className="event-contact-link">
              hccsasa66@hccsi.edu.ph
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="section standalone-page">
      <div className="container standalone-content">
        <span className="section-label">HCCSI ALUMNI ASSOCIATION</span>
        <h1>Page not found</h1>
        <p className="standalone-lead">That page may have moved or is not available.</p>
        <a href="#/" className="button button-green">Return home</a>
      </div>
    </section>
  );
}

export default App;
