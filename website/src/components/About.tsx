import { Fragment, useEffect, useState } from 'react';
import { ideas } from '../ideas';
import type { Idea as IdeaType } from '../types';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 850);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return (
    <section id="about" style={{ paddingTop: 0 }}>
      <div className="sql-editor">
        <span className="sql-keyword">SELECT</span> <span className="sql-star">*</span>{' '}
        <span className="sql-keyword">FROM</span> <span className="sql-table">philemon_lam.about</span>;<span className="cursor"></span>
      </div>

      <div className="exp-wrap">
        <div className="exp-table-header">
          <div className="exp-table-name">
            <svg viewBox="0 0 16 16">
              <rect x="1" y="3" width="14" height="10" rx="2"/>
              <line x1="1" y1="7" x2="15" y2="7"/>
              <line x1="5" y1="7" x2="5" y2="13"/>
            </svg>
            <span>philemon_lam.about</span>
          </div>
          <span className="exp-row-count">{ideas.length} rows</span>
        </div>

        {isMobile ? (
          <div className="mobile-list">
            <div className="mobile-list-header">
              <span>name</span>
              <span>status</span>
            </div>
            {ideas.map((idea: IdeaType) => (
              <div key={idea.id} className="mobile-entry">
                <div className="mobile-row">
                  <div>
                    <span className="company-name">{idea.title}</span>
                  </div>
                  <div className="role-text">{idea.category}</div>
                </div>
                <div className="mobile-detail">
                  <div className="about-box about-page-box">
                    <div className="about-content">
                      <div className="about-label">ABOUT ME</div>
                      <p className="about-text">{idea.details.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
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
                <th>name</th>
                <th>status</th>
                <th>song_on_repeat</th>
                <th>current_show_of_choice</th>
              </tr>
            </thead>
            <tbody>
              {ideas.map((idea: IdeaType) => (
                <Fragment key={idea.id}>
                  <tr className="main-row open">
                    <td className="td-key">
                      <span className={`key-badge ${idea.key === 'PK' ? 'pk' : 'fk'}`}>{idea.key}</span>
                    </td>
                    <td>
                      <span className="company-name">{idea.title}</span>
                    </td>
                    <td className="role-text">{idea.category}</td>
                    <td>
                      <span>{idea.status}</span>
                    </td>
                    <td className="td-location">
                      <span>{idea.topic}</span>
                    </td>
                  </tr>
                  <tr key={`detail-${idea.id}`} className="detail-row">
                    <td colSpan={5}>
                      <div className="detail-inner open">
                        <div className="about-box about-page-box">
                          <div className="about-content">
                            <div className="about-label">ABOUT ME</div>
                            <p className="about-text">{idea.details.description}</p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default About;
