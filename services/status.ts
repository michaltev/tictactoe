export class Statuses {
    public static get WAITING():string { return "waiting for the second player to join"; }
    public static get PLAYING():string { return "plying a game"; }  
    public static get TIE():string { return "the game ended with a tie"; }
    public static get X_WON():string { return "X won the last game"; }  
    public static get O_WON():string { return "O won the last game"; }   
}