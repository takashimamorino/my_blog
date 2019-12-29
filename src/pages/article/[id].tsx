import React from 'react'
import { NextPage } from 'next'
import axios from 'axios'

import ArticleDetail from '../../components/organisms/ArticleDetail'

type Props = {
  article: any
}

const Article: NextPage<Props> = ({ article }) => {
  return (
    <div className="inner">
      <ArticleDetail title={article.title} body={article.body} />
    </div>
  )
};

Article.getInitialProps = async context => {
  const {id} = context.query;
  const key = {
    headers: {'X-API-KEY': process.env.api_key},
  };
  const res = await axios.get(
    `https://my_blog.microcms.io/api/v1/article/${id}`,
    key,
  );
  const article = await res.data;
  return {article};
};

export default Article
