function makeStory() {
    // comment out the line below once you're sure this page is properly connected
    // to your HTML file.
      //  alert("It works!");

    // get form values
    var storyName = document.getElementById('storyName').value;
    var adjective1 = document.getElementById('adjective1').value.bold().fontcolor("#51acba");
    var adjective2 = document.getElementById('adjective2').value.bold().fontcolor("#51acba");
    var noun1 = document.getElementById('noun1').value.bold().fontcolor("#51acba");
    var noun2 = document.getElementById('noun2').value.bold().fontcolor("#51acba");
    var noun3 = document.getElementById('noun3').value.bold().fontcolor("#51acba");
    var noun4 = document.getElementById('noun4').value.bold().fontcolor("#51acba");
    var noun5 = document.getElementById('noun5').value.bold().fontcolor("#51acba");
    var noun6 = document.getElementById('noun6').value.bold().fontcolor("#51acba");
    var noun7 = document.getElementById('noun7').value.bold().fontcolor("#51acba");
    var pastTenseVerb = document.getElementById('pastTenseVerb').value.bold().fontcolor("green");
    var pluralNoun1 = document.getElementById('pluralNoun1').value.bold().fontcolor("green");
    var pluralNoun2 = document.getElementById('pluralNoun2').value.bold().fontcolor("green");
    var pluralNoun3 = document.getElementById('pluralNoun3').value.bold().fontcolor("green");
    var pluralBodyPart = document.getElementById('pluralBodyPart').value.bold().fontcolor("green");


    // Set title of story.
    var title = storyName;

	var img = document.getElementById('img').innerHTML= '<img src="remote.jpg">';

    // Build story.
    var paragraph1 = "A recent nationwide survey of over one hundred thousand " + adjective1 + " shows that the three articles most often misplaced are a woman's hand " + adjective2 + ",  keys to the " + noun1 + ", and most of all, the videocassette recorder " + noun2 + " The first place to look for your ";
    var paragraph2 = "missing remote is the couch. Check behind the " + noun3 + ", inbetween the " + noun4 + ", and if necessary, get down on your hands and " + noun5 + " and look under the " + noun6 + " or coffee " + noun7 + ". Believe it or not, remotes have been found in such odd";
    var paragraph3 = " places as inside of a " + pastTenseVerb + ", " + pluralNoun1 + " under a pile of magazines, or floating in the bathroom " + pluralNoun2 + ". If you can't find your " + pluralNoun3 + " remote, dont feel bad to bad... at least you don't have to try to figure out how the " + pluralBodyPart + " thing works!";


    // Display story.
    document.getElementById('title').innerHTML = title + img;
    document.getElementById('paragraph1').innerHTML = paragraph1;
    document.getElementById('paragraph2').innerHTML = paragraph2;
    document.getElementById('paragraph3').innerHTML = paragraph3;


}
