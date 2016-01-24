/// <reference path="../../main.ts" />

module App {
    
    export class Core implements ICore {
        
        getVersion(): string {
            return App.VERSION;
        }
    }
}