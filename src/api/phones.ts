import { Phone } from '../types/Phone';
import { PhoneInfo } from '../types/PhoneInfo';

const BASE_URL = 'https://pru-vq89.onrender.com';

export interface Props {
  'products': Phone[]
  'numberOfPages': number
  'numberOfProducts': number
}

export const getAllPhones = async() => {
	const response = await fetch(BASE_URL + '/products');
	const data: Promise<Phone[]> = response.json(); 

	return data || [];
};

export const getPhone = async (itemId: string) => {
	const response = await fetch(BASE_URL + '/products/' + itemId);
	const phoneInfo: Promise<PhoneInfo> = response.json(); 

	return phoneInfo || null;
};