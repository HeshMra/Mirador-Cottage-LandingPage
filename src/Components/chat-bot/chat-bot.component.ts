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
    hi: 'Hello! please call us for more info',
    hello: 'Hello! please call us for more info',
    pricing: 'Hello! please call us for more info',
    help: 'Hello! please call us for more info',
    default: "I'm sorry, I didn't understand that. Can you rephrase?",
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
