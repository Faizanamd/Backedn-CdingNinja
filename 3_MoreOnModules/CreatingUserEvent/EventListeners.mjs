

import { userEvents } from "./UserEvent.mjs";

const userEvent = new userEvents();



function saveToDatabase(){
    console.log("post is saved to database");
}
function sendNotification(){
    console.log("Sending Notifcation");
}
function updateTimeline(){
    console.log("updating timeline");
}

userEvent.addListener("postCreated", saveToDatabase);
userEvent.addListener("postCreated", sendNotification);


userEvent.addListener("postCreated", updateTimeline);
userEvent.createPost("THis is my fist post");
