Vue.component('username-field', {
    template: `
     <div class="product">
        <h1>{{title}}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, eos inventore omnis quaerat quas quisquam
            rerum. Atque delectus dolores exercitationem facilis incidunt minima, neque officia provident quidem,
            sapiente similique soluta!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, eos inventore omnis quaerat quas quisquam
            rerum. Atque delectus dolores exercitationem facilis incidunt minima, neque officia provident quidem,
            sapiente similique soluta</p>
    <user-info-form @form-send="addUserInfo"></user-info-form>
        <div class="username">
            <h2>Username info:</h2>
            <p v-if="!userInfo.length">Create username</p>
            <ul>
                <li v-for="item in userInfo">
                    <p>Name: {{item.firstName}} {{item.secondName}} {{item.thirdName}}</p>
                    <p>Date of birthday: {{item.dateOfBirthday}}</p>
                    <p>Number: {{item.number}}</p>
                    <p>Gender: {{item.gender}}</p>
                    <p>Group: {{item.group}}</p>
                    <p>Doctor: {{item.doctor}}</p>
                    <p>Sms: {{item.sms}}</p>
                    <p>Post code: {{item.postCode}}</p>
                    <p>Country: {{item.country}}</p>
                    <p>Region: {{item.region}}</p>
                    <p>City: {{item.city}}</p>
                    <p>Street: {{item.street}}</p>
                    <p>House: {{item.house}}</p>
                    <p>Type document: {{item.typeDocument}}</p>
                    <p>Series: {{item.series}}</p>
                    <p>Number: {{item.docNumber}}</p>
                    <p>Issued by: {{item.issued}}</p>
                    <p>Date receiving: {{item.dateReceiving}}</p>
                    
                </li>
            </ul>
        </div>
    </div>
    `,
    data() {
        return {
            userInfo: []
        }
    },
    methods: {
        addUserInfo(userArray) {
            this.userInfo.push(userArray)
            alert('User created')
            console.log(JSON.stringify(userArray))
        }
    },
    computed: {
        title() {
            return ('This page create username')
        }
    }
})


Vue.component('user-info-form', {
    template: `
     <form @submit.prevent="sendSubmit">
        <fieldset class="form">
            <p class='error' v-if="errors.length" >
                <b>Please correct the following error(s)</b>
            <ul>
                <li v-for="item in errors">{{item}}</li>
            </ul>
            </p>
            <div class="information">
            <h2>User Information</h2>
            First Name *<input class="userInfo cap" v-model.number="firstName" type="text" placeholder="First Name">
            Second Name *<input class="userInfo cap" v-model.number="secondName" type="text" placeholder="Second Name">
            Third Name <input class="userInfo cap" v-model.number="thirdName" type="text" placeholder="Third Name">
            Date of birthday *<input class="userInfo" v-model="dateOfBirthday" type="date" placeholder="Birthday">
            Number *<input class="userInfo" v-model.number="number" type="tel" placeholder="Number">
            Gender <input class="userInfo cap" v-model.number="gender" type="text" placeholder="Gender">
            Group client *<p><select v-model="group" multiple size="3">
                    <option value="VIP">VIP</option>
                    <option value="Problems">Problems</option>
                    <option value="OMC">OMC</option>
                    </select></p>
            Doctor <p><select class="userInfo" v-model="doctor" size="1">
                    <option value="Ivanov">Ivanov</option>
                    <option value="Zakharov">Zakharov</option>
                    <option value="Chernishov">Chernishov</option>
                    </select></p>
            SMS<input class="userInfo none" v-model="sms" type="checkbox">
            </div>
            <div class="adress">
            <h2>Adress</h2>
            Post Code <input class="userInfo" v-model.number="postCode" type="text" placeholder="Post Code">
            Country <input class="userInfo cap" v-model="country" type="text" placeholder="Country">
            Region <input class="userInfo cap" v-model.number="region" type="text" placeholder="Region">
            City *<input class="userInfo cap" v-model="city" type="text" placeholder="City">
            Street <input class="userInfo cap" v-model="street" type="text" placeholder="Street">
            House # <input class="userInfo" v-model.number="house" type="text" placeholder="House number">
            </div>
            <div class="document">
            <h2>Document</h2>
            Type document *<p><select class="userInfo" v-model="typeDocument">
                            <option disabled value="Change document">Change document</option>
                            <option value="Passport">Passport</option>
                            <option value="Driver license">Driver license</option>
                            <option value="Born license">Born license</option>
                            </select></p>
            Series <input class="userInfo" v-model.number="series" type="text" placeholder="Series">
            Document number <input class="userInfo" v-model.number="docNumber" type="text" placeholder="Number">
            Issued by <input class="userInfo" v-model="issued" type="text" placeholder="Issued by">
            Date of receiving *<input class="userInfo" v-model="dateReceiving" type="date" placeholder="Date of receiving">
            </div>
            <input type="submit" value="Send form">
        </fieldset>
    </form>
    `,
    data() {
        return {
            firstName: null,
            secondName: null,
            thirdName: null,
            dateOfBirthday: null,
            number: null,
            gender: null,
            group: null,
            doctor: null,
            sms: null,
            postCode: null,
            country: null,
            region: null,
            city: null,
            street: null,
            house: null,
            series: null,
            docNumber: null,
            issued: null,
            typeDocument: null,
            dateReceiving: null,
            errors: []
        }
    },
    methods: {
        sendSubmit() {
            this.errors = []
            if (this.firstName
                && this.secondName
                && this.dateOfBirthday
                && this.number
                && this.group
                && this.city
                && this.typeDocument
                && this.dateReceiving
                && this.validNumber(this.number)
                && typeof this.number !== "string"
                && this.firstName.length > 3
                && this.secondName.length > 3
                && typeof this.firstName !== 'number'
                && typeof this.secondName !== 'number') {
                let userArray = {
                    firstName: this.firstName,
                    secondName: this.secondName,
                    thirdName: this.thirdName,
                    dateOfBirthday: this.dateOfBirthday,
                    number: this.number,
                    gender: this.gender,
                    doctor: this.doctor,
                    sms: this.sms,
                    group: this.group,
                    postCode: this.postCode,
                    country: this.country,
                    region: this.region,
                    city: this.city,
                    street: this.street,
                    house: this.house,
                    series: this.series,
                    docNumber: this.docNumber,
                    issued: this.issued,
                    typeDocument: this.typeDocument,
                    dateReceiving: this.dateReceiving
                }
                this.$emit('form-send', userArray),
                    this.firstName = null,
                    this.secondName = null,
                    this.thirdName = null,
                    this.dateOfBirthday = null,
                    this.number = null,
                    this.gender = null,
                    this.group = null,
                    this.doctor = null,
                    this.sms = null,
                    this.postCode = null,
                    this.country = null,
                    this.region = null,
                    this.city = null,
                    this.street = null,
                    this.house = null,
                    this.series = null,
                    this.docNumber = null,
                    this.issued = null,
                    this.typeDocument = null,
                    this.dateReceiving = null,
                    this.errors.length = 0

            } else {
                //form clear
                if (!this.firstName) this.errors.push('First name required')
                if (!this.secondName) this.errors.push('Second name required')
                if (!this.dateOfBirthday) this.errors.push('Date required')
                if (!this.number) this.errors.push('Number required')
                if (!this.group) this.errors.push('Group required')
                if (!this.city) this.errors.push('City required')
                if (!this.typeDocument) this.errors.push('Document type is required')
                if (!this.dateReceiving) this.errors.push('Date receiving is required')
                // name  valid
                if (this.firstName.length < 3) this.errors.push('First name not correct, min length 3 symbol')
                if (this.secondName.length < 3) this.errors.push('Second name not correct, min length 3 symbol')
                if (typeof this.firstName === 'number') this.errors.push('First name not correct, only letter symbol')
                if (typeof this.secondName === 'number') this.errors.push('Second name not correct, only letter symbol')
                if (isNaN(this.validName(this.firstName)) && typeof this.firstName !== 'string') this.errors.push('First name not correct')
                if (isNaN(this.validName(this.secondName)) && typeof this.secondName !== 'string') this.errors.push('Second name not correct')
                // // // number valid
                if (!this.validNumber(this.number)) this.errors.push('Please, write correct number')
                if (typeof this.number === "string") this.errors.push('Number not correct, use only numeric symbol')

            }
        },
        validName(name) {
            return Number(name)
        },
        validNumber(number) {
            let nu = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
            return nu.test(number)
        }
    }
})

let app = new Vue({
    el: '#app',
})
