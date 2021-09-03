const findAllPaths = graph => {
  const find1Paths = (item) => {
    if (!item.out.length) return [item.id];
    let path = [];
    item.out.forEach((forItem) => {
      let actualItem = graph.find((findItem) => findItem.id === forItem);
      let newArray = findPaths(actualItem);
      newArray.forEach((newArrItem) => {
        if (Array.isArray(newArrItem)) {
          path.push([...newArrItem, item.id]);
        } else {
          path.push([newArrItem, item.id]);
        }
      });
    });
    return path.reverse();
  };
  return find1Paths(graph[0])
}
