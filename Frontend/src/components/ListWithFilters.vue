<template>
    <div>
        <FilterSection @SendTypeInput="GetType" @SendQuickSearch="GetQuickSearch" @SendPriorityInput="GetPriority"
            @SendReporterInput="GetReporter" @SendAssignees="GetAssignees" @SendSection="GetSection" @SendDate="GetDate"/>
        <ListView :type="type" :quicksearch="quicksearch" :priority="priority" :reporter="reporter" :assignees="assignees"
            :section="section" :date="date"/>
    </div>
</template>

<script>
import FilterSection from './FilterSection.vue'
import ListView from './ListView.vue'

export default {
    name:"ListWithFilter",
    components:{
        FilterSection,
        ListView
    },
    data(){
        return {
            type: "",
            quicksearch: "",
            priority: "",
            reporter: "",
            assignees: "",
            section: "",
            date: "",
        }
    },
    methods:{
        GetType: function(param){
            this.type = param
            console.log(param)
        },
        GetQuickSearch: function(param){
            this.quicksearch = param
            console.log(param)
        },
        GetPriority: function(param){
            this.priority = param
        },
        GetReporter: function(param){
            this.reporter = param
            console.log(param)
        },
        GetAssignees: function(param){
            this.assignees = param
            console.log(param)
        },
        GetSection: function(param){
            this.section = param
            console.log(param)
        },
        GetDate: function(param){
            this.date = param
        }
    }
}
</script>