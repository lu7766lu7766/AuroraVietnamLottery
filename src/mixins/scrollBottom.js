import ReqMixins from 'mixins/request'

export default {
  mixins: [ReqMixins],
  methods: {
    onBottom() {
      if (this.paginate.page < this.lastPage)
      {
        this.doPageChange(this.paginate.page + 1, this.getDatas)
      }
    }
  },
  mounted() {
    this.$bus.on('onBottom', this.onBottom)
  },
  destroyed() {
    this.$bus.off('onBottom')
  }
}