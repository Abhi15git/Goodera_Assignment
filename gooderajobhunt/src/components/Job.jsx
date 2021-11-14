import React from 'react'
import styles from "./Home.module.css"
import Button from '@mui/material/Button';

const Job = ({data,key}) => {
    return (
        <div className={styles.jobCard } key={key}>
            <section>
            <div className={styles.image}>
                <img src={data.image} alt="https://de2g2pzerdhu6.cloudfront.net/wp-content/uploads/2019/05/dummy-man-570x570.png" />
            </div>
            <div className={styles.description}>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <div> <Button color="error" variant="outlined">View Details</Button> </div>
            </div>
            </section>
        </div>
    )
}

export default Job
