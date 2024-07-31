import React from 'react'
import ImageCom from '../ImageCom/ImageCom'

const ImageGallery = () => {
  return (
    <div style={{ paddingBottom: '6rem', paddingTop: '6rem', }}>
      <div style={{
        textAlign: 'center',
        margin: '0 auto',
        color: '#006838',
        fontFamily: "'Fira Sans', sans-serif",
        fontWeight: 'bold',
        fontSize: '25px',
        letterSpacing: '.05em'
      }}>
        <h1>Glimpses of sessions conducted by Jawan Pakistan</h1>
      </div>

      <ImageCom />
    </div>
  )
}

export default ImageGallery;
