import PageMixins from 'mixins/paginate'

export default {
  mixins: [PageMixins],
  methods: {
    async callApi(f) {
      this.$loading()
      await f()
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