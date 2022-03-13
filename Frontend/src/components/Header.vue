<template>
    <v-dialog
      ref="dialog"
      max-width="500px"
    >
      <template v-slot:activator="{ on, attrs }">
        <div class = "frow">   
        <div class="title">{{title}}</div>
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          New
        </v-btn>
        </div>
      </template>
      <v-card>
        <v-card-text>
          <v-container>
              CREATE NOTE!!
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="$refs.dialog.save()"
          >
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}

</script>

<style>
.title {
    font-size: 5em;
}

.fbutton{
    margin-left: 1.5em;
    justify-content: flex-end;
    display: flex;
}

.frow{
    display: flex;
    padding: 1em 1em 1em 1em;
}
</style>