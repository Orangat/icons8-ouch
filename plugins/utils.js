export default {
  getRandomArrayElements (arr, count = 3) {
    var shuffled = arr.slice(0); var i = arr.length; var min = i - count; var temp; var index
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random())
      temp = shuffled[index]
      shuffled[index] = shuffled[i]
      shuffled[i] = temp
    }
    return shuffled.slice(min)
  }
}
