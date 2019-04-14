<template>
  <div>
    <h1>User Manage</h1>
    <el-table
        :data="datas"
        stripe
        style="width: 100%">
      <el-table-column
          type="index"
          :index="indexMethod">
      </el-table-column>
      <el-table-column
          prop="user_name"
          label="User ID"
          width="180">
      </el-table-column>
      <el-table-column
          prop="nick_name"
          label="Nick Name"
          width="180">
      </el-table-column>
      <el-table-column
          prop="created_at"
          label="Created Time">
      </el-table-column>
      <el-table-column
          label="Action"
          width="200">
        <template slot-scope="scope">
          <el-button @click="doEdit(scope.row)" type="primary" size="small" v-if="canEdit(scope.row)">Edit
          </el-button>
          <el-button @click="doDelete(scope.row)" type="danger" size="small" v-if="canDelete(scope.row)">Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import ReqMixins from 'mixins/request'
  import Role from 'constants/Role'
  import libUser from 'lib/User'

  export default {
    mixins: [ReqMixins],
    components: {
      EnterBtn: require('@/EnterBtn').default
    },
    data: () => ({
      options: {
        Role: Role.enum()
      },
      datas: []
    }),
    methods: {
      getDatas() {
        this.$api.user.getList(this.requestBody, {
          s: res =>
          {
            this.datas = res.data
          }
        })
      },
      getTotal() {
        this.$api.user.getListTotal(this.requestBody, {
          s: res =>
          {
            this.paginate.total = res.data.total
          }
        })
      },
      onSearch() {
        axios.all([this.getDatas(), this.getTotal()])
      },
      indexMethod(index) {
        return (this.paginate.page - 1) * this.paginate.perPage + index + 1
      },
      canEdit(data) {
        const user = new libUser(data)
        if ([User.anthor, User.admin].indexOf(user.userName) > -1)
        {
          return (User.userName === User.admin && user.userName === User.admin) || (User.userName === User.anthor)
        }
        return true
      },
      canDelete(data) {
        const user = new libUser(data)
        return [User.anthor, User.admin].indexOf(user.userName) === -1
      },
      doEdit() {

      },
      doDelete() {

      }
    },
    mounted() {
      this.onSearch()
    }
  }
</script>