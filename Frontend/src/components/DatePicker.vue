<template>
  <div id='DateComponent'>
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker in dialog"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            solo
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          scrollable
        >
          <v-btn
            text
            color="primary"
            @click="$refs.dialog.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
  </div>
</template>

<script>
export default {
  props:{
      date: ""
  },
  watch: {
    date: function () {
      this.$emit("SendValue", this.date);
    }
  }
}
</script>

<style scoped>
</style>