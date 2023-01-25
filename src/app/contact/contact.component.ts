import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  endpoint: string = "https://www.thurmontpaving.com/assets/other/sendEmail.php";

  public contactForm = this.formBuilder.group({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private httpClient: HttpClient
    ) { }

  ngOnInit() {
  }

  public onSubmit(): void {

    console.log(JSON.stringify(this.contactForm.value))
    this.httpClient.post(this.endpoint, this.contactForm.value).subscribe({
          next: __data => {
            this.toastr.success('Message sent, thank you.');
            this.contactForm.reset();
        },
        error: error => {
            this.toastr.error('Sorry we were unable to send your message at this time.');
            console.error('There was an error!', error);
        }
    })

  }

}
