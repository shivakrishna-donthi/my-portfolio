import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [{ path: '', component: PortfolioComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 25], // cool option, or ideal option when you have a fixed header on top.
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
