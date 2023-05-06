export interface CalendarEvent {
  id?: string;
  userId?: string;
  serviceId: string;
  clientId: string;
  status: CalendarEventStatus;
  paymentMethod: PaymentMethod;
  start: string;
  end: string;
  allDay: boolean;
  title: string;
}

export enum CalendarEventStatus {
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
