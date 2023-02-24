const removeUrlAnchor = (url) => {
  if (!url.includes("#")) return url;
  return url.slice(0, url.indexOf("#"));
};

// console.log(removeUrlAnchor("www.codewars.com/katas/#about"))
