import React from 'react'

type Props = {
  image: string
  alt: string
}

const Image: React.FC<Props> = ({ image, alt }) => <img src={image} alt={alt} />;

export default Image
