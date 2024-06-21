const storeOwners = [
    {
      name: 'charles',
      stores: 1,
      location: "AZ",
    },
    {
      name: 'sally',
      stores: 1,
      location: "NM",
    },
    {
      name: 'cassandra',
      stores: 1,
      location: "NM",
    },
    {
      name: 'Danny Shavez',
      stores: 1,
      location: "NM",
    },
  ];
  
  const listNumberOfStores = function () {
    for (let i = 0; i < storeOwners.length; i++) {
      let totalLocations = totalLocations + storeOwners[i].stores;
    }
    return i;
  };
  
  let locations = listNumberOfStores;
  //let totalLocations = 0;
  
  
  function tellMeMyStores() {
    console.log('Hey, can you tell me how many stores you have?');
    if (locations > 0) {
      console.log('Yes, we have ' + locations + ' stores');
    }
  }
  
  function hasStore() {
    for (let i = 0; i < storeOwners.length; i++) {
      let person = storeOwners[i].name;
      let location = storeOwners[i].location;
      console.log(`Yes, ${person} has one in ${location}`);
    }
  
  }


tellMeMyStores();
hasStore();

// let array = [1, 2, 3, 4, 5, 6,];
//  array[1]
//  console.log(array[1]);