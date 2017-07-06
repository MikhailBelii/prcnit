import{ Component} from 'angular2/core';
import{ BackeService} from './backe.service';
import{ BackendComponent} from './backend.component';
import{RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {RouterConfigLoader} from "angular2/router/src/router_config_loader";
import { DashboardComponent } from './dashboard.component';
@Component({
    selector: 'my-app',
    template:`
         <h1> {{title}}</h1>
             <nav><a [routerLink]="['Dashboard']">Dashboard</a>
                  <a [routerLink]="['Backend']">Backend</a>
             </nav>
        <router-outlet></router-outlet>
`,
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroServise,ROUTER_PROVIDERS]
})
@RouterConfig([
    {
        path: '/backend',
        question: 'Backend',
        component: BackendComponent
        userAsDefault: true
},
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
    }
])
export class AppComponent{
    title = 'r'
}
