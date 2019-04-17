<template>
  <el-dialog
      title="Add"
      :visible.sync="visible"
      :modal="false"
      width="60%">
    <div class="form-group row">
      <label class="col-md-3 control-label required">User ID <b>*</b></label>
      <div class="col-md-9">
        <input type="text" class="form-control" v-model="data.userName">
      </div>
    </div>

    <div class="form-group row">
      <label class="col-md-3 control-label required">Password <b>*</b></label>
      <div class="col-md-9">
        <input type="password" class="form-control" v-model="data.password">
      </div>
    </div>

    <div class="form-group row">
      <label class="col-md-3 control-label required">Nick Name <b></b></label>
      <div class="col-md-9">
        <input type="text" class="form-control" v-model="data.nickName">
      </div>
    </div>

    <div class="form-group row">
      <label class="col-md-3 control-label required">Phone <b></b></label>
      <div class="col-md-9">
        <input type="text" class="form-control" v-model="data.phone">
      </div>
    </div>

    <div class="form-group row">
      <label class="col-md-3 control-label required">Role <b>*</b></label>
      <div class="col-md-9 p-t-7">
        <el-radio v-for="(name, val) in $parent.options.Role"
                  v-model="data.roleID"
                  :key="val"
                  :label="val">
          {{ name }}
        </el-radio>
      </div>
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-primary waves-effect waves-light" @click="create">确定</button>
    </div>
  </el-dialog>
</template>

<script>
  import DetailMixins from 'mixins/detail'

  export default {
    mixins: [DetailMixins],
    data: () => ({
      visible: false,
      data: {
        userName: '',
        password: '',
        nickName: '',
        phone: '',
        roleID: ''
      }
    }),
    methods: {
      create() {
        this.callApi(async () =>
        {
          await this.$api.user.add(this.data, {
            s: this.createSuccess,
            f: this.reqFail
          })
        })
      }
    },
    mounted() {
      this.$bus.$on('userListAdd.show', () =>
      {
        this.visible = true
      })
    },
    destroyed() {
      this.$bus.$off('userListAdd.show')
    }
  }
</script>

