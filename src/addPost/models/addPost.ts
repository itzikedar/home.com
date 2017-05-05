/* tslint:disable:no-string-literal */

export interface IPost {
    $key?: string;
    completed: boolean;
    createdAt: number;
    title: string;
}

export class AddPost implements IPost {
    completed: boolean = false;
    createdAt: number = firebase.database['ServerValue']['TIMESTAMP'];
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}
