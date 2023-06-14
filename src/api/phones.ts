import { Phone } from '../types/Phone';

const BASE_URL = 'https://device-shop-wrmh.onrender.com/products';

export interface Props {
  'products': Phone[]
  'numberOfPages': number
  'numberOfProducts': number
}

export const getAllPhones = async() => {
	const response = await fetch(BASE_URL);
	const data: Promise<Phone[]> = response.json(); 

	return data || [];
};

//paste to app.tsx:

// const [phonesData, setPhonesData] = useState<Phone[]>([]);

// useEffect(() => {
//   getAllPhones()
//     .then((response) => {
//       setPhones(response);
//     })
//     .catch((error) => {
//       console.error(error.message);
//     });
// }, []);