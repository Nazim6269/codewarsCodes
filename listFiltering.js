function filter_list(l) {
    l.filter((n) => {
        const type = typeof n;
        return `${type}` === 'int';
    })
  }

  console.log(filter_list([1,2,'a','b']));