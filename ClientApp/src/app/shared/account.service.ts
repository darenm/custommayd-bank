import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/Rx';

import { AccountSummary } from './account-summary';
import { AccountDetail } from './account-detail';
import { AccountType } from './account-type.enum';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) {

  }

  getAccountSummaries() {
    return this.http.get<AccountSummary[]>('api/Bank/GetAccountSummaries')
      .toPromise();
  }

  getAccountDetail(id: string) {
    return this.http.get<AccountDetail>(`api/Bank/GetAccountDetail/${id}`) // note string interpolation
      .toPromise();
  }
}
