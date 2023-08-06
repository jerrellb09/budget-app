import { PaymentFrequency } from '../enum/paymentFrequencyEnum';

export interface BudgetItem {
  paidTo: string;
  amount: number;
  dayDue: number;
  bankingInstitution: string;
  paymentFrequency: PaymentFrequency;
}
