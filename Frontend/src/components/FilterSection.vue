<template>
    <div>
        <div class = "vcontainer">
            <v-col class = "filterItem" >
                <span>&nbsp;</span>
                <v-text-field id="Quicksearch" v-model = "quicksearchInput" placeholder="Quick search" solo></v-text-field>
                <a class = text-decoration-underline v-on:click ="ClearFilter">Clear applied filters</a>
            </v-col>

            <v-col class ="filterItem">
                <label for="button_group">Type</label>
                <v-btn-toggle label="Type" id="button_group" v-model="typeInput">
                    <v-btn mediu>
                        All
                    </v-btn>
                    <v-btn medium>
                        Tasks
                    </v-btn>
                    <v-btn medium>
                        Notes
                    </v-btn>
                </v-btn-toggle>
            </v-col>

            <v-col class ="filterItem">
                <label>Priority</label>
                <v-btn-toggle label="Type" v-model="priorityInput">
                    <v-btn>
                        All
                    </v-btn>
                    <v-btn>
                        Low
                    </v-btn>
                    <v-btn>
                        Medium
                    </v-btn>
                    <v-btn>
                        High
                    </v-btn>
                </v-btn-toggle>
            </v-col>
            <v-col class = "filterItem" >
                <Label>Reporter</Label>
                <v-text-field placeholder="Reporter" v-model="reporterInput" solo></v-text-field>
            </v-col>
            <v-col class = "filterItem" >
                <Label>Assignees</Label>
                <v-text-field placeholder="" v-model="assigneesInput" solo></v-text-field>
            </v-col>
            <v-col class = "filterItem" >
                <Label>Section</Label>
                <v-text-field placeholder="" v-model="sectionInput" solo></v-text-field>
            </v-col>
            <v-col class = "filterItem" >
                <Label>Date</Label>
                <DatePicker @SendValue="SenddateInput" :date="dateInput"></DatePicker>
            </v-col>
        </div>
    </div>
</template>

<script>
import DatePicker from './DatePicker'
import debounce from "lodash.debounce";

export default {
  name: 'FilterSection',
  components: {
      DatePicker
  },
  data(){
      return {
          quicksearchInput: "",
          typeInput: "",
          priorityInput: "",
          reporterInput: "",
          assigneesInput: "",
          sectionInput: "",
          dateInput: "2019-03-02"
      }
  },
  watch:{
      quicksearchInput : function(){
          this.debouncedQucikSearch(this.quicksearchInput)
      },
      typeInput : function(){
          this.$emit("SendTypeInput", this.TypeToString(this.typeInput));
      },
      priorityInput : function(){
          this.$emit("SendPriorityInput", this.PriorityToString(this.priorityInput));
      },
      reporterInput: function(){
          this.debouncedReporter(this.reporterInput)
      },
      assigneesInput: function(){
          this.debouncedAssignees(this.assigneesInput)
      },
      sectionInput: function(){
          this.debouncedSection(this.sectionInput)
      },
  },
  methods: {
      ClearFilter(event){
          this.quicksearchInput = "";
          this.typeInput = "";
          this.priorityInput = "";
          this.reporterInput = "";
          this.assigneesInput = "";
          this.sectionInput = "";
          this.dateInput = "";
      },
      SenddateInput(param){
          this.dateInput = param;
          this.$emit("SendDate", param);
      },
      TypeToString(param){
          switch (param) {
            case 0:
                return "All";
                break;
            case 1:
                return "Task"
                break;
            case 2:
                return "Note";
                break;
        }
      },
      PriorityToString(param){
          switch (param) {
            case 0:
                return "All";
                break;
            case 1:
                return "Low"
                break;
            case 2:
                return "Medium";
                break;
            case 3:
                return "High";
                break;
        }
      },
  },
  created() {
    this.debouncedQucikSearch = debounce((newValue) => {
      this.$emit("SendQuickSearch", this.quicksearchInput);
    }, 1000);

    this.debouncedReporter = debounce((newValue) => {
      this.$emit("SendReporterInput", this.reporterInput);
    }, 1000);

    this.debouncedAssignees = debounce((newValue) => {
      this.$emit("SendAssignees", this.assigneesInput);
    }, 1000);

    this.debouncedSection = debounce((newValue) => {
      this.$emit("SendSection", this.sectionInput);
    }, 1000);
  },
  beforeUnmount() {
    this.debouncedWatch.cancel();
    this.debouncedReporter.cancel();
    this.debouncedAssignees.cancel();
    this.debouncedSection.cancel();
  },
}

</script>

<style>
.rrow{
    display: flex;
}

.searchItem{
    display: inline;
    justify-content: end;
}

.filterItem{
    display: flex;
    flex-direction: column;
}

.vcontainer{
    padding-top: 1em;
    display: flex;
    flex-direction:row;
    justify-content: flex-start;
}

.vcontainerNoPad{
    padding-left: 1em;
    display: flex;
    flex-direction:row;
    justify-content: flex-start;
}

.vcolumn{
    display: flex;
    flex-direction: column;
}
</style>