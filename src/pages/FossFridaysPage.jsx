import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegCalendarAlt, FaArrowRight, FaNewspaper } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { newsletters } from "../data/newsletters";
import "./FossFridaysPage.css";

function FossFridaysHero() {
  return (
    <section className="ff-hero">
      <motion.div
        className="ff-hero__inner"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow">// weekly dose of open source</span>
        <h1>FOSS Fridays</h1>
        <p className="ff-hero__subtitle">
          Every Alternate Friday, we break down an open-source project, tool, or bit of
          tech news — in a short newsletter. Pick an
          issue below to catch up.
        </p>
      </motion.div>
    </section>
  );
}

function IssueList() {
  const issuesNewestFirst = [...newsletters].reverse();

  return (
    <section className="ff-issues">
      <div className="section-head">
        <span className="eyebrow">// past issues</span>
        <h2>All Issues</h2>
      </div>

      <div className="ff-issues__list">
        {issuesNewestFirst.map((n, i) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
          >
            <Link to={`/fossfridays/${n.id}`} className="issue-card">
              <div className="issue-card__icon">
                <FaNewspaper size={20} />
              </div>

              <div className="issue-card__body">
                <div className="issue-card__top">
                  <span className="issue-card__issue">{n.issue}</span>
                  <span className="issue-card__date">
                    <FaRegCalendarAlt size={12} /> {n.date}
                  </span>
                </div>
                <h3 className="issue-card__title">{n.title}</h3>
                <p className="issue-card__summary">{n.summary}</p>
                {n.topics && n.topics.length > 0 && (
                  <div className="issue-card__topics">
                    {n.topics.map((t) => (
                      <span key={t} className="issue-card__topic">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="issue-card__cta">
                <span>Read issue</span>
                <FaArrowRight size={13} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function FossFridaysPage() {
  return (
    <div className="foss-fridays-page">
      <Navbar />
      <FossFridaysHero />
      <IssueList />
      <Footer />
    </div>
  );
}