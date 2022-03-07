export const delay = time => new Promise(resolve => setTimeout(resolve, time))

const getSagaByType = (type, sagasProvider, ...args) => [
  type,
  sagasProvider()[type],
  ...args,
]

export const getSagasBinds = ({ data, sagas }, api) =>
  data.map(({ type, action }) => action(...getSagaByType(type, sagas, api)))
