const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = process.env.REACT_APP_API_TOKEN || '';

type RequestBody = {
  query: string
  count?: number
}

export async function fetchAddresses<R>(params: RequestBody) {

  const options: RequestInit = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + token
    },
    body: JSON.stringify(params)
  }

  const response = await fetch(url, options)
  const result: R = await response.json()
  return result
}