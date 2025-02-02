import React from 'react';
import styles from '../styles/Writings.module.css';

const Writings = () => {
  const articles = [
    {
      title: "Escaping Oblivion",
      description: "2 AM thoughts on what purpose is, convoluted with my own personal experience with life.",
      date: "2024-09-19",
      slug: "oblivion-the-questions-of-your-20s-ec81935fd155"
    },
    {
      title: "Israel: A Divided Nation",
      description: "My perspective on the ongoing political situation in Israel amidst the political division.",
      date: "2023-10-29",
      slug: "a-divided-nation-may-unite-only-by-a-common-enemy-witnessing-israels-unification-amid-conflict-7a146188fbd8"
    }
    // https://medium.com/@shahafdan/oblivion-the-questions-of-your-20s-ec81935fd155
  ];

  return (
    <div id="writings" className={styles.writings}>
      <div className={styles.content}>
        <h2>My Writings</h2>
        <table className={styles.writingsTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr key={index}>
                <td>
                  <a 
                    href={`https://medium.com/@shahafdan/${article.slug}`}
                    className={styles.articleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </td>
                <td>{article.description}</td>
                <td>{new Date(article.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Writings;
