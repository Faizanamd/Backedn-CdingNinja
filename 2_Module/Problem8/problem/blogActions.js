
import fs from 'fs';
export function writeBlog(filePath, userBlog){ 
    try{
        fs.writeFileSync(filePath,userBlog);
    }catch(err){
        console.log(err);
    }
}

export function publishBlog(filePath){
    try{
        const buffer = fs.readFileSync(filePath, {encoding: 'utf8'});
        return buffer;
    }catch(err){
        console.log(err);
    }
}