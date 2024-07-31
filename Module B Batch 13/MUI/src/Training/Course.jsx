import React from 'react';
import Card from '../Cards/Cards.jsx';
import { Grid } from '@mui/material';
import Card1 from '../assets/Logos/Card1.png';
import Card2 from '../assets/Logos/Card2.jfif';
import Card3 from '../assets/Logos/Card3.jpg';
import Card4 from '../assets/Logos/Card4.png';
import Card5 from '../assets/Logos/Card5.jpg';
import Styles from './Course.module.css'; // Import the CSS file

const Course = () => {

  const cardData = [
    { label: "Web and Mobile Application Development", image: Card1 },
    { label: "Flutter Mobile Application Development", image: Card2 },
    { label: "Graphic Design And Video Editing", image: Card3 },
    { label: "Digital And Social Media Marketing", image: Card4 },
    { label: "BlockChain Development", image: Card5 },
  ]
  // console.log(cardData)

  return (
    <div style={{ paddingLeft: '5%', paddingRight: '5%', paddingBottom: '20px', }}>
      <div className={Styles.main}>
        <h1>IT Trainings Offering In Jawan Pakistan</h1>
      </div>

      <Grid sx={{ justifyContent: 'center', }} container spacing={2}>
        {cardData.map((e, index) => {
          // console.log(e)
          return (
            <Grid item xs={12} sm={6} md={4} xl={4} key={index}>
              <Card
                label={e.label}
                image={e.image}
                className={Styles.cards}
              />
            </Grid>
          )
        })}

      </Grid>
    </div>
  );
}

export default Course;
