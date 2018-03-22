import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AccountActivityComponent } from './account/account-activity/account-activity.component';
import { AccountDetailComponent } from './account/account-detail/account-detail.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccountSummaryComponent } from './account/account-summary/account-summary.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormatAccountNumberPipe } from './shared/format-account-number.pipe';
import { AccountService } from './shared/account.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountActivityComponent,
    AccountDetailComponent,
    AccountListComponent,
    AccountSummaryComponent,
    HeaderComponent,
    FormatAccountNumberPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'account', pathMatch: 'full' },
      { path: 'account', component: AccountListComponent },
      { path: 'detail/:id', component: AccountDetailComponent },
      { path: '**', redirectTo: 'account' }
    ])
  ],
  providers: [ AccountService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
