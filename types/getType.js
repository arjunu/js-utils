const getType = item => Object.prototype.toString.call(item).slice(8, -1);

export default getType;