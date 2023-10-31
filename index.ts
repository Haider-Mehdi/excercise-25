let alien_color  = 'green'

if(alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points.")

}

if (alien_color === 'red' || alien_color === 'yellow') {
    console.log("You didn't earn any points.")
    // This version will have no output because the alien_color is not 'green'.
}