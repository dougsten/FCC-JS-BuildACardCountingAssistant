let count = 0;

function cc (card) {
  if (card <= 6) {
    count += 1;
  }
  else if (typeof(card) == "string" || card === 10) {
    count -= 1;
  }
  
  if (count <= 0)
  {
    return count + " Hold"
  } 
  else {
    return count + " Bet";
  }
};