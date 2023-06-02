function hideIntrucstion(event) {
  var instructions = document.getElementById("instructions");
  var plusIcon = document.getElementById("plusIcon");
  var test = document.getElementById("test");
  if (event.code === "Space") {
    instructions.style.display = "none";
    plusIcon.style.display = "flex";
    var randomValue = (Math.floor(Math.random() * 5) + 1) * 1000;
    console.log(randomValue);
    setTimeout(() => {
      plusIcon.style.display = "none";
      test.style.display = "flex";
      userTesting(10);
    }, randomValue);
  }
}

function userTesting(totalQuestion) {
  var totalCorrect = 0;
  var first, second;
  do {
    first = Math.floor(Math.random() * 9) + 1;
    second = Math.floor(Math.random() * 9) + 1;
  } while (first === second);

  var sizeOne = Math.floor(Math.random() * 50) + 50;
  var sizeTwo = Math.floor(Math.random() * 61) + 45;

  document.getElementById("firstNum").innerHTML = first;
  document.getElementById("firstNum").style.fontSize = sizeOne + "px";
  document.getElementById("secondNum").innerHTML = second;
  document.getElementById("secondNum").style.fontSize = sizeTwo + "px";
  var isBiggerFont = sizeOne > sizeTwo ? true : false;
  var time1 = Date.now();
  var counter = 1;
  console.log("No, First, Second, FFS > RFS, UserInput, ReactionTime(ms), T/F");
  document.addEventListener("keydown", function (event) {
    var time2 = Date.now();
    var reactionTime = time2 - time1;
    if (first > second && event.code === "ArrowRight") {
      if (counter <= totalQuestion) {
        console.log(
          counter +
            ", " +
            first +
            ", " +
            second +
            ", " +
            isBiggerFont +
            ", " +
            ">, " +
            reactionTime +
            ", T"
        );
        totalCorrect++;
      }
    } else if (first > second && event.code === "ArrowLeft") {
      if (counter <= totalQuestion) {
        console.log(
          counter +
            ", " +
            first +
            ", " +
            second +
            ", " +
            isBiggerFont +
            ", " +
            "<, " +
            reactionTime +
            ", F"
        );
      }
    } else if (first < second && event.code === "ArrowLeft") {
      if (counter <= totalQuestion) {
        console.log(
          counter +
            ", " +
            first +
            ", " +
            second +
            ", " +
            isBiggerFont +
            ", " +
            "<, " +
            reactionTime +
            ", T"
        );
        totalCorrect++;
      }
    } else if (first < second && event.code === "ArrowRight") {
      if (counter <= totalQuestion) {
        console.log(
          counter +
            ", " +
            first +
            ", " +
            second +
            ", " +
            isBiggerFont +
            ", " +
            ">, " +
            reactionTime +
            ", F"
        );
      }
    }
    if (counter < totalQuestion) {
      counter++;
      var newRandom1, newRandom2;
      do {
        newRandom1 = Math.floor(Math.random() * 9) + 1;
        newRandom2 = Math.floor(Math.random() * 9) + 1;
      } while (
        newRandom1 == newRandom2 ||
        newRandom1 == first ||
        newRandom2 == second
      );
      first = newRandom1;
      second = newRandom2;
      var sizeOne = Math.floor(Math.random() * 50) + 50;
      var sizeTwo = Math.floor(Math.random() * 61) + 45;
      document.getElementById("firstNum").innerHTML = first;
      document.getElementById("firstNum").style.fontSize = sizeOne + "px";

      document.getElementById("secondNum").innerHTML = second;
      document.getElementById("secondNum").style.fontSize = sizeTwo + "px";

      isBiggerFont = sizeOne > sizeTwo ? true : false;
      time1 = Date.now();
    } else {
      test.style.display = "none";
      var nextInstruction = document.getElementById("nextInstruction");
      nextInstruction.style.display = "flex";D
    }
  });
}
document.addEventListener("keydown", hideIntrucstion);
