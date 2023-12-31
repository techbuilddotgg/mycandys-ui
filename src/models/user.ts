export interface User {
  id: string;
  name: string;
  email: string;
  city: string;
  country: string;
  address: string;
  postalCode: string;
  phone: string;
}

export interface UpdateUser extends Omit<User, 'id' | 'email'> {}
