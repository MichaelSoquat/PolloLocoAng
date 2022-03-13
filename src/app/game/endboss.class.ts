import { MovableObject } from "./MovableObject.class";

export class Endboss extends MovableObject {
    x = 300;
    y = 200;
    constructor() {
        super();
        this.loadImage('./assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png')
    }
}