function sqInRect(lng, wdth) {
  if (!sqInRect.didrun) {
    if (lng == wdth)  {
      sqInRect.didrun = true;
      return null;
    }
  }
  if (lng == wdth)  {
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
