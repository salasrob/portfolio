import { Component } from '@angular/core';
import  {jsPDF} from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';

  downloadPDF(){
const doc = new jsPDF();
doc.text('../../', 10, 10);

doc.save('test.pdf');
  }
}
