module objects {
    export class Bullet extends objects.GameObject {
        //private instance variables
        //public properties


        //constructors
        constructor(bulletType: string) {
            super(bulletType);
            this.Start();
        }

        //private methods


        //public methods
        public Start(): void {
            this._dx = 0;
            this._dy = -10;
            this.Reset();            
        }

        public Update(): void {
            this.Move();
            this.CheckBounds();
        }

        public Reset(): void {
            this.x = -5000;
            this.y = -5000;

            this.alpha = 0;
        }

        public CheckBounds(): void {
            if (this.y >= 0 && this.alpha == 0)
            {
                this.alpha = 1;
            }

            if (this.y <= -this.height)
            {
                this.Reset();
            }
        }

        public Move(): void {
            this.y += this._dy;
        }

        public DisappearBullet(): void {
            this.Reset();
        }

    }
}