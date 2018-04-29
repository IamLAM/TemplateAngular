import {RouterModule,Routes} from '@angular/router';
import {AboutComponent}  from './components/about/about.component';
import {ItemComponent}  from './components/item/item.component';
import {BodyComponent}  from './components/body/body.component';
import {SearchComponent}  from './components/search/search.component';

const app_routes:Routes=[
{path:'about',component:AboutComponent},
{path:'item/:id',component:ItemComponent},
{path:'search/:termino',component:SearchComponent},
{path:'body',component:BodyComponent},
{path:'**', pathMatch:'full',redirectTo:'body'}
];
export const app_routing=RouterModule.forRoot(app_routes,{useHash:true});
