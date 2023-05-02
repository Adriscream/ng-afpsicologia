export interface Client {
  id?: string;
  userId?: string;
  alias?: string;
  firstName: string;
  lastName?: string;
  idNumber?: string;
  phoneNumber: string;
  dateOfBirth?: Date;
  email: string;
  postalCode?: string;
  address?: string;
  city?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
