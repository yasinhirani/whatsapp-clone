import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice1';
  name = "";

  getName(click_name: any){
    this.name = click_name;
    // console.log(click_name);
  }

  // res:any;
  // weather = [
  //   {
  //     name: '',
  //     temp: '',
  //     type: ''
  //   }
  // ]
  // async getWeather(city: any){
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=074da6b6822590cafa8ebc99142b2fcb`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.res = data;
  //   this.weather[0].name = this.res.name;
  //   this.weather[0].temp = this.res.main.temp;
  //   this.weather[0].type = this.res.weather[0].description;
  //   console.log(this.res);
  // }
}
