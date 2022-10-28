import axios from 'axios'

const API_KEY = 'AIzaSyB5rZvPMZwIyFA1ZIvV2LStzYuDjkDzzSE';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
export const getPictureReference = (city: string) => {
  
  const endpoint = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${city}&key=${API_KEY}&inputtype=textquery&fields=name,photos`

  return axios.get(proxyUrl + endpoint).then((res) => {
    return res.data?.candidates?.[0]?.photos?.[0]?.photo_reference || ''
  })
}
