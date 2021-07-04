function HTMLElements(str) { 
  let openTag, closeTag, stringObj;

  openTag = str.match(/<\w+>/g)
  closeTag = str.match(/(<\/\w+>)/g).reverse()
  stringObj = []

  for (const i in openTag) {
    parse = false
    
    for (k in closeTag) {
      if (openTag[i] === closeTag[k].replace("/", "")) {
        closeTag.splice(k, 1)
        parse = true
      }
    }

    if (parse == false) {
      stringObj.push(openTag[i].replace(/<|>/g, ''))
    }
  }

  long = stringObj.length
  return long > 0 ? stringObj[0] : true
  
}
   
// keep this function call here 
console.log(HTMLElements(readline()));
