var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* File name: explosion.ts
* Author: Ziqing(James) Qiu 300919236
* Last modified by: Ziqing(James) Qiu
* Date last modified: Jul 30 2018
* Description: defines the game object of explosion
* Revision history:
* June 24 2018 created file
*/
var objects;
(function (objects) {
    var Explosion = /** @class */ (function (_super) {
        __extends(Explosion, _super);
        //public properties
        //constructors
        function Explosion(spriteString) {
            return _super.call(this, spriteString) || this;
        }
        //private methods
        Explosion.prototype._animationEnded = function () {
            this.alpha = 0;
            this.off("animationend", this._animationEnded.bind(this), false);
            this._tarScene.removeChild(this);
        };
        //publlic methods
        Explosion.prototype.Explode = function (tarScene, x, y) {
            this.alpha = 1;
            this.x = x;
            this.y = y;
            this._tarScene = tarScene;
            tarScene.addChild(this);
            this.on("animationend", this._animationEnded.bind(this), false);
        };
        Explosion.prototype.Update = function () {
        };
        return Explosion;
    }(objects.GameObject));
    objects.Explosion = Explosion;
})(objects || (objects = {}));
//# sourceMappingURL=explosion.js.map