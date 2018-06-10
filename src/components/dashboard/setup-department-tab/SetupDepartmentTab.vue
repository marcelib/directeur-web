<template>
  <div class="setup-profile-tab dashboard-tab">
    <vuestic-wizard
      :steps="steps"
      wizard-layout="vertical"
      :onWizardComplete="saveDepartmentWrapper"
      :wizard-type="wizardType">
      <div slot="page1" class="form-wizard-tab-content">
        <h4>Type new department name and description</h4>
        <div class="form-group with-icon-right"
             :class="{'has-error': errors.has('name'), 'valid': isFormFieldValid('name')}">
          <div class="input-group">
            <input
              type="text"
              name="name"
              v-model="name"
              v-validate="'required'"
              required="required"/>
            <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
            <i class="fa fa-check valid-icon icon-right input-icon"></i>
            <label class="control-label">Name</label><i class="bar"></i>
            <small v-show="errors.has('name')" class="help text-danger">{{ errors.first('name') }}
            </small>
          </div>
        </div>

        <div class="form-group with-icon-right"
             :class="{'has-error': errors.has('name'), 'valid': isFormFieldValid('description')}">
          <div class="input-group">
            <input
              type="text"
              name="description"
              v-model="description"
              v-validate="'required'"
              required="required"/>
            <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
            <i class="fa fa-check valid-icon icon-right input-icon"></i>
            <label class="control-label">Description</label><i class="bar"></i>
          </div>
        </div>
      </div>
      <div slot="page2" class="form-wizard-tab-content">
        <h4>Select your manager</h4>
        <p>Select employee who will be used as company manager</p>
        <vuestic-simple-select
          label="employee"
          v-model="selectedEmployee"
          name="employee"
          :required="true"
          optionKey="label"
          ref="selectedEmployeeSelect"
          v-bind:options="employeesList">
        </vuestic-simple-select>
      </div>
      <div slot="page3" class="form-wizard-tab-content">
        <h4>Confirm selection</h4>
        <p>
          Confirm that you want to create a department with following parameters:
        </p>
        <h5>
          Name: {{name}}
        </h5>
        <h5>
          Description: {{description}}
        </h5>
        <h5>
          Employee: {{selectedEmployee.label}}
        </h5>
      </div>
      <div slot="wizardCompleted" class="form-wizard-tab-content wizard-completed-tab">
        <h4>Process completed!</h4>
        <p>
          Process has been successfully executed
        </p>
      </div>
    </vuestic-wizard>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import store from 'vuex-store'

  export default {
    name: 'setup-profile-tab',

    props: {
      wizardType: {
        default: 'rich'
      }
    },

    data () {
      return {
        steps: [
          {
            label: 'Step 1. Name and description',
            slot: 'page1',
            onNext: () => {
              this.validateFormField('name')
              this.validateFormField('description')
            },
            isValid: () => {
              return this.isFormFieldValid('name') && this.isFormFieldValid('description')
            }
          },
          {
            label: 'Step 2. Manager',
            slot: 'page2',
            onNext: () => {
              this.$refs.selectedEmployeeSelect.validate()
            },
            isValid: () => {
              return this.$refs.selectedEmployeeSelect.isValid()
            }
          },
          {
            label: 'Step 3. Confirm',
            slot: 'page3'
          }
        ],
        name: '',
        description: '',
        selectedEmployee: '',
      }
    },
    computed: {
      ...mapGetters([
        'employees',
      ]),
      ...mapActions([
        'saveDepartment'
      ]),
      employeesList () {
        return this.employees.map(function (element) {
          return {
            label: `${element.name} ${element.surname}`,
            value: element.id
          }
        })
      },
    },
    methods: {
      isFormFieldValid (field) {
        let isValid = false
        if (this.formFields[field]) {
          isValid = this.formFields[field].validated && this.formFields[field].valid
        }
        return isValid
      },
      validateFormField (fieldName) {
        this.$validator.validate(fieldName, this[fieldName])
      },
      saveDepartmentWrapper () {
        store.dispatch('saveDepartment', {
          departmentName: this.name,
          departmentDescription: this.description,
          departmentDirector: this.selectedEmployee.label
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins/breakpoints";

  .form-group {
    min-width: 200px;
    max-width: 360px;
    width: 80%;
  }

  .wizard-completed-tab {
    @include media-breakpoint-up(md) {
      margin-top: -$tab-content-pt;
    }
  }

</style>
