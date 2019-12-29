import React, { FC } from 'react'
import Link from 'next/link'

import styles from './pageLink.module.scss'

type Props = {
  text: string
  link: string
}

const PageLink: FC<Props> = ({ text, link }) => {
  return (
    <Link href={link}>
      <a className={styles.text}>{text}</a>
    </Link>
  )
};

export default PageLink
