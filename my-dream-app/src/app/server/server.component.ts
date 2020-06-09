import { Component } from '@angular/core';

@Component({
    selector: 'app-server', 
    // can also be attribute [app-server] in div
    // or class .app-server <div class = "app-servers"
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}