import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';


const routes: Routes = [
  {
    path: 'editor',
    children: [
      {
        path: '',
        redirectTo: '1'
      },
      {
        path: ':id',
        component: EditorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
