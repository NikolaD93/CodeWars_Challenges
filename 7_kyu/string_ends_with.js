const solution = (str, ending) => {
  //! could use endsWith() method, but it's too simple :)

  return str.substring(str.length - ending.length, str.length) === ending
    ? true
    : false;
};
