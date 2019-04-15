<template>
  <el-dialog
      title="Edit"
      :visible.sync="visible"
      :modal="false"
      width="60%">
    <div class="form-group row">
      <label class="col-md-3 control-label required">User ID <b>*</b></label>
      <div class="col-md-9">
        <input type="text" class="form-control" readonly v-model="data.userName">
      </div>
    </div>

    <div class="form-group row">
      <label class="col-md-3 control-label required">Password <b>*</b></label>
      <div class="col-md-9">
        <input type="password"
               class="form-control"
               v-model="data.password"
               placeholder="Please keep empty, if you donnot change your pwssword">
      </div>
    </div>

    <div class="form-group row">
      <label class="col-md-3 control-label required">Nick Name <b></b></label>
      <div class="col-md-9">
        <input type="text" class="form-control" v-model="data.nickName">
      </div>
    </div>

    <div class="form-group row">
      <label class="col-md-3 control-label required">Role <b>*</b></label>
      <div class="col-md-9 p-t-7">
        <el-radio v-for="(name, val) in Role"
                  v-model="data.roleID"
                  :key="val"
                  :label="val">
          {{ name }}
        </el-radio>
      </div>
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-primary waves-effect waves-light" @click="update">确定</button>
    </div>
  </el-dialog>
</template>

<script>
  import DetailMixins from 'mixins/detail'
  import libUser from 'lib/User'
  import Role from 'constants/Role'

  export default {
    mixins: [DetailMixins],
    data: () => ({
      user: {},
      visible: false,
      data: {}
    }),
    methods: {
      update() {
        this.callApi(async () =>
        {
          await this.$api.user.update(this.data, {
            s: this.updateSuccess,
            f: this.reqFail
          })
        })
      }
    },
    computed: {
      Role() {
        return [User.anthor, User.admin].indexOf(this.user.userName) > -1
          ? _.pick(this.$parent.options.Role, Role.ADMIN_CODE)
          : this.$parent.options.Role
      }
    },
    mounted() {
      this.$bus.$on('userListEdit.show', data =>
      {
        this.user = new libUser(data)
        this.data = {
          userID: this.user.userID,
          userName: this.user.userName,
          password: '',
          nickName: this.user.nickName,
          roleID: this.user.roleID + ''
        }
        this.visible = true
      })
    },
    destroyed() {
      this.$bus.$off('userListEdit.show')
    }
  }
</script>

