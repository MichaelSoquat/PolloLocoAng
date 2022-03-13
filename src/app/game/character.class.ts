import { MovableObject } from "./MovableObject.class";

export class Character extends MovableObject {
    constructor() {
        super();
        this.loadImage('./assets/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png');
    }
}