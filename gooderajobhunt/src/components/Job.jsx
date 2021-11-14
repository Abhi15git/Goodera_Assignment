import React from 'react'
import styles from "./Home.module.css"
const Job = ({data,key}) => {
    return (
        <div className={styles.jobCard } key={key}>
            <section>
            <div className={styles.image}>
                <img src={data.image} alt="https://de2g2pzerdhu6.cloudfront.net/wp-content/uploads/2019/05/dummy-man-570x570.png" />
            </div>
            <div className={styles.description}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <div><button>View Details</button></div>
            </div>
            </section>
        </div>
    )
}

export default Job
