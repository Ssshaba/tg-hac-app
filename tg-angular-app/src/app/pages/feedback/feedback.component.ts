import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  styleUrl: './feedback.component.css',
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent implements OnInit, OnDestroy {
  // создаем стейт через сигнал
  feedback = signal('');

  constructor(private telegram: TelegramService) {
    this.sendData = this.sendData.bind(this);
  }

  ngOnInit(): void {
    this.telegram.MainButton.setText('Отправить сообщение');
    this.telegram.MainButton.hide();
    this.telegram.MainButton.onClick(this.sendData);
  }

  sendData() {
    // отправляем данные в телеграм
    this.telegram.sendData({ feedback: this.feedback() });
  }

  handleChange(event) {
    // изменение стейта при изменении textarea
    this.feedback.set(event.target.value);
    if (this.feedback().trim()) {
      this.telegram.MainButton.show();
    } else {
      this.telegram.MainButton.hide();
    }
  }

  ngOnDestroy(): void {
    this.telegram.MainButton.offClick(this.sendData);
  }
}
