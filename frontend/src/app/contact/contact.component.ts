import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpiderWebComponent } from '../shared/spider-web/spider-web.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, SpiderWebComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Your message has been sent to the spirit realm! 👻');
    
    // Reset form
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
