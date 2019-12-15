import React from 'react'
import { NextPage } from 'next'
import axios from 'axios'

import TopTitle from '../components/organisms/TopTitle'
import ArticleList from '../components/organisms/ArticlesList'

type Props = {
  articles: []
}

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <TopTitle />
      <ArticleList articles={articles} />
    </>
  )
};

Home.getInitialProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.api_key},
  };
  const res = await axios.get(
    `https://my_blog.microcms.io/api/v1/article/`,
    key,
  );
  const data = await res.data.contents;
  return {articles: data};
};

export default Home
