import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AddPostService } from '../services/add-post';


@Component({
    template: `        
        <div>Add post</div>
    `
})

export class AddPostComponent {
    filter: Observable<any>;

    constructor(public route: ActivatedRoute, public postService: AddPostService) {
        this.filter = route.params
            .pluck('completed')
            .do((value: string) => postService.filterAddPosts(value));
    }
}
