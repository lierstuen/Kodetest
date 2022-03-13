<template>
  <div>
    <v-breadcrumbs
      :items="items"
      divider=">"
    ></v-breadcrumbs>

  </div>
</template>

<script>
export default {
    name: "BreadCrumb",
    data(){
        return {
            items:[
        {
          text: 'Engagements',
          disabled: false,
          href: '',
        },
        {
          text: 'Microsoft 2021',
          disabled: false,
          href: '',
        },
        {
          text: 'Review notes',
          disabled: true,
          href: '',
        },
      ],
        }
    }
}
</script>