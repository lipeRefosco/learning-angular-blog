import { Post } from "../domain/Post";

export const fakePosts: Post[] = Array.from({length: 5}, (_,i) => (new Post({
  id: i,
  date: '2023-10-15',
  title: `Post ${i}`,
  img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  desc: `Small text for post ${i} card...`,
  content: `Content ${i}Lorem ipsum dolor sit amet consectetur adipisicing elit.<img src="${"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80"}" /> Illum sed asperiores non recusandae facilis iusto omnis magnam hic assumenda animi tempore, excepturi odio fugit odit possimus quam, mollitia nisi dignissimos.`
})));
