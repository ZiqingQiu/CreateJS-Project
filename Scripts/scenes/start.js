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
var scenes;
(function (scenes) {
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        //Public Properties
        //Constructor
        function StartScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //Private Methods
        StartScene.prototype._startButtonClick = function () {
            managers.Game.currentScene = config.Scene.PLAY;
        };
        //Public Methods
        //Initialize Game Variables and objects
        StartScene.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            this._welcomeLabel = new objects.Label("Mail Pilot", "60px", "Consolas", "#FFFF00", 320, 240, true);
            this._startButtton = new objects.Button("startButton", 320, 340);
            this.Main();
        };
        StartScene.prototype.Update = function () {
            this._ocean.Update();
        };
        StartScene.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        StartScene.prototype.Main = function () {
            //add the ocean to the scene
            this.addChild(this._ocean);
            //add the welcome label to the scene
            this.addChild(this._welcomeLabel);
            //add the start btn to the scene
            this.addChild(this._startButtton);
            this._startButtton.on("click", this._startButtonClick);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map