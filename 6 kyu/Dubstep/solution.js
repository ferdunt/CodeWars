function songDecoder(song) {
  // 💬 Create a regex to find 'WUB'
  const myRegex = /(WUB)+/g;

  // 💬 Replace 'myRegex' with ' '
  const decoder = song.replace(myRegex, ' ').trim();

  return decoder;
}

const result = songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB');
console.log(result); // 🐣 "WE ARE THE CHAMPIONS MY FRIEND"
