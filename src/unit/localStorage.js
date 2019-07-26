import Storage from 'web-storage-cache'
// 使用web-storage-cache的好处就是当存储一个对象json字符串的时候，读取非常方便，不用像之前一样先转化为字符串，在转化为json对象。
let localStorage = new Storage();

export function setStorage(key, value) {
  return localStorage.set(key, value);
}
export function getStorage(key) {
  return localStorage.get(key)
}
export function removeStorage(key) {
  return localStorage.delete(key)
}
export function clearStorage() {
  return localStorage.clear()
}
export function setBookObject(filename, key, value) {
  let book = getStorage(`${filename}-info`);
  if (!book) {
    book = {}
  }
  book[key] = value;
  setStorage(`${filename}-info`, book)
}
export function getBookObject(filename, key) {
  let book = getStorage(`${filename}-info`);
  if (book) {
    return book[key]
  } else {
    return null
  }
}
export function setFontSize(filename, fontSize) {
  return setBookObject(filename, 'fontSize', fontSize)
}
export function getFontSize(filename) {
  return getBookObject(filename, 'fontSize')
}
export function setFontFamily(filename, fontFamily) {
  return setBookObject(filename, 'fontFamily', fontFamily)
}
export function getFontFamily(filename) {
  return getBookObject(filename, 'fontFamily')
}
export function setThemes(filename, themename) {
  return setBookObject(filename, 'themes', themename)
}
export function getThemes(filename){
  return getBookObject(filename,'themes')
}
