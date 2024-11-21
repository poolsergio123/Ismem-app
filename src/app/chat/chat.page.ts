import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']

})
export class ChatPage  {
  messages:any =[];
  constructor(private db: AngularFireDatabase) {
    this.db.list("chats/chat1",ref => ref.orderByChild('hora')).valueChanges().subscribe(data=>{
      console.log(data)
      this.messages = data;
    })

   }

   message: string = ''; // Mensaje actual
   msgerForm = document.querySelector(".msger-inputarea");
   msgerInput = document.querySelector(".msger-input");
   msgerChat = document!.querySelector(".msger-chat");

   @ViewChild('inputArea') inputArea!: ElementRef<HTMLInputElement>;

  //  onSubmit(): void {
  //   if (!this.message.trim()) return;
  //   const time = new Date().toLocaleDateString([],{hour:'2-digit',minute:'2-digit'}); // No enviar si el mensaje está vacío
  //   this.messages.push({text: this.message,sent:true,time});
  //   this.message='';
  //   // this.appendMessage(this.PERSON_NAME, this.PERSON_IMG, 'right', this.message);
  //   // this.message = '';  // Limpiar el input
  //   // this.botResponse();
  // }
  sendMessage(){
    if (this.message.trim()!='') {
      const currentdate=new Date();
      let meessage={
        "hora":currentdate.toISOString().slice(0,19).replace("T"," "),
        "usuario":"Paul",
        "mensaje":this.message
      }
      console.log(meessage.hora);
      this.db.list("chats/chat1").push(meessage).then(()=>{
        console.info("Genial!");
      })
    };
  this.message='';
  }



   BOT_MSGS: string[] = [
     "Hi, how are you?",
     "Ohh... I can't understand what you trying to say. Sorry!",
     "I like to play games... But I don't know how to play!",
     "Sorry if my answers are not relevant. :))",
     "I feel sleepy! :("
   ];

//   // Íconos y nombres
   BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
   PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
   BOT_NAME = "BOT";
   PERSON_NAME = "Sajad";
//   onFormSubmit(event: Event): void {
//     event.preventDefault(); // Evitar que la página se recargue
//     if (!this.message.trim()) return;

//     this.appendMessage(this.PERSON_NAME, this.PERSON_IMG, 'right', this.message);
//     this.message = ''; // Limpiar el input
//     this.botResponse();
//   }
      // onSubmit(form: any) {
      //   if (!this.message.trim()) return;
      //           this.appendMessage(this.PERSON_NAME, this.PERSON_IMG, 'right', this.message);
      //   this.message = ''; // Limpiar el input
      //   this.botResponse();
      // }



// // Respuesta del bot
  botResponse(): void {
   const randomIndex = Math.floor(Math.random() * this.BOT_MSGS.length);
   const botMessage = this.BOT_MSGS[randomIndex];
   const delay = botMessage.split(' ').length * 100;
   setTimeout(() => {
     this.appendMessage(this.BOT_NAME, this.BOT_IMG, 'left', botMessage);
   }, delay);
 }

// // Utils

// // Función para obtener elementos
// get<T extends Element>(selector: string, root: Document | Element = document): T {
//   const element = root.querySelector<T>(selector);
//   if (!element) {
//     throw new Error(`El selector "${selector}" no encontró ningún elemento.`);
//   }
//   return element;
// }

// // Función para formatear fecha
  formatDate(date: Date): string {
   const h = "0" + date.getHours();
   const m = "0" + date.getMinutes();
   return `${h.slice(-2)}:${m.slice(-2)}`;
 }
// // Función para generar un número aleatorio
  random(min: number, max: number): number {
   return Math.floor(Math.random() * (max - min) + min);
  }
 appendMessage(
   name: string,
   img: string,
   side: "left" | "right",
   text: string
 ): void {
   const msgHTML = `
     <div class="msg ${side}-msg">
       <div class="msg-img" style="background-image: url(${img})"></div>
       <div class="msg-bubble">
         <div class="msg-info">
           <div class="msg-info-name">${name}</div>
           <div class="msg-info-time">${this.formatDate(new Date())}</div>
         </div>
         <div class="msg-text">${text}</div>
       </div>
     </div>
   `;
   document.querySelector(".msger-chat")!.insertAdjacentHTML("beforeend", msgHTML);
   document.querySelector(".msger-chat")!.scrollTop+=500;
 }



}
