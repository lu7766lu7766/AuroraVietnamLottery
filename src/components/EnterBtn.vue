<template>
  <v-ons-list-item>
    <div class="right">
      <v-ons-button :disabled="isDisabled"
                    @click="$emit('click')"
                    modifier="cta"
                    style="margin: 6px 0">Enter
      </v-ons-button>
    </div>
  </v-ons-list-item>
</template>

<script>
  export default {
    props: {
      isDisabled: {
        type: Boolean,
        required: true
      }
    }
  }
</script>