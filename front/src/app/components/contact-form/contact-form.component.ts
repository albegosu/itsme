import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(){
    this.contactForm = new FormGroup({
      user_name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40),
      ]),
      user_email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(45),
        Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      message: new FormControl('',[])
    })
  }

  public sendEmail(e: Event) {
    if(this.contactForm.valid){
      emailjs.sendForm('service_mail', 'contact_template', e.target as HTMLFormElement, 'KF7lsiSCb4zIDvGmU')
      .then((result: EmailJSResponseStatus) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Formulario enviado correctamente.',
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(result.text);
      }, (error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ha ocurrido un error al enviar el formulario de contacto.',
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(error.text);
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Por favor, rellena correctamente todos los campos del formulario.',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }

  checkControl(formcontrolName: string, validator: string): boolean | undefined {
    return this.contactForm.get(formcontrolName)?.hasError(validator) && this.contactForm.get(formcontrolName)?.touched
  }

}
