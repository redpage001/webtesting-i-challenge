module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item && item.name && item.durability && item.enhancement){
    const { enhancement } = item;

    if(enhancement < 20 && enhancement > -1) {
      return {...item, enhancement: enhancement + 1};
    } else if (enhancement === 20) {
      return { message: "Item cannot be enhanced any further." }
    } else {
      return { message: "Nice hacked weapon, cheater." }
    }
  } else {
    return null;
  }
}

function fail(item) {
  if(item && item.name && item.durability && item.enhancement){
    const { enhancement } = item;

    if(enhancement > 16 && enhancement < 20) {
      return { ...item, enhancement: enhancement - 1};
    } else if (enhancement > 14 && enhancement < 17) {
      return { ...item, enhancement: enhancement - 10};
    } else if (enhancement > 4 && enhancement < 15) {
      return { ...item, enhancement: enhancement - 5};
    } else if (enhancement > -1 && enhancement < 5) {
      return { ...item, enhancement: 0};
    } else if (enhancement === 20) {
      return { message: "Item cannot be enhanced any further." }
    } else {
      return { message: "Nice hacked weapon, cheater." }
    }
  } else {
    return null;
  }
}

function repair(item) {
  if(item && item.name && item.durability && item.enhancement){
    const { durability } = item;
    if(durability < 100 && durability > -1) {
      return { ...item, durability: 100 };
    } else if(durability === 100) {
      return { message: "Item is in perfect condition." }
    } else {
      return { message: "Nice hacked weapon, cheater." }
    }
  } else {
    return null;
  }
}

function get(item) {
  return { ...item };
}
