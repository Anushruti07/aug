import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewProductsComponent } from './components/new-products/new-products.component';
import { ProductsComponent } from './components/products/products.component';
import { NoticesComponent } from './components/notices/notices.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ChartsComponent } from './components/charts/charts.component';
import { NewNoticeComponent } from './components/new-notice/new-notice.component';
import { AddPublisherComponent } from './components/publisher/add-publisher/add-publisher.component';



export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'charts',component:ChartsComponent},
    {path:'pieChart',component:PieChartComponent},
    {path:'notices',component:NoticesComponent},
    {path:'products',component:ProductsComponent},
    {path:'newProducts',component:NewProductsComponent},
    {path:'newNotice',component:NewNoticeComponent},
    {path:'addPublisher',component:AddPublisherComponent},
    {path:'**',component:HomeComponent},

];
