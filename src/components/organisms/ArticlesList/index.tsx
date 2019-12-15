import React from 'react'

import ArticleItem from '../../molecules/AricleItem'

type Props = {
  articles: any
}

const ArticleList: React.FC<Props> = ({ articles }) =>
  articles.map((article, index) =>
    <div key={index}>
      <ArticleItem article={article} />
    </div>
  );

export default ArticleList
