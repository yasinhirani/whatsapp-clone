import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ChatSectionComponent } from './chat-section/chat-section.component';
import { ChatListService } from './chat-list.service';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ChatSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ChatListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
