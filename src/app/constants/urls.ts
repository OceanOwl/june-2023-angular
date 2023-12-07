const baseURL = 'https://jsonplaceholder.typicode.com'

const users = `${baseURL}/users`;

const posts = `${baseURL}/posts`;

const comments = `${baseURL}/comments`;

const urls ={
  users:{
    base:users,
    byId:(id:number):string=>`${users}/${id}`
  },
  posts:{
    byUserId:(userId:number):string=>`${baseURL}/users/${userId}/posts`
  },
  comments:{
    byPostId:(postId:number):string=>`${baseURL}/posts/${postId}/comments`
  }
}
export {
  urls
}
