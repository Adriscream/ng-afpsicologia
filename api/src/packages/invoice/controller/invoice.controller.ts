import { Controller, Get, Post, Body } from '@nestjs/common';
import { InvoiceService } from '../service/invoice.service';
import { Invoice } from '@lib/interfaces';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  findAll(): Promise<Invoice[]> {
    return this.invoiceService.findAll();
  }

  @Post()
  create(@Body() invoice: Invoice): Promise<Invoice> {
    return this.invoiceService.create(invoice);
  }
}
