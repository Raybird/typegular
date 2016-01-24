/// <reference path="../../main.ts" />

module App {
    
    export class API implements IAPI {
        
        static NAME: string = "App.API";
        
        getVersion(): string {
            return App.VERSION;
        }
    }
    
}