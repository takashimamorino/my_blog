import React from 'react'
import Link from 'next/link'

import ArticleItem from '../../molecules/AricleItem'

type Props = {
  articles: any
}

const ArticleList: React.FC<Props> = ({ articles }) => {
  return (
  articles.map((article, index) =>
    <Link href={`/article/${article.id}`} key={index}>
      <div>
        <ArticleItem article={article} />
      </div>
    </Link>
  ));
}

export default ArticleList
