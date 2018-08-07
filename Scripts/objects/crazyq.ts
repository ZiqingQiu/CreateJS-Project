/*
* File name: level1_boss.ts
* Author: Ziqing(James) Qiu 300919236
* Last modified by: Ziqing(James) Qiu
* Date last modified: Jul 30 2018
* Description: game object of level1_boss1
* Revision history:
* Aug 6 2018 create file
*/
module objects {
    export class CrazyQ extends objects.GameObject {
        //private instance variables
        private _hp: number;

        //public properties
        //constructor
        constructor() {
            super("crazyq");
            this.Start();   
        } 

        //private methods
        //public methods
        public Reset(): void {
            this.x = config.Screen.WIDTH - this.width;
            this.y = config.Screen.HEIGHT / 5;
            //drift randomly
            this._dx = Math.floor((Math.random() * 2) - 4);
            this._dy = Math.floor((Math.random() * 2) - 1);     
            //reset alpha
            this.alpha = 0;
        }

        public Move(): void {
            this.y += this._dy;
            this.x += this._dx;
        }

        public CheckBounds(): void {
            if ((this.y >= 0 && this.y <= 480) && (this.x >= 0 && this.x <= this.width + config.Screen.WIDTH) )
            {
                if (this.alpha == 0)
                {
                    this.alpha = 1;               
                }
            }
            else
            {
                this.Reset();
            }
        }

        public Start(): void {
            this._hp = 5; 
        }

        public Update(): void {
            this.Move();
            this.CheckBounds();
            this.BulletFire();
        }

        public BulletFire(): void {
            if (this.alpha == 1)
            {
                managers.Game.bulletManager.BulletFire("crazyq_bullet_lv1", this.x, this.y, this.halfHeight);
            }
        }

        public GetHit(hitType: string): void {
            if (this.alpha != 0) {
                //add explosion
                managers.Game.explosionManager.TriggerExplosion("explosion", managers.Game.currentSceneObject, this.x, this.y);
                //points for destroy crazyq
                managers.Game.scoreBoard.addScore(200);
                //update hp
                this._hp -= managers.Game.bulletManager.GetBulletDamange(hitType);;
                if (this._hp <= 0)
                {
                    this.Reset();
                }                
            }
        }

        public getHP(): number {
            return this._hp;
        }
    }
}