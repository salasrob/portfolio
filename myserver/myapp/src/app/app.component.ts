import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  private ROOT_URL = "http://localhost:4000/resume";


constructor(private http:HttpClient) {}
  get(){
    return this.http.get(this.ROOT_URL, {...Option, responseType: 'blob' })
    .subscribe(data => {
      console.log(data);
      const url = window.URL.createObjectURL(data);
      window.open(url);
    }
 )   

  }
}
