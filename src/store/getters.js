const getters = {
    fileName: state => state.book.fileName,
    showTitle: state => state.book.showTitle,
    showSetting: state => state.book.showSetting,
    defFontSize: state => state.book.defFontSize,
    Book: state => state.book.Book,  
    showFontFamily: states => states.book.showFontFamily,
    defaultFontFamily: states => states.book.defaultFontFamily
}

export default getters