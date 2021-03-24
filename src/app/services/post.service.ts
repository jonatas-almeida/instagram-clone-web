import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/Post';
import { User } from '../interfaces/User';
import { UserPosts } from '../interfaces/UserPosts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  //Pega todos os posts
  getAllPosts(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/posts`);
  }

  //Pega um post específico
  getPost(id: number){
    return this.http.get(`${this.baseUrl}/posts/${id}`);
  }

  //Pega o post de um usuário
  getUserPosts(user: UserPosts){
    return this.http.get(`${this.baseUrl}/users/user_posts/${user.user_post}`);
  }

  //Pega os seguidores do usuário
  getFollowers(user: User){
    return this.http.get(`${this.baseUrl}/users/${user.id}/${user.user_followers}`)
  }

  //Adiciona um novo post
  //(Mudar depois para o UserPost)
  addPost(post: Post){
    return this.http.post(`${this.baseUrl}/posts`, post);
  }

  //Edita o post
  editPost(post: Post){
    return this.http.put(`${this.baseUrl}/posts/${post.id}`, post)
  }

  //Apaga o post
  deletePost(post: Post){
    return this.http.delete(`${this.baseUrl}/posts/${post.id}`);
  }

}
