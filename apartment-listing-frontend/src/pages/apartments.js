import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './apartments.module.css';
import "../app/globals.css"



const ApartmentsPage = () => {
      
    const [apartmentsData, setApartmentsData] = useState([]);

    useEffect(() => {
      fetchApartments();
    }, []);

    const fetchApartments = async () => {
        try {
          const response = await fetch('http://localhost:3001/apartments'); // Assuming your backend server is running on localhost:3000
          if (response.ok) {
            const data = await response.json();
            setApartmentsData(data);
          } else {
            throw new Error('Failed to fetch apartments data');
          }
        } catch (error) {
          console.error('Error fetching apartments:', error);
        }
      };

      const handleViewDetails = (id) => {
        window.location.href = `/apartment/${id}`;
      };

      return (
        
        <div className={styles.container}>
             <img className={styles.logo} src='https://github.com/mariamheshamaly/Uploading-Image/blob/main/output-onlinepngtools.png?raw=true' />
          <div className={styles.apartmentContainer}>
            {apartmentsData.map(apartment => (
              <div key={apartment.id} className={styles.apartmentCard}>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', color: '#a3967e',marginBottom: '5px'}}>{apartment.title}</h2>
                <img src={apartment.image} alt={apartment.title} className={styles.apartmentImage} />
                <button className={styles.mybutton} onClick={() => handleViewDetails(apartment.id)}>View Details</button>
                

              </div>
            ))}
          </div>
        </div>
        
      );
};

export default ApartmentsPage;