import apisauce from 'apisauce'
import ENV from 'react-native-config'
import dashboardService from './dasboardService'

function API_CLIENT(baseURL = ENV.URL) {
  const api = apisauce.create({
    baseURL,
    timeout: 3000,
  })

  const setAuthorization = token => {
    api.setHeaders({
      authorization: token,
    })
  }

  const serviceProvider = (services = []) =>
    services.map(service => service(api)).flat()

  return {
    setAuthorization,
    ...api,
    ...serviceProvider([dashboardService]),
  }
}

export default API_CLIENT
