function maskify(secret) {
  let mask = '';

  // 💬 Check if 'secret' is > 4
  if (secret.length > 4) {
    // 💬 Get how many time we need to hide the 'secret'
    const hide = secret.length - 4;
    // 💬 Create # 'hide' times
    mask = '#'.repeat(hide);
    // 💬 Concat the last 4 digits
    mask += secret.substring(hide);
  } else {
    // 💬 Concat the same 'secret'
    mask += secret;
  }

  return mask;
}

const result = maskify('11111'); // 🥚
console.log(result); // 🐣 '#1111'
