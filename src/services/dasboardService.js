function dasboardService() {
  return api => ({
    async getDashboard(userId) {
      return [{ userId }, { userId }]
    },
  })
}

export default dasboardService()
