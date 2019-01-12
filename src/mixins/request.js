export default {
  data: () => ({
    loading: false
  }),
  methods: {
    async callApi(apiKey, data = {}, isLoading = true) {
      this.loading = isLoading
      const res = await this.$callApi(apiKey, data)
      this.loading = false
      return res
    }
  }
}