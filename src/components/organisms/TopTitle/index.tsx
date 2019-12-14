import React from 'react'

import styles from './topTitle.module.scss'
import top_title_log from '../../../../public/logo_title.svg'

import Image from '../../atoms/Image'

const TopTitle: React.FC = () => {
  return (
    <>
      <div className={styles.titleLogo}>
        <Image image={top_title_log} alt='サイトのロゴ画像'/>
      </div>
    </>
  )
};

export default TopTitle
