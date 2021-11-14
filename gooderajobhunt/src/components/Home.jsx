import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Job from "./Job";
import Search from "./Search";
import axios from "axios";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [err, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const findJob = (data)=>{
    axios
    .get(`http://localhost:8080/jobs?location=${data.location}&title=${data.title}`)
    .then((res) => {
      console.log(res.data.jobs);
      setJobs(res.data.jobs)
      setLoading(false);
      setError(false);
    })
    .catch((err) => {setError("error ocuured");setLoading(false)})
    .finally(setLoading(true));
  }

  useEffect(() => {
      setLoading(true)
      setTimeout(()=>{
        axios
        .get("http://localhost:8080/jobs")
        .then((res) => {
          console.log(res.data.jobs);
          setJobs(res.data.jobs)
          setLoading(false);
          setError(false);
        })
        .catch((err) => {setError("error ocuured");setLoading(false)})
        .finally(setLoading(true));
      },1000)
    
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.navbox}>
        <section>
          <nav>
            <div>
              <ul>
                <li>
                  <b>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 12.255C16.1405 13.4112 13.0844 14.0038 10 14C6.817 14 3.78 13.38 1 12.255H19ZM14 5V3C14 2.46957 13.7893 1.96086 13.4142 1.58579C13.0391 1.21071 12.5304 1 12 1H8C7.46957 1 6.96086 1.21071 6.58579 1.58579C6.21071 1.96086 6 2.46957 6 3V5H14ZM10 11H10.01H10ZM3 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H3C2.46957 5 1.96086 5.21071 1.58579 5.58579C1.21071 5.96086 1 6.46957 1 7V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    &nbsp;&nbsp; JobHunt
                  </b>
                </li>
                <li>Find Jobs</li>
                <li>Upskill Yourself</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Post a Job</li>
                <li>Sign in</li>
              </ul>
            </div>
          </nav>

          <header>
            <h1>Find Your Dream Job</h1>
            <br />
            <span>
              Browse through thousands of full-time or part-time jobs near you
            </span>
          </header>
        </section>
      </div>
      <div className={styles.jobBox}>
        <Search find={findJob} />
        <br />
        <br />
        <br />
        <br />
        <br />
        {
            err && <h1>{err}</h1>
        }
        {
           loading && <h2>Loading...</h2>
        }
        <section className={styles.jobCardsContainer}>
            {
                !jobs.length && <h2>Sorry no result found!</h2>
            }
          {jobs.map((items,i) => {
            return <Job data={items} key={i} />;
          })}
        </section>
      </div>
    </div>
  );
};

export default Home;
