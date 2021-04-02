import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';

  private ROOT_URL = "http://localhost:4000/resume";


constructor(private http:HttpClient) {}
  get(){
    return this.http.get(this.ROOT_URL, {...Option, responseType: 'blob' })
    .subscribe(data => {
      console.log(data);
      const url = window.URL.createObjectURL(data);
      window.open(url);
      saveAs(data, "Rob_Salas_Resume");
    }
 )   

  }
}
