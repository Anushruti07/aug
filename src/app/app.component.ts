import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { NoticesComponent } from './components/notices/notices.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChartsComponent } from './components/charts/charts.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductsComponent,NoticesComponent,NavbarComponent,ChartsComponent,PieChartComponent,
    HomeComponent,AboutComponent,ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aug';
}
