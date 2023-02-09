const newVar = 'hot'

const itemHeight = (item) => (item.height <= 256 ? item.largeSize : item.smallSize)

const array = [1, 2, 3]

const total = array.reduce((sum, item) => {
	return sum + item
}, 0)

console.log(total)
