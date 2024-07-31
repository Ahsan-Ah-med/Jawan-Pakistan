import React from 'react';
import { Grid } from '@mui/material';
import styles from './ImageWithText.module.css';

const ImageWithText = ({ label, para, paragraphs, image, reverse = false }) => {
  return (
    <Grid 
      className={styles.main} 
      container 
      spacing={2} 
      direction={reverse ? 'row-reverse' : 'row'}
    >
      <Grid item xs={12} md={6}>
        <div style={{ width: '300px' }}>
          <h1 className={styles.intro}>{label}</h1>
        </div>
        <div>
          {para && <p className={styles.para}>{para}</p>}
          {paragraphs && paragraphs.map((text, index) => (
            <p key={index} className={styles.para}>{text}</p>
          ))}
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div style={{ width: '100%' }}>{image}</div>
      </Grid>
    </Grid>
  );
}

export default ImageWithText;


