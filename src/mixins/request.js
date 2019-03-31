export default {
  data: () => ({
    loading: false
  }),
  methods: {
    async callApi(f) {
      this.loading = true
      await f()
      this.loading = false
    }
  }
}