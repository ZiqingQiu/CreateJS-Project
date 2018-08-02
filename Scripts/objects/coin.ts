/*
* File name: coin.ts
* Author: Ziqing(James) Qiu 300919236
* Last modified by: Ziqing(James) Qiu
* Date last modified: Jul 30 2018
* Description: defines the game object of coin
* Revision history:
* June 24 2018 created file
*/
module objects {
    export class Coin extends objects.GameObject {
        //Private instance variables

        //Public properties

        //Constructors
        constructor() {
            super("power_up");
            this.Start();
        }


        //Private methods

        //Public methods
        public Reset(): void {
            this.x = -this.halfWidth;
            this.y = config.Screen.HALF_HEIGHT;            
            this.alpha = 1;
        }

        public Move(): void {
            this._dy = Math.floor((Math.random() * 4) - 2);
            this.y += this._dy;
            this.x += this._dx;
        }

        public CheckBounds(): void {
            if (this.x >= (config.Screen.WIDTH - this.halfWidth))
            {
                this.Reset();
            }
        }

        public Start(): void {
            this._dx = 4;
            this.Reset();
        }

        public Update(): void {
            this.Move();
            this.CheckBounds();
        }
    }
}