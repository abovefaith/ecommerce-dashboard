import { Component, OnInit } from '@angular/core';
import { LastFewTransactionsComponent } from '../last-few-transactions/last-few-transactions.component';
import { SalesByCategoryComponent } from '../sales-by-category/sales-by-category.component';
import { SalesByMonthComponent } from '../sales-by-month/sales-by-month.component';
import { TopWidgetsComponent } from '../top-widgets/top-widgets.component';
import { TopThreeProductsComponent } from '../top-three-products/top-three-products.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TopWidgetsComponent, SalesByMonthComponent, SalesByCategoryComponent, LastFewTransactionsComponent, TopThreeProductsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent  implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
