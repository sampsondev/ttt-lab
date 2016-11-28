"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.theboard = [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']];
        this.currentPlayer = 'X';
        this.displayWinner = { thewinner: "A" };
        this.fontColor = "white";
    }
    AppComponent.prototype.switchPlayer = function () {
        if (this.currentPlayer == 'X') {
            this.currentPlayer = 'O';
            return;
        }
        this.currentPlayer = 'X';
    };
    AppComponent.prototype.beenPlayed = function (i, j) {
        if (this.theboard[i][j] == 'X' || this.theboard[i][j] == 'O')
            return 'black';
        return 'white';
    };
    AppComponent.prototype.setValue = function (i, j) {
        this.theboard[i][j] = this.currentPlayer;
    };
    AppComponent.prototype.showWhoWon = function () {
        this.fontColor = 'black';
    };
    AppComponent.prototype.getFontColor = function () {
        return this.fontColor;
    };
    AppComponent.prototype.clickCell = function (i, j) {
        this.setValue(i, j);
        if (this.gameOver()) {
            this.showWhoWon();
            this.displayWinner.thewinner = this.currentPlayer;
            return;
        }
        this.switchPlayer();
    };
    AppComponent.prototype.gameOver = function () {
        var arr = [this.theboard[0][0], this.theboard[0][1], this.theboard[0][2]];
        if (this.theSame(arr))
            return true;
        arr = [this.theboard[1][0], this.theboard[1][1], this.theboard[1][2]];
        if (this.theSame(arr))
            return true;
        arr = [this.theboard[2][0], this.theboard[2][1], this.theboard[2][2]];
        if (this.theSame(arr))
            return true;
        arr = [this.theboard[0][0], this.theboard[1][0], this.theboard[2][0]];
        if (this.theSame(arr))
            return true;
        arr = [this.theboard[0][1], this.theboard[1][1], this.theboard[2][1]];
        if (this.theSame(arr))
            return true;
        arr = [this.theboard[0][2], this.theboard[1][2], this.theboard[2][2]];
        if (this.theSame(arr))
            return true;
        arr = [this.theboard[0][0], this.theboard[1][1], this.theboard[2][2]];
        if (this.theSame(arr))
            return true;
        arr = [this.theboard[2][0], this.theboard[1][1], this.theboard[0][2]];
        if (this.theSame(arr))
            return true;
        return false;
    };
    AppComponent.prototype.theSame = function (arr) {
        // return true;
        var expectedValue = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (expectedValue != arr[i])
                return false;
        }
        return true;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            // template: `this is not working`,
            templateUrl: './app/app.component.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map