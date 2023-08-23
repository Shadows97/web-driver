import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';  

@Injectable({
	providedIn: 'root'
})
export class SocketService {
	constructor(private socket: Socket) { }

	// emit event
	emitData(data: Object) {
    console.log("Emit")
		this.socket.emit('update_delivery', data);
	} 

	// listen event
	onFetchDelivery() {
		return this.socket.fromEvent('delivery_updated');
	}
}