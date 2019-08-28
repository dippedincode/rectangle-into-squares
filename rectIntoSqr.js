function sqInRect(lng, wdth) {
  if (lng == wdth) {
    return null;
  }
  if (lng > wdth) {
    return [wdth, lng-wdth, wdth-(lng-wdth), 1];
  } else {
    temp = lng;
    lng = wdth;
    wdth = temp;
    return [wdth, lng-wdth, wdth-(lng-wdth), 1];
  } 
}
module.exports = sqInRect;
