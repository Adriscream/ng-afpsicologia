import { Module } from '@nestjs/common';
import { InvoiceController } from './controller/invoice.controller';
import { InvoiceService } from './service/invoice.service';
import { InvoiceRepository } from './repository/invoice.repository';
import { FirebaseModule } from 'src/common/firebase/public-api';

@Module({
  imports: [FirebaseModule],
  controllers: [InvoiceController],
  providers: [InvoiceService, InvoiceRepository],
})
export class InvoiceModule {}
