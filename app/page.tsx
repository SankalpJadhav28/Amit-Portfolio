import MotionEffects from "../components/MotionEffects";

const asset = (name: string) => `/assets/${name}`;

export default function Home() {
  return (
    <>
      <MotionEffects />
      <div className="grain" />
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
      <header className="nav">
        <a className="wordmark" href="#top">
          AMYTH<span>®</span>
        </a>
        <nav>
          <a href="#approach">Approach</a>
          <a href="#proof">Proof</a>
          <a href="#reels">Reels</a>
        </nav>
        <a className="nav-cta" href="#contact">
          Apply for 1:1 <b>↗</b>
        </a>
      </header>
      <main id="top">
        <section className="hero hero-portrait">
          <p className="hero-status">
            <i /> AVAILABLE FOR 1:1 COACHING
          </p>
          <h1 className="hero-name">
            <span>AMIT</span>KUMAR
          </h1>
          <div className="hero-person">
            <img
              src={asset("AMIT-Hero.PNG")}
              alt="Amitkumar Yadav, strength and conditioning coach"
              style={{ objectFit: "contain", objectPosition: "center bottom" }}
            />
          </div>
          <div className="hero-intro">
            <p className="eyebrow dark">
              <i /> STRENGTH &amp; CONDITIONING COACH
            </p>
            <h2>
              BUILD A BODY
              <br />
              THAT <em>SHOWS UP.</em>
            </h2>
            <p>
              Private coaching for stronger training, better movement and a
              routine you can actually sustain.
            </p>
            <a className="hero-button" href="#contact">
              Apply for 1:1 <b>↗</b>
            </a>
          </div>
          <div className="hero-socials">
            <a
              href="https://www.instagram.com/iamitkuumar/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram <b>↗</b>
            </a>
            <a href="#reels">
              Training archive <b>↓</b>
            </a>
            <a href="#proof">
              Credentials <b>↓</b>
            </a>
          </div>
          <div className="hero-meta">
            <span>MUMBAI · INDIA</span>
            <span>AMYTH / PRIVATE COACHING</span>
          </div>
        </section>
        <section className="marquee">
          <div>
            PRIVATE COACHING <b>✦</b> STRUCTURE WITH SOUL <b>✦</b> OWN YOUR
            MOVEMENT <b>✦</b> PRIVATE COACHING <b>✦</b> STRUCTURE WITH SOUL{" "}
            <b>✦</b>
          </div>
        </section>
        <section className="approach section" id="approach">
          <p className="eyebrow dark">
            <i /> 01 / THE APPROACH
          </p>
          <div className="approach-grid">
            <h2>
              ONE COACH.
              <br />
              ONE <em>PLAN.</em>
              <br />
              NO NOISE.
            </h2>
            <div className="approach-text">
              <p>
                This is genuinely 1:1 work. Your training, feedback and progress
                are not passed through a template or lost in a group chat.
              </p>
              <p>
                I blend intelligent strength work with the freedom, control and
                play I’ve learned through breaking.
              </p>
              <a className="arrow-link" href="#contact">
                See if we fit <span>↗</span>
              </a>
            </div>
          </div>
          <div className="pillars">
            <article>
              <span>01</span>
              <h3>BUILD</h3>
              <p>
                Get genuinely stronger with progressive, focused programming.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>MOVE</h3>
              <p>Unlock range, coordination and confidence in your own body.</p>
            </article>
            <article>
              <span>03</span>
              <h3>ENDURE</h3>
              <p>Develop conditioning that carries into everything else.</p>
            </article>
          </div>
        </section>
        <section className="split-feature">
          <div className="feature-image reveal-image">
            <img
              src={asset("amit2.PNG")}
              alt="Placeholder for Amit training photo"
            />
          </div>
          <div className="feature-copy">
            <p className="eyebrow">
              <i /> MEET YOUR COACH
            </p>
            <h2>
              MEET
              <br />
              <em>AMYTH.</em>
            </h2>
            <p>
              Amitkumar Yadav is a Strength &amp; Conditioning certified coach,
              BAF graduate and lifelong b-boy. Amyth is the name behind coaching
              with structure, style and real movement intelligence.
            </p>
            <div className="credentials">
              <span>S&amp;C CERTIFIED</span>
              <span>BAF GRADUATE</span>
              <span>B-BOY / MOVER</span>
            </div>
          </div>
        </section>
        <section className="proof section" id="proof">
          <div className="section-head">
            <div>
              <p className="eyebrow dark">
                <i /> 02 / THE RECEIPTS
              </p>
              <h2>
                BUILT ON
                <br />
                <em>GOOD WORK.</em>
              </h2>
            </div>
            <p>
              Progress you can see, feel and own.
              <br />
              Real people, consistent effort.
            </p>
          </div>
          <div className="proof-grid">
            <div className="certificate certificate-photo">
              <img
                src={asset("certificate-placeholder.svg")}
                alt="Placeholder for Amit's strength and conditioning certificate"
              />
              <p>
                OFFICIAL
                <br />
                CERTIFICATION
              </p>
              <h3>
                STRENGTH
                <br />
                &amp; CONDITIONING
              </h3>
              <div className="seal">
                S&amp;C
                <br />
                <small>CERT.</small>
              </div>
              <span>AMYTH · QUALIFIED COACH</span>
            </div>
            <ResultCard
              image="amit client 1.jpeg"
              title={
                <>
                  CONSISTENCY
                  <br />
                  WINS.
                </>
              }
              note="CLIENT JOURNAL / 12 WEEKS"
            />
            <ResultCard
              image="amit client 3.jpeg"
              title={
                <>
                  SHOW UP.
                  <br />
                  LEVEL UP.
                </>
              }
              note="CLIENT JOURNAL / 8 WEEKS"
              compact
            />
          </div>
        </section>
        <section className="passion">
          <div className="passion-image reveal-image">
            <img
              src={asset("bboy.PNG")}
              alt="Placeholder for Amit's b-boy photo"
            />
          </div>
          <div className="passion-copy">
            <p className="eyebrow">
              <i /> OFF THE RACK
            </p>
            <h2>
              STREET
              <br />
              <em>ROOTS.</em>
            </h2>
            <p>
              Breaking taught me the value of repetition, courage and creative
              expression. It’s not separate from how I coach—it’s the pulse
              behind it.
            </p>
            <span className="big-type">B-BOY</span>
          </div>
        </section>
        <section className="reels" id="reels">
          <div className="reels-top">
            <div>
              <p className="eyebrow">
                <i /> 03 / WATCH THE WORK
              </p>
              <h2>
                THE <em>AMYTH</em>
                <br />
                ARCHIVE.
              </h2>
            </div>
            <a
              className="text-link"
              href="https://www.instagram.com/iamitkuumar/"
              target="_blank"
              rel="noreferrer"
            >
              View Instagram <span>↗</span>
            </a>
          </div>
          <p className="reels-intro">
            A glimpse inside the sessions: client work, training blocks,
            movement practice and the discipline behind the results.
          </p>
          <div className="reel-rail">
            <Reel
              image="intro-reel.jpeg"
              title="Who is Amyth?"
              note="01 / Intro"
            />{" "}
            <Reel
              image="client-session.jpeg"
              title="Private Session"
              note="02 / CLIENT WORK"
            />
            <Reel
              image="bboy-reel.jpeg"
              title="Move Different"
              note="03 / B-BOY PRACTICE"
            />
            <Reel
              image="stunt tutorial.jpeg"
              title="Tutorials"
              note="04 / LEARN TRICKS"
            />
          </div>
          <p className="rail-note">
            DRAG OR SCROLL THE ARCHIVE <span>→</span>
          </p>
        </section>
        <section className="stories section" id="stories">
          <p className="eyebrow dark">
            <i /> 04 / WORD ON THE FLOOR
          </p>
          <h2>
            THEY DID
            <br />
            THE <em>WORK.</em>
          </h2>
          <div className="testimonial-grid">
            <Testimonial
              quote="I stopped chasing random workouts and started training with a reason. I feel stronger in every part of life."
              name="AKASH M."
              note="STRENGTH COACHING · 6 MO"
            />
            <Testimonial
              quote="Amit knows when to push and when to scale. The confidence I’ve built is the real result."
              name="RIYA S."
              note="1:1 COACHING · 4 MO"
            />
            <Testimonial
              quote="No shortcuts, no fluff. Just a plan that made me want to stay consistent."
              name="ROHAN K."
              note="ONLINE COACHING · 3 MO"
            />
          </div>
        </section>
        <section className="contact" id="contact">
          <p className="eyebrow">
            <i /> 05 / YOUR TURN
          </p>
          <h2>
            LET’S MAKE
            <br />
            YOU <em>CAPABLE.</em>
          </h2>
          <p>
            Want coaching built around your actual life? Send Amyth a message
            and start the conversation.
          </p>
          <a
            className="contact-email"
            href="https://www.instagram.com/iamitkuumar/"
            target="_blank"
            rel="noreferrer"
          >
            @IAMITKUUMAR <span>↗</span>
          </a>
          <div className="contact-bottom">
            <span>AMITKUMAR YADAV · MUMBAI / 1:1 COACHING</span>
            <div>
              <a
                href="https://www.instagram.com/iamitkuumar/"
                target="_blank"
                rel="noreferrer"
              >
                INSTAGRAM ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <span>© 2026 AMYTH</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}

function ResultCard({
  image,
  title,
  note,
  compact = false,
}: {
  image: string;
  title: React.ReactNode;
  note: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`result-card reveal-image ${compact ? "result-two" : "result-one"}`}
    >
      <img src={asset(image)} alt="Placeholder for client training photo" />
      <div>
        <b>{title}</b>
        <span>{note}</span>
      </div>
    </div>
  );
}
function Reel({
  image,
  title,
  note,
}: {
  image: string;
  title: string;
  note: string;
}) {
  return (
    <a
      className="reel-card"
      href="https://www.instagram.com/iamitkuumar/"
      target="_blank"
      rel="noreferrer"
    >
      <img src={asset(image)} alt={`Placeholder for ${title} reel`} />
      <span className="play">▶</span>
      <div>
        <b>{title}</b>
        <small>{note}</small>
      </div>
    </a>
  );
}
function Testimonial({
  quote,
  name,
  note,
}: {
  quote: string;
  name: string;
  note: string;
}) {
  return (
    <figure>
      <blockquote>“{quote}”</blockquote>
      <figcaption>
        <span>{name}</span>
        <small>{note}</small>
      </figcaption>
    </figure>
  );
}
