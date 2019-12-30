import React, { FC } from 'react'
import TopTitle from '../TopTitle'

import styles from './articleDetail.module.scss'
import PageLink from '../../atoms/PageLink'

type Props = {
  title: string
  body: string
}

const ArticleDetail: FC<Props> = ({ title, body }) => {
  return (
    <>
      <TopTitle />
      <div className={styles.inner}>
        <PageLink text='記事一覧' link='/'/>
        <h2 className={styles.title}>{title}</h2>
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{__html: body}}
        />
        <PageLink text='記事一覧' link='/'/>
      </div>
    </>
  )
};

export default ArticleDetail
