const properties = require(`../properties/test.properties`)

let getCategories = async () => {
  const url = `${properties.serviceUrl}/categories`
  let result

  await fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => {
      console.log("Response : ", json)
      result = json
    })
    .catch((error) => console.error(error))
  return result
}

module.exports.getCategories = getCategories
