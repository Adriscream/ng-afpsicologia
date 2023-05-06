import { CalendarEventStatus, PaymentMethod } from '@lib/interfaces';

export type FullCalendarDialogProps = {
  title?: string;
  clientId?: string;
  serviceId?: string;
  paymentMethod?: PaymentMethod;
  status?: CalendarEventStatus;
  end?: Date;
  start?: Date;
  canDelete?: boolean;
};
