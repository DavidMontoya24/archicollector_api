function isNatural(num) {
  const s = num.toString();
  var n = parseInt(s, 10);

  return n >= 0 && n.toString() === s;
}

module.exports = {
  isNatural,
};
