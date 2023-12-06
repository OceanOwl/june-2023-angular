const baseURL = 'https://jsonplaceholder.typicode.com'

const users = `${baseURL}/users`

const urls = {
  users:{
    base:users,
    byId:(id:number):string=>`${users}/${id}`
  },
  posts:{
    getPostById:(id:number):string=>`${baseURL}/users/${id}/posts`
  }
}

export {
  urls
}
