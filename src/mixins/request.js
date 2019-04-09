import PageMixins from 'mixins/paginate'

export default {
  mixins: [PageMixins],
  methods: {
    async callApi(f) {
      this.$loading()
      try
      {
        await f()
      } catch (e)
      {
        this.$loading.close()
        throw e
      }
      this.$loading.close()
    },
    doSearch(f) {
      this.callApi(f)
    },
    doPageChange(page, f) {
      this.paginate.page = page
      this.callApi(f)
    }
  },
  computed: {
    requestBody() {
      return _.assign({}, this.search, this.paginate)
    }
  }
}