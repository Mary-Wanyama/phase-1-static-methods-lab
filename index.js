class Formatter {
  //add static methods here
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1, str.length).toLowerCase()
  }
  static sanitize(){
    return str.replace(/[^A-Za-z0-9-']+/g, "")
  }
  static titleize(){
    if (str==='from', str==='the', str==='a', str==='an', str==='of', str==='at', str==='by', str==='from') {
      str = str.split('')
      str = str[0].toUpperCase() + str.slice(1, str.length).toLowerCase()
      return str
    }
    else{
      return str.toUpperCase()
    }
  }
}
