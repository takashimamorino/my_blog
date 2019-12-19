import React from 'react'

import styles from './articleItem.module.scss'

type Props = {
  article: any
}

const ArticleItem: React.FC<Props> = ({ article }) => {
  //TODO: ここの処理まとめる
  let date = article.createdAt;
  date = new Date(date);
  const year = date.getFullYear();
  const month = date.getMonth();
  const dt = date.getDate();
  date_contents = `${year}. ${month}. ${dt}`;

  return (
    <div className="inner">
      <div className={styles.content}>
        <p className={styles.articleDate}>{date_contents}</p>
        <h3 className={styles.articleTitle}>{article.title}</h3>
      </div>
    </div>
  )
};

export default ArticleItem
