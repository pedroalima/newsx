// Functions utils
const getId = (id, elementList) => {
    return elementList.find(element => element.id === id)
}

const getIndex = (id, elementList) => {
    return elementList.findIndex(element => element.id === id)
}

module.exports = { getId, getIndex }