import { Component } from '@angular/core';
import { isBoolean } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MY ToDo-List';
  itemList=[];

add_tolist(input){
  var todo={
  label:input,
  isStriked: false
}
this.itemList.push(todo);
}
strikeThrough(i){
  this.itemList[i].isStriked= true;
}

}
