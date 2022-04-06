const createList = () => {
  const result = []
  for (let i = 0; i < 50; i++) {
    result.push({
      title: `标题${i}`,
      author: `作者${i}`,
      pageviews: 'hihi',
      status: 0,
      display_time: new Date()
    })
  }

  return result
}

export default createList
