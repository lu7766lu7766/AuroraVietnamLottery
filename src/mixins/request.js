export default {
  data: () => ({
    loading: false
  }),
  methods: {
    async callApi(apiKey, data = {}, option = {}) {
      let successF = option.s || option.success || (res => res)
        , failF = option.f || option.fail || (res => {alert(res.msg)})
      this.loading = true
      try
      {
        const res = await this.$callApi(apiKey, data)
        this.loading = false
        return successF(res)
      } catch (e)
      {
        failF(e)
        this.loading = false
        // console.log(e)
      }
    }
  }
}