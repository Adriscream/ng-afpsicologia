export interface Appointment {
  id: string;
  userId: string;
  serviceId: string;
  clientId: string;
  date: Date;
  status: AppointmentStatus;
  startTime: Date;
  paymentMethod: PaymentMethod;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum AppointmentStatus {
  PAID = 'paid',
  UNPAID = 'unpaid',
  UNCONFIRMED = 'unconfirmed',
  CONFIRMED = 'confirmed',
  COMPLETED = 'completed',
  MISSED = 'missed',
}

export enum PaymentMethod {
  CASH = 'cash',
  TRANSFER = 'transfer',
  BIZUM = 'bizum',
}
