<template>
    <div role="group">
    
        <b-form-input id="input-live" type="text" v-model="name" :state="nameState" aria-describedby="input-live-help input-live-feedback" placeholder="Enter your Name" trim>
    
        </b-form-input>
 
        <b-form-input id="input-live" class="mt-2" type="tel" v-model="tel" :state="telState" aria-describedby="input-live-help input-live-feedback" placeholder="Enter your Telefon" trim>
     
        </b-form-input>
     
        <b-form-input id="input-live" class="mt-2" type="email" v-model="email" :state="emailState" aria-describedby="input-live-help input-live-feedback" placeholder="Enter your E-mail" trim>

        </b-form-input>
    
        <b-form-input id="input-live" type="number" v-model="answer" class="d-none" :state="allRight" aria-describedby="input-live-help input-live-feedback" placeholder="corect or no" trim>
    
        </b-form-input>
    
        <div slot="modal-footer" class="w-100 mt-2">

            <b-button variant="success" class="float-right" @click="addStoreClient()" :disabled="!access">

                Confirm

            </b-button>

        </div>
    
    </div>
</template>

<script>
export default {
    name: 'logSystem',
    access: false,
    computed: {
        nameState() {
            return this.name.length > 2 ? true : false
        },
        telState() {
            return this.tel.slice(0, 1) == "0" && this.tel.length > 8 && this.tel.length < 10 ||
                this.tel.slice(0, 4) == "+373" && this.tel.length > 11 && this.tel.length < 13 ? true : false
        },
        emailState() {
            var reg = /^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/;
            if (reg.test(this.email) == false) {
                return false
            } else {
                return true
            }
        },
        allRight() {
            if (this.nameState && this.telState && this.emailState) {
                this.access = true
                return true
            } else {
                this.access = false
                return false
            }
        },
        addStoreClient() {
            let tempStorage
            if (!localStorage.hasOwnProperty('orders')) {
                let val = JSON.parse(localStorage.getItem('key'))
                tempStorage = [
                    [this.name, this.tel, this.email, val]
                ]
                localStorage.setItem('orders', JSON.stringify(tempStorage))
            } else {
                tempStorage = JSON.parse(localStorage.getItem('orders'))
                let val = JSON.parse(localStorage.getItem('key'))
                tempStorage.push([this.name, this.tel, this.email, val])
                localStorage.setItem('orders', JSON.stringify(tempStorage))
            }

        }
    },
    data() {
        return {
            name: '',
            tel: '',
            email: '',
            answer: ''
        }
    }
}
</script>
