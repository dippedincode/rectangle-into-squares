function sqInRect(lng, wdth) {
  if (lng == wdth) {
    return null;
  }
  else {
    return [wdth, lng-wdth, wdth-(lng-wdth), 1];
  }
}
module.exports = sqInRect;
