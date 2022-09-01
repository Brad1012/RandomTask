function GetValue() {
    var parameter = document.querySelector('input[name="type"]:checked').value;
    var crewSize = document.querySelector('input[name="select"]:checked').value;
    if (parameter === "shortEasy")
      shortEasy(crewSize);
    else if (parameter === "shortHard")
      shortHard(crewSize);
    else if (parameter === "longEasy")
      longEasy(crewSize);
    else if (parameter === "longHard")
      longHard(crewSize);
    else
      PVP(crewSize);
  }
  
  function shortEasy(crewSize) {
    shortEasySolo = [
      ["shortEasySolo"],
      ["You can only walk side to side for 30 seconds, like a crab!"],
      ["Take a nap on your/someones boat for 10 seconds. You've earned it."],
      ["You've had a long day, reward yourself and down a nice grog!"],
      ["Poseidon is getting annoyed, calm him down by throwing 1 piece of loot into the sea."],
      ["Sword Lord! You can only move by using sword hops for 30 seconds."],
      ["Is that a ship? Climb the crows nest of the nearest ship and ring the bell."],
      ["Make a nice drawing on the map."],
      ["Halt! Drop the anchor!"],
      ["Time out!, Sit on the steps of the nearest ship for 20 seconds."],
      ["Outfit change, go to the clothing chest and press randomise."]]
  
    shortEasyCrew = [
      ["shortEasyCrew"],
      ["You can only walk side to side for 30 seconds, like a crab!"],
      ["Take a nap on your/someones boat for 10 seconds. You've earned it."],
      ["You've had a long day, reward yourself and down a nice grog!"],
      ["Poseidon is getting annoyed, calm him down by throwing 1 piece of loot into the sea."],
      ["Sword Lord! You can only move by using sword hops for 30 seconds."],
      ["Is that a ship? Climb the crows nest of the nearest ship and ring the bell."],
      ["Make a nice drawing on the map."],
      ["Halt! Drop the anchor!"],
      ["Time out!, Sit on the steps of the nearest ship for 20 seconds."],
      ["Outfit change, go to the clothing chest and press randomise."]
    ]
  
  if (crewSize === "option-1") {
    var choice = Math.floor(Math.random() * shortEasySolo.length);
    document.getElementById("task-text").innerHTML = shortEasySolo[choice][0];
  }
  else {
    var choice = Math.floor(Math.random() * shortEasyCrew.length);
    document.getElementById("task-text").innerHTML = shortEasyCrew[choice][0];
  }
  document.getElementById('tesk-text').scrollIntoView()
  }
  
  
  function shortHard(crewSize) {
    shortHardSolo = [
      ["shortHardSolo"],
      ["shortHardSolo test"]]
  
    shortHardCrew = [
      ["shortHardCrew"],
      ["shortHardCrew test"]]
  
    if(crewSize === "option-1") {
      var choice = Math.floor(Math.random() * shortHardSolo.length);
    document.getElementById("task-text").innerHTML = shortHardSolo[choice][0];
      }
      else{
          var choice = Math.floor(Math.random() * shortHardCrew.length);
          document.getElementById("task-text").innerHTML = shortHardCrew[choice][0];
      }
      document.getElementById('task-text').scrollIntoView()     
    }
  
  function longEasy(crewSize) {
    longEasySolo = [
      ["longEasysolo"],
      ["longEasySolo test"]]
  
    longEasyCrew = [
      ["longEasyCrew"],
      ["longEasyCrew test"]]
  
    if(crewSize === "option-1") {
      var choice = Math.floor(Math.random() * longEasySolo.length);
    document.getElementById("task-text").innerHTML = longEasySolo[choice][0];
      }
      else{
          var choice = Math.floor(Math.random() * longEasyCrew.length);
          document.getElementById("task-text").innerHTML = longEasyCrew[choice][0];
      }
      document.getElementById('task-text').scrollIntoView()     
    }
  
  function longHard(crewSize) {
    longHardSolo = [
      ["longHardsolo"],
      ["longHardSolo test"]]
  
    longHardCrew = [
      ["longHardCrew"],
      ["longHardCrew test"]]
  
    if(crewSize === "option-1") {
      var choice = Math.floor(Math.random() * longHardSolo.length);
    document.getElementById("task-text").innerHTML = longHardSolo[choice][0];
      }
      else{
          var choice = Math.floor(Math.random() * longHardCrew.length);
          document.getElementById("task-text").innerHTML = longHardCrew[choice][0];
      }
      document.getElementById('task-text').scrollIntoView()     
    }
  
  
  function PVP(crewSize) {
    pvpSolo = [
      ["pvpSolo"],
      ["Get 3 kills with the Flinklock."],
      ["Get 3 kills with the Sword."],
      ["Get 3 kills with the Blunderbuss."],
      ["Get 3 kills with the Eye of Reach."],
      ["Get a kill with a Blunderbomb"],
      ["pvpSolo test"]]
  
    pvpCrew = [
      ["pvpCrew"],
      ["pvpCrew test"]]
  
    if(crewSize === "option-1") {
      var choice = Math.floor(Math.random() * pvpSolo.length);
    document.getElementById("task-text").innerHTML = pvpSolo[choice][0];
      }
      else{
          var choice = Math.floor(Math.random() * pvpCrew.length);
          document.getElementById("task-text").innerHTML = pvpCrew[choice][0];
      }
      document.getElementById('task-text').scrollIntoView() 
  }
  
  
  
  
