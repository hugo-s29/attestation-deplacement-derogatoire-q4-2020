export const storeData = (data) => {
  localStorage.setItem('attestation-deplacement', JSON.stringify(data))
}

export const getData = () => {
  return JSON.parse(localStorage.getItem('attestation-deplacement'))
}
