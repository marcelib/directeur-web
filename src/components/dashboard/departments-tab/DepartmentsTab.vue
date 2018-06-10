<template>
  <div class="departments-tab">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('departments.tables.title')">
          <div class="icon-grid-container" @click="fetchDepartments"><div class="icon"><span aria-hidden="true" class="glyphicon glyphicon-refresh" style="font-size: 30px;"></span></div></div>
          <div class="table-responsive">
            <table class="table table-striped table-sm color-icon-label-table">
              <thead>
              <tr>
                <td>{{'departments.tables.headings.departmentName' | translate}}</td>
                <td>{{'departments.tables.headings.departmentDescription' | translate}}</td>
                <td>{{'departments.tables.headings.departmentDirector' | translate}}</td>
                <td align="middle"></td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="department in departments">
                <td>{{department.departmentName}}</td>
                <td>{{department.departmentDescription}}</td>
                <td>{{department.departmentDirector}}</td>
                <td class="width: 20%">
                  <div class="dropdown d-inline-flex" v-dropdown>
                    <button class="btn-sm btn-primary dropdown-toggle" type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown">
                      Options
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <div class="dropdown-menu-content">
                        <div class="dropdown-item"  @click="deleteDepartmentConfirm(department.id)">Remove department
                        </div>
                        <div class="dropdown-item" @click="renameDepartmentConfirm(department.id)">Edit department
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BadgeColumn from '../../tables/BadgeColumn.vue'
  import DepartmentFieldsDefinition from './departmentFieldsDefinition'
  import {mapActions, mapGetters} from 'vuex'
  import {MODAL_TYPES} from '../../../shared/constants'

  Vue.component('badge-column', BadgeColumn)

  export default {
    name: 'DepartmentsTable',

    data () {
      return {
        tableFields: DepartmentFieldsDefinition.tableFields,
        defaultTablePerPage: 6,
      }
    },
    computed: {
      ...mapGetters([
        'departments',
      ]),
    },
    methods: {
      ...mapActions([
        'showModal',
        'fetchDepartments',
        'deleteDepartment',
        'editDepartment',
      ]),
      deleteDepartmentConfirm (departmentId) {
        this.showModal(
          {
            type: MODAL_TYPES.confirm,
            show: true,
            title: 'Delete department',
            text: 'Are you sure you want to delete this department? This will also delete all its employees',
            onConfirm: this.deleteDepartment,
            departmentId: departmentId
          })
      },
      renameDepartmentConfirm (departmentId) {
        this.showModal(
          {
            type: MODAL_TYPES.rename,
            show: true,
            title: 'Rename department',
            text: 'Please type new department name and description',
            onConfirm: function () {},
            departmentId: departmentId,
          })
      },
      changeDepartmentDirectorConfirm (departmentId) {
        this.showModal(
          {
            type: MODAL_TYPES.confirm,
            show: true,
            title: 'Change department director',
            text: 'Pick department director',
            onConfirm: this.fetchDepartments,
            departmentId: departmentId,
          })
      }
    },
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";

  .color-icon-label-table {
    td:first-child {
      min-width: 1rem;
      white-space: nowrap;
    }
  }

  .table-responsive {
    max-height: 30vh;
  }

  .dropdown-menu.show {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .widget-body {
    padding-top: 0;
  }

  .icon-grid-container {
    margin-top: -55px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    position: relative;
    float: right;
    width: 3rem;
    height: 3rem;
    padding: 0 !important;
    margin-bottom: -2rem;

    &:hover {
      color: white;
      background-color: $brand-primary;
      cursor: pointer;
    }
  }
</style>
