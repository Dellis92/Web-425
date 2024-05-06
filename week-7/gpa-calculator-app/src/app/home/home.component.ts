import { Component } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'

  constructor(private fb: FormBuilder)
})

ngOnInit(): void {
  this.transcriptForm=this.fb.group({
    course:[",Validators.required"],
    grade:[",Validators.required"]
  })
}

get form() {return this.transcriptForm.controls;}

saveEntry()=> onsubmit(event)

this.transcriptEntries.push({ course:this.form.course.value, grade: this.form.grade.value});

event?.currentTarget?.reset();

export class HomeComponent {

}
