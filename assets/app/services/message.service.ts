import { Injectable } from "@angular/core";
import { HttpClient as Http, HttpHeaders as Headers } from "@angular/common/http";
import { Message } from "../models/message.model";
import 'rxjs/Rx';
import { Observable } from "rxjs";

const baseUrl = 'http://localhost:3000/message';
const myHeaders = new Headers({ 'Content-Type': 'application/json' });

@Injectable()
export class MessageService {
    private messageSService: Message[] = [];

    constructor(private http: Http) { }

    addMessage(message: Message) {
        this.messageSService.push(message);
        const bodyReq = JSON.stringify(message);

        return this.http.post(baseUrl, bodyReq, { headers: myHeaders })
    }

    getMessages() {
        return this.http.get(baseUrl)
            .map((responseJson: any) => {
                const responseMessages = responseJson.objMessagesFind;
                let formatedMessages: Message[] = [];

                for (let msg of responseMessages) {
                    console.log(msg)
                    formatedMessages.push(new Message(msg.content, msg.user ? msg.user.firstName : 'Admin', msg._id, null));
                }
                this.messageSService = formatedMessages;
                return formatedMessages;
            })
    }

    deleteMessage(message: Message) {
        this.messageSService.splice(this.messageSService.indexOf(message), 1);
        return this.http.delete(baseUrl, { params: { 'id': message.messageId } })
    }

    editMessage(newMessage: String, messageId: String) {
        const bodyReq = JSON.stringify({ 'content': newMessage });
        return this.http.put(`${baseUrl}?id=${messageId}`, bodyReq, { headers: myHeaders })
    }
}