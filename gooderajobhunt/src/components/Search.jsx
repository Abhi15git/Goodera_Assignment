import React, { useState } from 'react'
import styles from "./Home.module.css"
import Button from '@mui/material/Button';



const Search = ({find}) => {
    const [query,setQuery] = useState({location:'',title:''});

    const handleTitle = (e)=>{
    setQuery({...query,title:e.target.value})
    }
    const handleLocation = (e)=>{
        setQuery({...query,location:e.target.value})
    }

    return (
        <div className={styles.searchBar}>
            <div>
                <div>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.5 28.5L19.5 19.5L28.5 28.5ZM22.5 12C22.5 13.3789 22.2284 14.7443 21.7007 16.0182C21.1731 17.2921 20.3996 18.4496 19.4246 19.4246C18.4496 20.3996 17.2921 21.1731 16.0182 21.7007C14.7443 22.2284 13.3789 22.5 12 22.5C10.6211 22.5 9.25574 22.2284 7.98182 21.7007C6.70791 21.1731 5.55039 20.3996 4.57538 19.4246C3.60036 18.4496 2.82694 17.2921 2.29927 16.0182C1.77159 14.7443 1.5 13.3789 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12Z" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
&nbsp;&nbsp;
                    <input type="text" placeholder="job title or keyword" onChange={handleTitle}/>
                </div>
                <div><svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5 1L10.5 5.5M10.5 25L2.3295 20.914C2.08038 20.7895 1.87083 20.5981 1.72433 20.3613C1.57782 20.1244 1.50015 19.8515 1.5 19.573V3.427C1.50014 3.17141 1.56558 2.9201 1.69012 2.69691C1.81465 2.47372 1.99416 2.28605 2.21159 2.15171C2.42903 2.01737 2.67718 1.94082 2.93251 1.92932C3.18784 1.91782 3.44187 1.97175 3.6705 2.086L10.5 5.5V25ZM10.5 25L19.5 20.5L10.5 25ZM10.5 25V5.5V25ZM19.5 20.5L26.3295 23.914C26.5581 24.0282 26.8122 24.0822 27.0675 24.0707C27.3228 24.0592 27.571 23.9826 27.7884 23.8483C28.0058 23.714 28.1853 23.5263 28.3099 23.3031C28.4344 23.0799 28.4999 22.8286 28.5 22.573V6.427C28.4999 6.14851 28.4222 5.87555 28.2757 5.63871C28.1292 5.40187 27.9196 5.21049 27.6705 5.086L19.5 1V20.5ZM19.5 20.5V1V20.5Z" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                &nbsp;&nbsp;

            
          
         


                    <select name="" id="" onChange={handleLocation}>
                        <option value="" selected>Select location</option>
                        <option value="india">India</option>
                        <option value="france">France</option>
                        <option value="italy">Italy</option>

                    </select>
                </div>
                <div>
                    <Button onClick={()=>{find(query)}} variant="contained" color="error">Search</Button>
                </div>
            </div>
        </div>
    )
}

export default Search
