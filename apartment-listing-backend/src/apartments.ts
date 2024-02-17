import { Router, Request, Response } from 'express';

const router = Router();

const apartments = [
  { id: 1, 
   title: 'The Metropolitan Manor',
   location: "Located in the heart of the city, close to shopping centers, restaurants, and entertainment venues.",
   bedrooms: "3 bedrooms, each with spacious closets.",
   bathrooms: "2 full bathrooms and 1 half bathroom.",
   floorArea: "The total floor area of the apartment is 1,200 square feet.",
   utilitiesIncluded: "Rent includes water, electricity, and high-speed internet.",
   PetFriendly: "Pets are welcome in the apartment",
   price: 1000, 
   image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg", 
   image2: "https://github.com/mariamheshamaly/Uploading-Image/blob/main/Screenshot%20(63).png?raw=true"},

  { id: 2,
    title: 'The Urban Retreat',
    location: "Surrounded by lush greenery and countryside scenery, offering a peaceful retreat from the city.",
    bedrooms: "2 bedrooms, each with spacious closets.",
    bathrooms: "2 full bathrooms and 1 half bathroom in the apartment.",
    floorArea: "The total floor area of the apartment is 1,500 square feet.",
    utilitiesIncluded: "Rent includes water, electricity, and high-speed internet.",
    PetFriendly: "Pets are welcome in the apartment.",
    price: 1500,
    image: "https://github.com/mariamheshamaly/Uploading-Image/blob/main/Screenshot%20(64).png?raw=true" , 
    image2: "https://www.home-designing.com/wp-content/uploads/2017/04/clever-ways-to-separate-studio-apartment-rooms.jpg"},
    
  { id: 3,
     title: 'The Luxe Loft', 
     price: 3000, 
     location: " Within a secure gated community featuring amenities such as tennis courts, swimming pools, and walking trails.",
     bedrooms: "4 bedrooms, each with spacious closets.",
     bathrooms: "3 full bathrooms and 1 half bathroom in the apartment.",
     floorArea: "The total floor area of the apartment is 2,000 square feet.",
     utilitiesIncluded: "Rent includes water, electricity, and high-speed internet.",
     PetFriendly: "Pets are welcome in the apartment",
     image: "https://github.com/mariamheshamaly/Uploading-Image/blob/main/Screenshot%20(66).png?raw=true",
     image2: "https://github.com/mariamheshamaly/Uploading-Image/blob/main/Screenshot%20(65).png?raw=true"}
];

// Endpoint for listing apartments
router.get('/', (req: Request, res: Response) => {
  res.json(apartments);
});

// Endpoint for getting apartment details
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const apartment = apartments.find(apartment => apartment.id === parseInt(id));
  if (apartment) {
    res.json(apartment);
  } else {
    res.status(404).json({ message: 'Apartment not found' });
  }
});

// Endpoint for adding apartments
router.post('/', (req: Request, res: Response) => {
  const {title, price,location,bedrooms,bathrooms, floorArea, utilitiesIncluded, PetFriendly, image, image2} = req.body;
  const id = apartments.length + 1;
  const newApartment = { id, title, price, location,bedrooms,bathrooms,floorArea,utilitiesIncluded,PetFriendly, image, image2};
  apartments.push(newApartment);
  res.status(201).json(newApartment);
});

export { router };