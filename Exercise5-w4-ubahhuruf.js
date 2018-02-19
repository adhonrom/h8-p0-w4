function ubahHuruf(kata) {
  var daftar = 'abcdefghijklmnopqrstuvwxyz';
  var output = '';

  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j < daftar.length; j++) {
      if (kata[i] === daftar[j]) {
        output += daftar[j+1]
      }
    }
  }

  return output;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
