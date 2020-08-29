import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';

import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChooseTagComponentComponent } from './choose-tag-component/choose-tag-component.component';
import { ResultsPageComponent } from './results-page/results-page.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCI6EVaqRT6Df551Bfp4CQdPDRSqrzWnnU",
  authDomain: "ga-web-test.firebaseapp.com",
  databaseURL: "https://ga-web-test.firebaseio.com",
  projectId: "ga-web-test",
  storageBucket: "ga-web-test.appspot.com",
  messagingSenderId: "468811037033",
  appId: "1:468811037033:web:f07b9e20096c4f15d665f8",
  measurementId: "G-Y26S1H4CJS"
};

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    ChooseTagComponentComponent,
    ResultsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
