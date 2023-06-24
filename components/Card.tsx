import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'

interface Props {
  qr: StaticImageData
}

export const Card:FC<Props> = ({qr}) => {
  return (
    <section className='card'>
          <header className='card-image' >
            <Image src={qr} alt='qr code' width={qr.width} height={qr.height}/>
          </header>
          <div className='card-content'>
            <h1 className='text-center'>Improve your front-end skills by building projects </h1>
            <p className='text-center'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
    </section>
  )
}
