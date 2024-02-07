
import EventEmitter from 'events';
export class userEvents extends EventEmitter{
    createPost(content) {
        console.log("Post is created");
        this.emit("postCreated");
    }
}