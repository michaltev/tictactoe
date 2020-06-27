export class Statuses {
    public static get WAITING_FOR_SECOND_PLAYER():string { return "waiting for the second player to join"; }
    public static get PLAYING():string { return "playing a game"; }  
    public static get TIE():string { return "the game ended with a tie"; }
    public static get X_WON():string { return "X won the last game"; }  
    public static get O_WON():string { return "O won the last game"; }   
    public static get INITIAL():string { return "No Current Game"; }
}