var character = prompt("Tis was the day the astounding _______..." + '\n' + " fill in the blank: prince or princess?");

if (character === "prince") {
  var prince = prompt("Tis was the day the astounding prince took the throne to lead his people. Your majest went to the ______ side" + '\n' + "Fill in the blank: north or south?");
  console.log(prince )
} else {

  var princess = prompt("Tis was the day the astounding princess took the throne to lead her people. Your majesty went to the ______ side" + '\n' + "Fill in the blank: north or south?");


  console.log(princess )
}


if ( princess == "south" || prince == "south"){
  var south = prompt("Your majesty went to the south where the people were hungry without water or food after the war. As the prince/princess saw the hopelessness on the peoples face, he/she grew____ " + '\n' + "Fill in the blank: happy or sad?")
} else { var north = prompt("your majesty went to the north where the people were full of abundace and wealth. As the prince/princess saw all the hope and cheer on the peoples face, she/he grew_____" + '\n' + "Fill in the blank: happy or sad?")
}

if (south == "sad" || north == "sad") {
  var sad = prompt("She/He grew sad and angry thinking about all the people in the south who were dying every day because they were impoverished. Thats when Your majesty thought to join forces with the ______" + '\n' + "Fill in the blank: north or south?")
} else {
  var happy = prompt("She/He grew happy seeing that the people were so happy and abundantly wealthy because she thought it would be a great idea to join forces with the ______, so they could change the conditions after the war." + '\n' + "Fill in the blank: north or south?")
}

if (sad == "south" || happy == "south") {
  var south = prompt("it would be a great idea to join forces with the south because true justice only comes from the bottom. We can work together to build up our resources. Its the only way to get ______" + '\n' + "Fill in the blank: justice or freedom?" )
} else {
  var north = prompt("it would be a great idea to join forces with the north because in order for us to live together in peace, is if those who have abundantly share with those who don't have anything. Its the only way to get ______" + '\n' + "Fill in the blank: justice or freedom?")
}

if (south == "justice" || north == "justice") {
  prompt("Its the only way to get justice. Justice isn't given, its taken by taking control of your own circumstances so your survival or happiness depends on no one other than yourself. We have to help one anther build up our communities. Community doesn't exist unless they are made." )
} else {
  prompt("Its the only way to get freedom. Freedom comes when we remove ourselves from what we have become and live in who we are. Material things come and go and when we have, we are to give. Freedom is a right given to us by birth and taken away when we difine our freedom by things.")
};
