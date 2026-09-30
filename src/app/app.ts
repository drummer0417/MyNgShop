import { Component, inject, OnInit } from '@angular/core';
import { ArtikelService } from './articles/article.service';
import { Article } from './articles/article.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { getAuth } from '@angular/fire/auth';
import { Router, provideRouter, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}
