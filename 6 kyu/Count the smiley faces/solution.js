function countSmileys(faces) {
  // 💬 Create a counter the store valid faces
  let counter = 0;

  // 💬 Create a regex to match any valid face
  const myRegex = /(:|;)+(-|~)?(D|\))+/g;

  // 💬 Loop into 'faces' array
  faces.forEach(face => {
    // 💬 Check if each face match with the regex
    if (face.match(myRegex)) {
      counter++;
    }
  });

  // 💬 Return the faces encountered
  return counter;
}

const result = countSmileys([':D', ':~)', ':$', ';~D', ':)']); // 4;
console.log(result);
