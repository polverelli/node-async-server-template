async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

function createLog(type, description) {
  const date = new Date()
  let types = ['default', 'error', 'success', 'warning']
  let typeName = type.toLowerCase()

  if(type === 'default' || !types.includes(type)) {
    typeName = 'log'
  }

  typeName = typeName.charAt(0).toUpperCase() + typeName.substr(1);

  console.log(`${date} - ${typeName}: ${description}`)
}

export { asyncForEach, createLog }
