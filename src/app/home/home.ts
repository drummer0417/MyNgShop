import { Component, inject, OnInit } from '@angular/core';
import { ArtikelService } from '../articles/article.service';
import { Article } from '../articles/article.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { getAuth } from '@angular/fire/auth';
import { Router, provideRouter, RouterOutlet } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
   private authService = inject(AuthService);
    private articleService = inject(ArtikelService);
  
    constructor() {
      console.log('logged in:................. ' + this.authService.isLoggedIn());
      // this.authService.login('');
      // this.authService.user$.subscribe((userData) => {
      //     // console.log('userData...');
      //     // console.log(userData);
      // });
    }
  
    form = new FormGroup({
      omschrijving: new FormControl('', { validators: [Validators.required] }),
      aantal: new FormControl('', { validators: [Validators.required] }),
    });
  
    onInitUser() {
      // console.log(this.authService.user$);
  
  
      this.articleService.initUser();
    }
  
    onDeleteArticle() {
      console.log('logged in user');
      console.log(this.articleService.users);
    }
  
    onGetQueryUsert() {
      this.articleService.getQueryUser();
    }
  
    onGetArticles() {
      this.articleService.initArticles();
    }
}
