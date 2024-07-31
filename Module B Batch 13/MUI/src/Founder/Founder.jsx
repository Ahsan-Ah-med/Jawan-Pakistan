import { Box, Stack } from '@mui/material'
import React from 'react'
import FounderImg from '../assets/Logos/founder.jpg'
import styles from './Founder.module.css';


const Founder = () => {
    return (
        <Stack >

            <Box>
                <Box sx={{ paddingLeft: '15%', paddingRight: '15%', paddingBottom: '6rem', paddingTop: '6rem', }}>
                    <div className={styles.image}>
                        <img className={styles.imagetwo} src={FounderImg} alt="" />
                    </div>
                    <div className={styles.desh}>
                        <span></span>
                    </div>
                    <div className={styles.foundername}>
                        <h1>
                            MUHAMMAD ALI MUGHAL</h1>
                    </div>
                    <div className={styles.founderpara}>
                        <p>Founder of Jawan Pakistan</p>
                    </div>
                    <div className={styles.foundercolum}>
                        <p>We aim to be most efficient provider of business process outsourcing services by setting the industry standards for cost and quality of services. Our long term success will be driven by our relentless focus on recruiting and developing the most talented pool of human capital in our industry.</p>
                    </div>
                </Box>
            </Box>




        </Stack>
    )
}

export default Founder
