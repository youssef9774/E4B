import { Component} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './poste-create.component.html',
  styleUrls: ['./poste-create.component.css']
})

export class PosteCreateComponent {

  entredValue ='';
  ex1 = '';
  ex ='vide';
  newPost ='nothing';
  onAddpost() {
    alert("allert done")

    this.newPost = this.entredValue
    this.ex = this.ex1
  };

}
