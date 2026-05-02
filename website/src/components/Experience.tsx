import { useState, useEffect } from 'react';
import { experiences } from '../data';
import type { Experience as ExperienceType } from '../types';

const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Use matchMedia plus mobile UA detection so phones stay in mobile view reliably.
    const mobileUA = /iPhone|Android.*Mobile|Mobile|iPad|iPod/.test(navigator.userAgent);
    const mq = window.matchMedia('(max-width: 600px)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches || mobileUA);
    };
    handler(mq);
    if (mq.addEventListener) {
      mq.addEventListener('change', handler as any);
      return () => mq.removeEventListener('change', handler as any);
    } else {
      mq.addListener(handler as any);
      return () => mq.removeListener(handler as any);
    }
  }, []);

  useEffect(() => {
    if (isMobile) {
      setExpandedRows(new Set(experiences.map(e => e.id)));
    } else {
      setExpandedRows(new Set());
    }
  }, [isMobile]);

  const toggleRow = (id: string) => {
    if (isMobile) return;
    setExpandedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section id="work" style={{ paddingTop: 0 }}>
      <div className="sql-editor">
        <span className="sql-keyword">SELECT</span> <span className="sql-star">*</span>{' '}
        <span className="sql-keyword">FROM</span> <span className="sql-table">philemon_lam.experience</span>;<span className="cursor"></span>
      </div>

      <div className="exp-wrap">
        <div className="exp-table-header">
          <div className="exp-table-name">
            <svg viewBox="0 0 16 16">
              <rect x="1" y="3" width="14" height="10" rx="2"/>
              <line x1="1" y1="7" x2="15" y2="7"/>
              <line x1="5" y1="7" x2="5" y2="13"/>
            </svg>
            <span>philemon_lam.experience</span>
          </div>
          <span className="exp-row-count">{experiences.length} rows</span>
        </div>

        <table>
          <colgroup>
            <col className="c-key" />
            <col className="c-company" />
            <col className="c-role" />
            <col className="c-type" />
            <col className="c-loc" />
          </colgroup>
          <thead>
            <tr>
              <th>key</th>
              <th>company</th>
              <th>role</th>
              <th>type</th>
              <th>location</th>
            </tr>
          </thead>
          <tbody>
            {experiences.map((exp: ExperienceType) => (
              <>
                <tr key={exp.id} className={`main-row ${expandedRows.has(exp.id) ? 'open' : ''}`} onClick={() => toggleRow(exp.id)} style={{ cursor: 'pointer' }}>
                  <td className="td-key">
                    <span className={`key-badge ${exp.key === 'PK' ? 'pk' : 'fk'}`}>{exp.key}</span>
                  </td>
                  <td>
                    <span className="company-name">{exp.company}</span>
                    <span className="company-period">{exp.period}</span>
                  </td>
                  <td className="role-text">{exp.role}</td>
                  <td>{exp.type}</td>
                  <td className="td-location">
                    <span>{exp.location}</span>
                    <button className="expand-btn" aria-label="Expand details">
                      <span className="chevron">▾</span>
                    </button>
                  </td>
                </tr>
                <tr key={`detail-${exp.id}`} className="detail-row">
                  <td colSpan={5}>
                    <div className={`detail-inner ${expandedRows.has(exp.id) ? 'open' : ''}`}>
                      <div className="about-box">
                        <div className="company-logo">
                          <img src={exp.logo} alt={`${exp.company} Logo`} />
                        </div>
                        <div className="about-content">
                          <div className="about-label">{exp.details.aboutLabel}</div>
                          <p className="about-text">{exp.details.about}</p>
                          <div className="about-label">Role Overview</div>
                          <p className="about-text">{exp.details.roleOverview}</p>
                          <div className="about-label">Software & Tools</div>
                          <p className="stack-badge">{exp.details.tools}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>

      <div className="click-hint">
        <span>Click any row to expand details, more to come soon!</span>
      </div>
    </section>
  );
};

export default Experience;