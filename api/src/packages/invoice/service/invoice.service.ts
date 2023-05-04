import { Injectable } from '@nestjs/common';
import { InvoiceRepository } from '../repository/invoice.repository';
import { Invoice } from '@lib/interfaces';

@Injectable()
export class InvoiceService {
  constructor(private invoiceRepository: InvoiceRepository) {}

  async findAll(): Promise<Invoice[]> {
    const invoices = await this.invoiceRepository.findAll();
    return invoices;
  }

  async findById(id: string): Promise<Invoice | null> {
    const invoice = await this.invoiceRepository.findById(id);
    return invoice;
  }

  async create(data: Invoice): Promise<Invoice> {
    const invoice = await this.invoiceRepository.create(data);
    return invoice;
  }

  async update(id: string, data: Partial<Invoice>): Promise<Invoice | null> {
    const invoice = await this.invoiceRepository.update(id, data);
    return invoice;
  }

  async delete(id: string): Promise<boolean> {
    const isDeleted = await this.invoiceRepository.delete(id);
    return isDeleted;
  }
}
