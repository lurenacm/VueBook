// 将fontSize，them，fontFamily，写入缓存

import Storage from 'web-storage-cache'

const localStorage = new Storage()

function setStorage(key, value) {
    localStorage.set(key, value)
}

function getStorage(key) {
    return localStorage.get(key)
}

function removeStorage(key) {
   return localStorage.delete(key)
}

function clearStorage() {
    localStorage.clear()
}

// 写入语言国际化的缓存
function saveLang(lang) {
    localStorage.set( 'selectLang', lang)
}

function getLang (lang) {
   return localStorage.get(lang)
}

// 每本电子书保存的设置可能不同，设置成一个对象。fileName表示写入的不同电子书
function setBook(fileName, key, value) {
    let book = getStorage(`${fileName}-info`)
    if (!book) {
       book= {} 
    }
    book[key] = value
    setStorage(`${fileName}-info`, book)
}

function getBook(fileName, key) {
    const book = getStorage(`${fileName}-info`)
    if (book) {
        return book[key]
    } else {
        return null
    }
}

// fontFamily 写入缓存，
function saveFontFamily(fileName, font) {
    setBook(fileName, 'fontFamily', font)
}

function getFontFamily(fileName) {
    return getBook(fileName, 'fontFamily')
}

// fontSize 写入缓存 
function saveFontSize(fileName, font) {
    setBook(fileName, 'FontSize', font)
}

function getFontSize(fileName) {
    return getBook(fileName, 'FontSize')
}

export {
    setStorage,
    getStorage,
    removeStorage,
    clearStorage,
    setBook,
    getBook,
    saveFontFamily,
    getFontFamily,
    saveFontSize,
    getFontSize,
    saveLang,
    getLang
}