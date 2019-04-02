import PageMixins from 'mixins/paginate'

export default {
  mixins: [PageMixins],
  data: () => ({
    loading: false
  }),
  methods: {
    async callApi(f) {
      this.loading = true
      await f()
      this.loading = false
    }
  },
  computed: {
    requestBody() {
      return _.assign({}, this.search, this.paginate)
    }
  }
}