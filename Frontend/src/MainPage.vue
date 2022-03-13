<template>
    <div>
        <BreadCrumb/>
        <HeaderCustome title="Review notes"/>
        <v-divider/>
        <ListWithFilter/>
    </div>
</template>

<script>
import BreadCrumb from './components/Breadcrumb.vue'
import HeaderCustome from './components/Header.vue'
import ListWithFilter from './components/ListWithFilters.vue'

export default {
    name: "MainPage", 
    components: {
        BreadCrumb,
        HeaderCustome,
        ListWithFilter
    }
}
</script>