const createRouteName = (value) => {
  if (!value || !(typeof value === 'string')) return
  let newValue = ''
  const splitValue = value.replace(/\//g, '-').split('-')
  for (const item of splitValue) {
    if (!item) continue
    const UpperCase = item[0].toLocaleUpperCase('en-US')
    newValue += UpperCase + item.slice(1)
  }

  return newValue
}

export default createRouteName
