import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { StaffService } from 'src/app/services/staff.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class AddBookComponent implements OnInit {

  bookForm!: FormGroup;

  constructor(private service : BookService , private router : Router) { }

  ngOnInit(): void {
    
    this.bookForm = new FormGroup({
      bookId : new FormControl(),
      name : new FormControl(),
      author : new FormControl(),
      publisher : new FormControl(),
      price : new FormControl(),
      // std : new FormControl(),
      // teacher : new FormControl(),
    })
  }

  addBook(){
    let book = {
      bookId: this.bookForm.value.bookId,
      name : this.bookForm.value.name,
      author : this.bookForm.value.author,
      publisher :this.bookForm.value.publisher,
      price :this.bookForm.value.price,
    };

    this.service.addBook(book).subscribe(res=>{
      console.log(res);
      if(res.msg="Add Complete"){
        window.alert("Add Complete");
        this.router.navigate(["/book"])
      }else{
        window.alert("Not Success");
        this.router.navigate(["/book/new"])
      }
      
    })
  }

}
