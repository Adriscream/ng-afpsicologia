export interface Invoice {
  id: string;
  userId: string;
  name: string;
  serviceIds: string[];
  clientId?: string;
  appointments: string[];
  invoiceNumber: string;
  issueDate: Date;
  startDate: Date;
  endDate: Date;
  terms?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
