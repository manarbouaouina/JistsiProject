import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JitsiComponent } from './jitsi/jitsi.component';

const routes: Routes = [
    {
        path: '',
        component: JitsiComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
