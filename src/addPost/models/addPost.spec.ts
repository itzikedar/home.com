import { AddPost } from './addPost';


describe('tasks/', () => {
    describe('AddPost', () => {
        it('should set title', () => {
            expect(new AddPost('test').title).toBe('test');
        });
    });
});
