import { Phone } from './Phone';

export default interface PhoneInCart extends Phone {
	quantity: number;
}