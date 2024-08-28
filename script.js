let player = {
    name: "William",
    health: 10,
}

while (player.health > 0)
{
    // Handle updating the player's state
    let random = Math.random()
    if (random < 0.5) {
        console.log("Player taking damage")
        player.health = player.health - 1
    }

    // Update the display
    console.log("Player Health:")
    console.log(player.health)
}

console.log("Player is dead")
