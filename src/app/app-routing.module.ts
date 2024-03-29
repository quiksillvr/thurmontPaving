import { NgModule } from '@angular/core';
import { RootModule, UIRouterModule } from '@uirouter/angular';
import { ServicesComponent } from './services/services.component';
import { ResidentialComponent } from './residential/residential.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ContactComponent } from './contact/contact.component';

const rootModule: RootModule = {
  states: [
    {
      name: "services",
      url: "/services",
      component: ServicesComponent
    },
    {
      name: "residential",
      url: "/residential",
      component: ResidentialComponent
    },
    {
      name: "commercial",
      url: "/commercial",
      component: CommercialComponent
    },
    {
      name: "contact",
      url: "/contact",
      component: ContactComponent
    }
  ],
  useHash: true,
  otherwise: "/services"
};

@NgModule({
  imports: [UIRouterModule.forRoot(rootModule)],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }
