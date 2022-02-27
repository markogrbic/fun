function foo(a) {
    a = btoa(a).match(/.{2}/g);
    let b = '';
    for (let i = a.length - 1; i >= 0; i--) {
      if(i % 2 == 0) {
        b += a[i].split('').reverse().join('');
      }
      b += a[i];
    }
    return b;
  }

function bar(b) {
  let array = b.match(/.{2}/g).reverse();
  let output = '';
  let takeSingle = false;
  for (let i = 0; i < array.length; i++) {
    if (takeSingle) {
      output += array[i];
      takeSingle = false;
    } else {
      output += array[i];
      takeSingle = true;
      i += 1;
    }
  }

  output = atob(output)

  return output;
}
