import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/interfaces/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-side-buttons',
  templateUrl: './side-buttons.component.html',
  styleUrls: ['./side-buttons.component.scss']
})
export class SideButtonsComponent implements OnInit {

  posts: Post;
  postForm: any;

  constructor(private modalService: NgbModal, private fb: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.validation();
  }

  //Abre o modal de adicionar os posts
  openModal(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
  
  validation(){
    this.postForm = this.fb.group({
      post_image: ['', Validators.required],
      post_description: ['', Validators.required]
    })
  }

  //Adiciona o post
  //Depois alterar para que o post seja excluído e editado apenas pelo usuário que o cadastrou
  addPost(){
    if(this.postForm.valid){
      this.posts = Object.assign({}, this.postForm.value);

      this.postService.addPost(this.posts).subscribe(
        () => {
          alert("Seu post está pronto!");
          this.router.navigateByUrl('/');
        }, error => {
          console.log(error.error);
        }
      )
    }

  }

}
