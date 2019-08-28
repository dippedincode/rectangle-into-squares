function sqInRect(lng, wdth) {
  if (lng == wdth) {
    return lng;
  }
  if (lng < wdth) {
    temp = lng;
    lng = wdth;
    wdth = temp;
  }
  return [wdth].concat(sqInRect(wdth, lng-wdth));
}

module.exports = sqInRect;
