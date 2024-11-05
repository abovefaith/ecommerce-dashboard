import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDashboard, faLocation, faShop, faBox, faMoneyBill, faChartBar, faContactBook, faHand } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent implements OnInit{
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;

  constructor() { }

  ngOnInit(): void {
  }

}
