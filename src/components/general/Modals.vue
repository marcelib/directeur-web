<template>
  <div>
    <vuestic-modal ref="modal" :show='showModal'
                   :cancelClass="modalCancelClass" :onCancel="onModalCancelWrapper"
                   :okText="modalOkText" :onOk="onModalConfirmWrapper">
      <div slot="title">{{this.modal.title}}</div>

      <div v-if="isErrorModal">
        {{this.modal.text}}
      </div>

      <div v-else-if="isConfirmModal">
        {{ this.modal.text }}
      </div>

      <div v-else-if="isRenameModal">
        <div>
          <div>
            <div>
              {{ this.modal.text }}
            </div>
            <p></p>
            <div class="form-group">
              <div class="input-group">
                <input id="department-name-input" v-model="departmentName" required/>
                <label class="control-label" for="department-name-input">New department name</label><i
                class="bar"></i>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <input id="deparment-desc-input" v-model="departmentDescription" required/>
                <label class="control-label" for="deparment-desc-input">New department
                  description</label><i
                class="bar"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </vuestic-modal>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BadgeColumn from '../tables/BadgeColumn.vue'
  import {mapActions, mapGetters} from 'vuex'
  import VuesticWidget from '../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget'
  import {MODAL_TYPES} from '../../shared/constants'

  Vue.component('badge-column', BadgeColumn)

  export default {
    components: {
      VuesticWidget,
    },
    name: 'AppModals',

    data () {
      return {
        departmentName: '',
        departmentDescription: '',
      }
    },
    computed: {
      ...mapGetters([
        'userData',
        'departments',
        'modal',
        'showModal',
        'departmentId'
      ]),
      isErrorModal () {
        return this.modal.type === MODAL_TYPES.error
      },
      isRenameModal () {
        return this.modal.type === MODAL_TYPES.rename
      },
      isConfirmModal () {
        return this.modal.type === MODAL_TYPES.confirm
      },
      hasNoConfirmButton () {
        return this.modal.type === MODAL_TYPES.error
      },
      modalCancelClass () {
        return this.hasNoConfirmButton ? 'none' : 'btn btn-secondary'
      },
      modalOkText () {
        return this.hasNoConfirmButton ? 'CLOSE' : 'CONFIRM'
      },
    },
    methods: {
      ...mapActions([
        'hideModal',
        'editDepartment'
      ]),
      onModalCancelWrapper () {
        this.departmentName = ''
        this.hideModal()
      },
      onModalConfirmWrapper () {
        if (this.isRenameModal) {
          if (!this.departmentName || !this.departmentDescription) {
            return
          }
          this.editDepartment({
            id: this.departmentId,
            departmentName: this.departmentName,
            departmentDescription: this.departmentDescription
          })
        }
        if (this.hasNoConfirmButton) {
          this.hideModal()
        } else {
          this.modal.onConfirm(this.departmentId)
        }
        this.departmentName = ''
        this.departmentDescription = ''
      },
    },
  }
</script>
