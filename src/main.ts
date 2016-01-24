/// <reference path="../typings/tsd.d.ts" />
/// <reference path="api/module.ts" />
/// <reference path="core/module.ts" />

module App {
    export const NAME: string = "Typegular";
    export const VERSION: string = "0.0.0";
    
    export class Main {
        
        private api: App.IAPI;
        
        private core: App.ICore;
        
        constructor(){
            this.api = new App.API();
            var version = this.api.getVersion();
            console.log(version);
            document.write(version);
            alert(version);  
            
            this.core = new App.Core();
            alert(this.core.getVersion());         
        }
    }
    
}

new App.Main();