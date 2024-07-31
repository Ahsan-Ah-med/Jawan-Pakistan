import React from 'react';
import { Box, Grid } from '@mui/material';
import Logo from '../assets/Logos/JPLogo.png';
import styles from './Footer.module.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div>

            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6} md={4} xl={4}>
                    <Box
                        width={200}
                        my={4}
                        display="flex"
                        alignItems="center"
                        gap={4}
                        p={2}
                        sx={{ border: 'none' }}
                    >
                        <img style={{ width: '100%' }} src={Logo} alt="Logo" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} xl={4}>
                    <Box
                        width={200}
                        display="flex"
                        alignItems="center"
                        gap={4}
                        sx={{ border: 'none' }}
                    >
                        <div>
                            <h6 className={styles.head}>COMPANY</h6>
                            <p className={styles.noGap}>Home</p>
                            <p className={styles.noGap}>About Us</p>
                            <p className={styles.noGap}>Training</p>
                            <p className={styles.noGap}>Contact Us</p>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} xl={4}>
                    <Box
                        width={200}
                        display="flex"
                        alignItems="center"
                        gap={4}
                        sx={{ border: 'none' }}
                    >
                        <div>
                            <h6 className={styles.head}>CONTACT DETAILS</h6>
                            <p className={styles.noGap}>Muhammad Ali Mughal</p>
                            <p className={styles.noGap}> +923005292675</p>
                            <p className={styles.noGap}>jawantechpk@gmail.com</p>

                        </div>
                    </Box>
                </Grid>
            </Grid>
            <div style={{ backgroundColor: 'rgb(240 255 244)', margin: '0', padding: '0', paddingLeft: '10%', paddingRight: '10%', color: 'rgb(113 128 150)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <div style={{ padding: '5px', margin: '5px', marginBottom: '10px' }}>© 2022 JawanPakistan</div>

                    <div style={{ padding: '5px', margin: '5px', marginBottom: '10px', display: 'flex', flexDirection: 'row', gap: '10px', cursor: 'pointer' }}>
                        <div> <FacebookOutlinedIcon /></div>
                        <div><InstagramIcon /></div>
                        <div>  <LinkedInIcon /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
