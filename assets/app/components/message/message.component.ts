import { Message } from "../../models/message.model";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "../../services/message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message-component.html'

})

export class MessageComponent implements OnInit {
    constructor(private messageService: MessageService) { }

    messageS: Message[] = [];
    newContent: String;
    messageAux: Message;

    ngOnInit(): void {
        this.messageService.getMessages()
            .subscribe(
                (sucess: Message[]) => {
                    this.messageS = sucess;
                    console.log(sucess)
                },
                error => console.log(error)
            );
    }

    loadModal(msg: Message) {
        this.messageAux = msg;
        this.newContent = msg.content;
    }

    onEdit() {
        this.messageService.editMessage(this.newContent, this.messageAux.messageId)
            .subscribe(
                sucess => {
                    console.log(sucess)
                    document.location.reload();
                },
                error => console.log(error)
            );
    }

    onDelete(msg: Message) {
        this.messageService.deleteMessage(msg)
            .subscribe(
                sucess => console.log(sucess),
                error => console.log(error)
            );
    }
}