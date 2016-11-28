import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    // template: `this is not working`,
    templateUrl: './app/app.component.template.html'
    // template: './xxx.html'
}) 
export class AppComponent {

public theboard = [['A','B','C'] ,['D','E','F'] ,['G','H','I'] ];
public currentPlayer = 'X';
displayWinner = {thewinner: "A"};
fontColor = "white";

switchPlayer (): void {
	if(this.currentPlayer=='X') {
		this.currentPlayer='O';
		return;
	}
	this.currentPlayer='X'
}

beenPlayed(i: any, j: any) {
	if(this.theboard[i][j]=='X' || this.theboard[i][j]=='O')
		return 'black';
	return 'white';
}

setValue(i: any,j: any): void {
	this.theboard[i][j] = this.currentPlayer;
}

showWhoWon()  {
	this.fontColor='black';
}

getFontColor(){
	return this.fontColor;
}

clickCell(i : any,j: any): void{
	this.setValue(i,j);
	if(this.gameOver()) {
		this.showWhoWon();
		this.displayWinner.thewinner=this.currentPlayer;
		return;
	}
	this.switchPlayer();
}

gameOver(): boolean {
	var arr = [this.theboard[0][0],this.theboard[0][1],this.theboard[0][2]];
	if(this.theSame(arr))
		return true;
	arr = [this.theboard[1][0],this.theboard[1][1],this.theboard[1][2]];
	if(this.theSame(arr))
		return true;
	arr = [this.theboard[2][0],this.theboard[2][1],this.theboard[2][2]];
	if(this.theSame(arr))
		return true;
	arr = [this.theboard[0][0],this.theboard[1][0],this.theboard[2][0]];
	if(this.theSame(arr))
		return true;
	arr = [this.theboard[0][1],this.theboard[1][1],this.theboard[2][1]];
	if(this.theSame(arr))
		return true;
	arr = [this.theboard[0][2],this.theboard[1][2],this.theboard[2][2]];
	if(this.theSame(arr))
		return true;
	arr = [this.theboard[0][0],this.theboard[1][1],this.theboard[2][2]];
	if(this.theSame(arr))
		return true;
	arr = [this.theboard[2][0],this.theboard[1][1],this.theboard[0][2]];
	if(this.theSame(arr))
		return true;
	return false;
}

theSame(arr: any[]) : boolean {
	// return true;
	var expectedValue = arr[0];
	for(var i =1 ; i < arr.length; i++){
		if(expectedValue!=arr[i])
			return false;
	}
	return true;
}

 }
