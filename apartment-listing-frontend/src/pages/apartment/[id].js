import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styles from "./[id].module.css"


const ApartmentDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [apartment, setApartment] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (id) {
      fetchApartmentDetails(id);
    }
  }, [id]);

  const fetchApartmentDetails = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/apartments/${id}`);
      if (response.ok) {
        const data = await response.json();
        setApartment(data);
      } else {
        throw new Error('Failed to fetch apartment details');
      }
    } catch (error) {
      console.error('Error fetching apartment details:', error);
    }
  };
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? apartment.imageCount - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === apartment.imageCount - 1 ? 0 : prevIndex + 1));
  };

  if (!apartment) {
    return <div>Loading...</div>;
  }


  return (
    <div className={styles.pageBody}>
    <div  className={styles.container}>
       <img className={styles.logo} src='https://github.com/mariamheshamaly/Uploading-Image/blob/main/output-onlinepngtools.png?raw=true' />
      <div className={styles.card}>
        <div className={styles.imagecontainer}>
          <img src={currentImageIndex === 0 ? apartment.image : apartment.image2} alt={`Image ${currentImageIndex + 1}`} />
        </div>
        <button className={styles.prev} onClick={prevImage}>❮</button>
        <button className={styles.next} onClick={nextImage}>❯</button>
      </div>
      
      <div class={styles.tablecontainer}>
        <h1>About Apartment</h1>
  <div class={styles.row}>
    <div class={styles.column}>
      <p className={styles.details}>Price</p>
      <p>${apartment.price} </p>
    </div>
    <div class={styles.column}>
      <p className={styles.details}>Location</p>
      <p>{apartment.location}</p>
    </div>
  </div>
  <div class={styles.row}>
    <div class={styles.column}>
      <p className={styles.details}>Bedrooms</p>
      <p>{apartment.bedrooms}</p>
    </div>
    <div class={styles.column}>
      <p className={styles.details}>Bathrooms</p>
      <p>{apartment.bathrooms}</p>
    </div>
  </div>
  <div class={styles.row}>
    <div class={styles.column}>
      <p className={styles.details}>Floor Area</p>
      <p>{apartment.floorArea}</p>
    </div>
    <div class={styles.column}>
      <p className={styles.details}>Utilities Included</p>
      <p>{apartment.utilitiesIncluded}</p>
    </div>
  </div>
</div>


        
    </div>
    </div>
  );
};

export default ApartmentDetailsPage;
 
