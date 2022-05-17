import { MessageService } from '../../services/message.service';
import { Component } from "@angular/core";
import { Message } from "../../models/message.model";
import { NgForm } from '@angular/forms';
import { TokenStorageService } from "../../services/token-storage.service";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
})

export class MessageInputComponent {
    constructor(private messageService: MessageService, private tokenStorage: TokenStorageService) { }

    onSubmit(form: NgForm) {
        const messageAux = new Message(form.value.myContentngForm, this.tokenStorage.getName());

        this.messageService.addMessage(messageAux)
            .subscribe(
                sucess => {
                },
                error => console.log(error)
            );

        form.resetForm();
    }
}