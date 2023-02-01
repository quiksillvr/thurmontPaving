import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private endpoint: string = "https://www.thurmontpaving.com/assets/other/sendEmail.php";
  private number_to_match = "8410";
  private button_click_delay = 2000;
  public is_disabled: boolean = false;

  public contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    message: ['', Validators.required],
    random_numbers: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private httpClient: HttpClient
    ) { }

  ngOnInit() {
  }

  private enableButton(){
    window.setTimeout(() => this.is_disabled = false, this.button_click_delay);
  }

  public onSubmit(): void {
    // console.log(JSON.stringify(this.contactForm.value))
    this.is_disabled = true;

    if (this.contactForm.value.random_numbers !== this.number_to_match) {
      this.toastr.error("Incorrect number entered, please try again");
      this.enableButton();
      return;
    }

    this.httpClient.post(this.endpoint, this.contactForm.value).subscribe({
          next: __data => {
            this.toastr.success('Message sent, thank you.');
            this.contactForm.reset();
            this.enableButton();
        },
        error: error => {
            this.toastr.error('Sorry we were unable to send your message at this time.');
            console.error('There was an error!', error);
            this.enableButton();
        }
    })

  }

}
