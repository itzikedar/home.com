import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth';
import { AddPostComponent } from './components/addPost';
import { AutoFocusDirective } from './directives/autofocus-directive';
import { AddPostService } from './services/add-post';


const routes: Routes = [
    {path: 'addPost', component: AddPostComponent, canActivate: [AuthGuard]}
];


@NgModule({
    declarations: [
        AutoFocusDirective,
        AddPostComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        AddPostService
    ]
})

export class AddPostModule {}

export { AddPostService };
