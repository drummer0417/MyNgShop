import { inject, Injectable, signal } from '@angular/core';
import { Article } from './article.model';
import { Observable } from 'rxjs';
import {
  collection,
  collectionData,
  Firestore,
  doc,
  addDoc,
  deleteDoc,
  DocumentReference,
  query,
  querySnapshotFromJSON,
} from '@angular/fire/firestore';
import { AngularFirestoreCollection, CollectionReference, DocumentData } from '@angular/fire/compat/firestore';
import { User } from '../auth/user.model';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class ArtikelService {
  private firestore = inject(Firestore);
  private auth = inject(Auth);

  // private auth = inject(Auth);
 
   users:User[] = [];
   queryUser?:string;

  loggedInUser?: string = ('');  
  // public allUsers = this.users.asReadonly();

 initUser(): void {
    const loggedInUser = this.auth.currentUser?.uid;
    console.log('uid.: ' + loggedInUser);
    this.loggedInUser = loggedInUser;
    
    // const userId = 'T06GqDRGYqBTNKE37vnQ';
    const productsRef = collection(this.firestore, 'Users');
    // const productsRef = collection(this.firestore, 'Users', userId, 'Shops');
    
    collectionData(productsRef, { idField: 'id' })
    .subscribe((data:any) => {
      this.users = data;
      console.log('Data: ');
      console.log(data);
      console.log('this.users');
      console.log(this.users);
    });
  }
  
 initArticles(): void {
    const loggedInUser = this.auth.currentUser?.uid;
    console.log('uid.: ' + loggedInUser);
    this.loggedInUser = loggedInUser;
    
    // const userId = 'T06GqDRGYqBTNKE37vnQ' ;
    const userId = !this.queryUser ? 'unknown' : this.queryUser;
    // const productsRef = collection(this.firestore, 'Users');
    const productsRef = collection(this.firestore, 'Users', userId, 'Articles');
    console.log('op zoek naar articles for user: ' + userId);
    
    collectionData(productsRef, { idField: 'id' })
    .subscribe((data:any) => {
      this.users = data;
      // console.log('Data: ');
      // console.log(data);
      console.log('this.users');
      console.log(this.users);
    });
  }
  
  getQueryUser() {
    console.log('in getQueryUser');
     
     this.users.forEach((user:User) => {
      console.log(user);
      
        if (user.firebaseUID === this.loggedInUser) {
          this.queryUser = user.id;
          console.log('gevonden: ' + this.queryUser);
        }         
      }) 
  }
      
  // addArticle(article: { omschrijving: string; aantal: number }) {
  //   return null;
  // // addArticle(article: { omschrijving: string; aantal: number }): Promise<any> {
  // //   const productsRef = collection(this.firestore, 'spullen');
  // //   return addDoc(productsRef, article);
  // }

  // async deleteArticle(docId: string) {
  //   // 1. Maak een referentie naar het specifieke document
  //   // const docRef = doc(this.firestore, 'spullen', docId);

  //   // try {
  //   //   // 2. Verwijder het document
  //   //   await deleteDoc(docRef);
  //   //   console.log('Document succesvol verwijderd!');
  //   // } catch (error) {
  //   //   console.error('Fout bij het verwijderen van het document: ', error);
  //   // }
  // }
}
