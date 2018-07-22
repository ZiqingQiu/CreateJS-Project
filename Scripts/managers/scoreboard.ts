module managers {
    export class ScoreBoard {
        //Private Instance Variables
        private _lives: number;
        private _score: number;
        private _highScore: number;

        //Public Instance Variables
        public LivesLabel: objects.Label;
        public ScoreLabel: objects.Label;
        public HighScoreLabel: objects.Label;

        //Public Properties
        get Lives(): number {
            return this._lives;
        }

        set Lives(newLives: number) {
            this._lives = newLives;
            this.LivesLabel.text = "Lives: " + this._lives;
        }

        get Score(): number {
            return this._score;
        }

        set Score(newScore: number) {
            this._score = newScore;
            this.ScoreLabel.text = "Score: " + this._score;
        }

        get HighScore(): number {
            return this._highScore;
        }

        set HighScore(newHighScore: number) {
            this._highScore = newHighScore;
            this.HighScoreLabel.text = "High Score: " + this._highScore;
        }
        //Constructor
        constructor() {
            this._initialize();
        }
        //Private Methods
        private _initialize(): void {
            this.LivesLabel = new objects.Label("Lives: 0", "20px", "Consolas", "#FFFF00", 10, 10, false);
            this.ScoreLabel = new objects.Label("Score: 99999", "20px", "Consolas", "#FFFF00", 500, 10, false);
            this.HighScoreLabel = new objects.Label("High Score: 99999", "40px", "Consolas", "#FFFF00", 320, 240, true);

            this.Lives = 5;
            this.Score = 0;
            this.HighScore = 0;
        }


        //Public Methods
        public addScore(score: number): void {

            managers.Game.scoreBoard.Score += score;
            //live +1
            if (managers.Game.scoreBoard.Score % 1000 == 0) {
                managers.Game.scoreBoard.Lives += 1;
                createjs.Sound.play("life");
            }
            if (managers.Game.HighScore < managers.Game.scoreBoard.Score) {
                managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                managers.Game.HighScore = managers.Game.scoreBoard.HighScore;
            }
        }


    }
}