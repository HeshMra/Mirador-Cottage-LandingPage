import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss'
})
export class ChatBotComponent {

  isChatOpen = false;
  userInput = '';
  messages: { sender: string; text: string }[] = [
    { sender: 'bot', text: 'Hi! How can I help you today?' },
  ];

  // Predefined responses
  responses: { [key: string]: string } = {
    hi: 'Hello! What is your first name?',
    hello: 'Hello! What is your name?',
    madhavee:'Ahh sudu manika, kawada bn?',
    'chuttak kawa':'ado thota echchara kanna puluwannm mata kochcra kanna puluwanda??..methanaa',
    pricing: 'Our pricing details can be found on the Pricing page.',
    help: 'Sure, let me know what you need help with!',
    default: "I'm sorry, I didn't understand that. Can you rephrase?",
    contact: 'Call us - 099958555.',

  };

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  processMessage() {
    if (this.userInput.trim()) {
      const userMessage = this.userInput.trim().toLowerCase();
      this.messages.push({ sender: 'user', text: this.userInput });
      this.userInput = '';

      // Match the user's input to a predefined response
      const reply =
        this.responses[userMessage] || this.responses['default'];
      this.messages.push({ sender: 'bot', text: reply });
    }
  }

}
