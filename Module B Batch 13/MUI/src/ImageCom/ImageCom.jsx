import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageCom() {
  return (
    <ImageList
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img 
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://jawanpakistan12.web.app/images/sindh%20unicersity%20visit/261862704_10223371448265775_2300299709412093131_n%20(1).jpg',
    title: 'TIC Group Photo',
    rows: 2,
    cols: 1,
  },
  {
    img: 'https://jawanpakistan12.web.app/images/session%20on%20cutting%20edge%20technology/155332906_247925270211672_3618235991589928653_n.jpg',
    title: 'Final Module Group Photo',
    rows: 2,
    cols: 1,
  },
  {
    img: 'https://jawanpakistan12.web.app/images/onsite%20flutter%20session/212511411_10222634570404289_7247003591892091335_n.jpg',
    title: 'Graduated students Group Photo',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://jawanpakistan12.web.app/images/session%20at%20mehran%20university/261988743_10223366848350780_4227756947042582881_n.jpg',
    title: 'Seminar',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://jawanpakistan12.web.app/images/freelancing%20workshop/209537914_10222634542963603_4251492512510579905_n.jpg',
    title: 'Hall',
    rows: 2,
    cols: 1,
  },
  
  {
    img: 'https://jawanpakistan12.web.app/images/session%20at%20mehran%20university/261542477_10223366846270728_9568039485316705_n.jpg',
    title: 'Lawn',
    rows: 2,
    cols: 1,
  },
  
];
