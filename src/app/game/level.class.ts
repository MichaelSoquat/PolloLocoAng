import { Background } from "./background.class";
import { Cloud } from "./cloud.class";
import { Chicken } from "./enemies.class";

export class Level {
    background = [new Background('./assets/img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
    new Background('./assets/img/5.Fondo/Capas/3.Fondo3/2.png', - 719),
    new Background('./assets/img/5.Fondo/Capas/2.Fondo2/2.png', -719),
    new Background('./assets/img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),
    new Background('./assets/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
    new Background('./assets/img/5.Fondo/Capas/3.Fondo3/1.png', 0),
    new Background('./assets/img/5.Fondo/Capas/2.Fondo2/1.png', 0),
    new Background('./assets/img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
    new Background('./assets/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
    new Background('./assets/img/5.Fondo/Capas/3.Fondo3/2.png', 719),
    new Background('./assets/img/5.Fondo/Capas/2.Fondo2/2.png', 719),
    new Background('./assets/img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),
    new Background('./assets/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1438),
    new Background('./assets/img/5.Fondo/Capas/3.Fondo3/1.png', 1438),
    new Background('./assets/img/5.Fondo/Capas/2.Fondo2/1.png', 1438),
    new Background('./assets/img/5.Fondo/Capas/1.suelo-fondo1/1.png', 1438),
    new Background('./assets/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
    new Background('./assets/img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
    new Background('./assets/img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
    new Background('./assets/img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3),
    new Background('./assets/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 4),
    new Background('./assets/img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 4),
    new Background('./assets/img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 4),
    new Background('./assets/img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 4)];

    chicken = [new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    ]
    cloud = [new Cloud('./assets/img/5.Fondo/Capas/4.nubes/1.png', 0),
    new Cloud('./assets/img/5.Fondo/Capas/4.nubes/2.png', 720),
    new Cloud('./assets/img/5.Fondo/Capas/4.nubes/1.png', 720 * 2),
    new Cloud('./assets/img/5.Fondo/Capas/4.nubes/2.png', 720 * 3),
    new Cloud('./assets/img/5.Fondo/Capas/4.nubes/1.png', 720 * 4),
    new Cloud('./assets/img/5.Fondo/Capas/4.nubes/2.png', 720 * 5),
    new Cloud('./assets/img/5.Fondo/Capas/4.nubes/1.png', 720 * 6)
    ];

}