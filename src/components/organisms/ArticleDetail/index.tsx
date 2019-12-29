import React, { FC } from 'react'
import TopTitle from '../TopTitle'

import styles from './articleDetail.module.scss'

type Props = {
  title: string
  body: string
}

const ArticleDetail: FC<Props> = ({ title, body }) => {
  return (
    <>
      <TopTitle />
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{__html: body}}
        />
      </div>
    </>
  )
};

export default ArticleDetail
