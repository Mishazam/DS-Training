<template>
    <!-- <div class="container container-shahdow"> -->
    <!-- <div class="col-lg-8 col-md-12"> -->
    <div class="row media-overflow">
        <div class="col-5 text-center bg-style pt-5 pe-0">
            <img class="picture-style mt-5" src="@/assets/formLogo.png">

            <div class="text-white">
                <h4 class="mb-3">BLING</h4>
                <p class="text-style px-5 py-3 mx-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio tenetur quo
                    dignissimos ullam sequi repellat, necessitatibus pariatur, eligendi iusto dicta consequatur quibusdam
                    perspiciatis ad. Nostrum aperiam est neque quo atque.</p>
                <div class="register-style mx-3 py-3">
                    <h5>Register if you are interested to be a part of our company!</h5>
                </div>
            </div>
        </div>
        <div class="col-7 form-display">
            <h5 class="header-color-style text-center">REGISTRATION</h5>
            <form class="text-secondary" @submit.prevent="setFormData" enctype="multipart/form-data" autocomplete="off">
                <div class="row gutter-style">
                    <div class="col-md-6">
                        <!-- First Name -->
                        <div class="form-floating mt-3">
                            <input type="text" class="form-control" v-model="Fname" placeholder="First Name" required>
                            <label>First Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <!-- Last Name -->
                        <div class="form-floating mt-3">
                            <input type="text" class="form-control" v-model="Lastname" placeholder="Last Name" required>
                            <label>Last Name</label>
                        </div>
                    </div>
                </div>
                <div class="form-floating mt-3">
                    <input type="email" class="form-control" v-model="email" placeholder="Enter Email" required>
                    <label>Email</label>
                </div>
                <div class="row gutter-style">
                    <div class="col-md-6">
                        <!-- Phone Number -->
                        <div class="form-floating mt-3">
                            <input type="number" class="form-control" v-model="phoneNo" placeholder="Phone Number">
                            <label>Phone Number</label>
                        </div>
                    </div>
                    <!-- Education -->
                    <div class="col-md-6 d-flex flex-row">
                        <select class="select-style mt-3" v-model="education" name="education" id="education">
                            <option value="" disabled selected>Select your education level</option>
                            <option value="bachelor">Bachelor</option>
                            <option value="master">Master</option>
                            <option value="phd">Phd</option>
                        </select>
                    </div>
                </div>
                <div class="row gutter-style">
                    <div class="col-md-6">
                        <div class="form-floating mt-3">
                            <input type="number" class="form-control" v-model="CNIC" placeholder="CNIC" required>
                            <label>CNIC</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating mt-3">
                            <input type="date" class="form-control" v-model="DOB" placeholder="DOB" required>
                            <label>DOB</label>
                        </div>
                    </div>
                </div>
                <div class="row gutter-style">
                    <div class="col-md-6">
                        <div class="form-floating mt-3">
                            <input type="number" class="form-control" v-model="age" placeholder="Age" required>
                            <label>Age</label>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex flex-row">
                        <select class="select-style mt-3" v-model="gender" name="gender" id="gender">
                            <option value="" disabled selected>Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
                <div class="mt-3 mb-3">
                    <input type="text" class="form-control address-input-style" v-model="address" placeholder="Address"
                        required>
                </div>
                <div class="mt-3 mb-3">
                    <textarea class="form-control" v-model="coverLetter" placeholder="Cover Letter"></textarea>
                </div>
                <span>Upload your CV - </span>
                <input type="file" id="myfile" @change="onFileChange" accept=".pdf, .png, .jpg, .jpeg" name="myfile"
                    multiple required>
                <hr width="100%">
                <!-- Signin button -->
                <div class="button-center mb-4 mt-5">
                    <button type="submit" class="button-style">Register</button>
                </div>
            </form>
        </div>
    </div>
    <!-- </div> -->
</template>

<script>
import { io } from "socket.io-client";
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

export default {
    name: 'Registration',
    data() {
        return {
            Fname: '',
            Lastname: '',
            phoneNo: '',
            email: '',
            CNIC: '',
            DOB: '',
            age: '',
            address: '',
            coverLetter: '',
            education: '',
            gender: '',
            cv: '',
        };
    },
    methods: {
        onFileChange(event) {
            this.cv = event.target.files[0];
        },
        setFormData() {
            if (this.phoneNo.length > 11 || this.phoneNo.length < 11) {
                alert("Enter 11 digits in Phone Number field!");
                return;
            }
            if (this.CNIC.length > 13 || this.CNIC.length < 13) {
                alert("Enter 13 digits in CNIC field!");
                return;
            }
            if (this.age > 100 || this.age < 15) {
                alert("Enter valid age!");
                return;
            }
            const formData = new FormData();
            // Appending data in FormData object
            formData.append('cv', this.cv);
            formData.append('Fname', this.Fname);
            formData.append('Lname', this.Lastname);
            formData.append('phoneNo', this.phoneNo);
            formData.append('email', this.email);
            formData.append('cnic', this.CNIC);
            formData.append('dob', this.DOB);
            formData.append('age', this.age);
            formData.append('address', this.address);
            formData.append('coverLetter', this.coverLetter);
            formData.append('education', this.education);
            formData.append('gender', this.gender);
            Vue.axios.post('http://192.168.11.209:8080/auth/registration', formData)
                .then((response) => {
                    console.log(response);
                    alert(response.data.message);
                    window.location.reload();

                }).catch((error) => {
                    console.log(error);
                });
        },
    }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
    .bg-style {
        display: none !important;
    }

    .select-style {
        height: 65px;
    }

    .form-display {
        margin: 20px !important;
        width: 95% !important;
    }
}

.register-style {
    border-radius: 8px;
    background-color: #20bf6b;
    padding: 3px 8px 3px 8px;
}

.text-style {
    border-radius: 8px;
    background-color: #f7b731;
    color: rgb(255, 255, 255);
}

.picture-style {
    width: 150px;
}

.bg-style {
    background-color: #170221;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg fill-opacity='0.86'%3E%3Cpolygon fill='%23230530' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%232e0840' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%233a0c4f' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23450f5f' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%2351126E' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.address-input-style {
    line-height: 2.6;
}

.select-style {
    border: 1px solid #ced4da;
    border-radius: 5px;
    width: 100%;
    font-size: 14px;
    color: #495057;
    background-color: #ffffff;
    padding-left: 5px;
}

.select-style:focus {
    border: 3px solid rgb(80, 30, 99);
    box-shadow: none;
}

.gutter-style {
    --bs-gutter-x: 15px;
}

textarea:focus {
    border: 3px solid rgb(80, 30, 99);
    box-shadow: none;
}

input[type=email]:focus {
    border: 3px solid rgb(80, 30, 99);
    box-shadow: none;
}

input[type=number]:focus {
    border: 3px solid rgb(80, 30, 99);
    box-shadow: none;
}

input[type=text]:focus {
    border: 3px solid rgb(80, 30, 99);
    box-shadow: none;
}

label {
    font-size: 13px !important;
}

.header-color-style {
    color: rgb(80, 30, 99);
    margin-top: 20px;
    margin-bottom: 10px;
}

.form-display {
    padding: 1% 2% 5% 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;
}

label {
    font-size: 15px;
}

.button-center {
    display: flex;
    justify-content: center;
}

.button-style {
    background-color: rgb(80, 30, 99);
    width: 140px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    color: white;
}

.button-style:hover {
    background-color: rgb(140, 44, 179);
}</style>