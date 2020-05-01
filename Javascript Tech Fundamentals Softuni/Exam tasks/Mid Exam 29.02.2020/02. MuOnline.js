function main(inputString) {
  let separatedInput = inputString[0].split('|');
  let health = 100;
  let bitcoin = 0;
  for (let i = 0; i < separatedInput.length; i++) {
    let separated = separatedInput[i].split(' ')
    if (separated[0] == 'potion') {
      if (health >= 100) {
        continue;
      } else {
        if (health + Number(separated[1]) > 100) {
          console.log(`You healed for ${100-health} hp.`)
          health = 100;
          console.log(`Current health: ${health} hp.`);
        } else {
          health += Number(separated[1]);
          console.log(`You healed for ${separated[1]} hp.`);
          console.log(`Current health: ${health} hp.`);
        }
      }
    } else {
      if (separated[0] == 'chest') {
        bitcoin += Number(separated[1]);
        console.log(`You found ${separated[1]} bitcoins.`);
      } else {
        health -= Number(separated[1]);
        if (health > 0) {
          console.log(`You slayed ${separated[0]}.`);
        } else {
          console.log(`You died! Killed by ${separated[0]}.`);
          let room = i + 1;
          console.log(`Best room: ${room}`);
          break;
        }
      }
    }
  }
  if (health > 0) {
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoin}`);
    console.log(`Health: ${health}`);
  }
}
main(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])
main(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])