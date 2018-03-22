import { AccountSummary } from './account-summary';
import { AccountTransaction } from './account-transaction';

export class AccountDetail {
  accountSummary: AccountSummary;
  accountTransactions: AccountTransaction[];
}
