import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AuthService } from '../../auth';
import { IPost, AddPost } from '../models/addPost';


@Injectable()
export class AddPostService {
    visibleAddPosts$: Observable<IPost[]>;

    private filter$: ReplaySubject<any> = new ReplaySubject(1);
    private filteredAddPosts$: FirebaseListObservable<IPost[]>;
    private tasks$: FirebaseListObservable<IPost[]>;


    constructor(af: AngularFire, auth: AuthService) {
        const path = `/tasks/${auth.id}`;

        this.tasks$ = af.database.list(path);

        this.filteredAddPosts$ = af.database.list(path, {query: {
            orderByChild: 'completed',
            equalTo: this.filter$
        }});

        this.visibleAddPosts$ = this.filter$
            .switchMap(filter => filter === null ? this.tasks$ : this.filteredAddPosts$);
    }


    filterAddPosts(filter: string): void {
        switch (filter) {
            case 'false':
                this.filter$.next(false);
                break;

            case 'true':
                this.filter$.next(true);
                break;

            default:
                this.filter$.next(null);
                break;
        }
    }

    createAddPost(title: string): firebase.Promise<any> {
        return this.tasks$.push(new AddPost(title));
    }

    removeAddPost(task: IPost): firebase.Promise<any> {
        return this.tasks$.remove(task.$key);
    }

    updateAddPost(task: IPost, changes: any): firebase.Promise<any> {
        return this.tasks$.update(task.$key, changes);
    }
}
