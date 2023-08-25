<template>
    <div class="details-area">
        <div class="details-box">
            <h5 class="welcome-text">CHANGE DETAILS</h5>
            <form class="text-secondary" @submit.prevent="setFormData" autocomplete="off">
                <div class="row gutter-style">
                    <div class="col-md-6">
                        <!-- First Name -->
                        <div class="form-floating mt-3">
                            <input type="text" v-model="firstName" class="form-control" placeholder="First Name" required>
                            <label>First Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <!-- Last Name -->
                        <div class="form-floating mt-3">
                            <input type="text" class="form-control" v-model="lastName" placeholder="Last Name" required>
                            <label>Last Name</label>
                        </div>
                    </div>
                </div>
                <!-- Passowrd -->
                <div class="form-floating mt-3 mb-3">
                    <input type="password" class="form-control" v-model="oldPassword" placeholder="Enter password" required>
                    <label>Account Password</label>
                    <span v-if="wrongOldPassword" class="err">Incorrect password!</span>
                </div>
                <span class="media-extra-text"><small>Only fill password fields if you want to change it</small></span>
                <div class="form-floating mt-3 mb-3">
                    <input type="password" class="form-control" v-model="newPassword" placeholder="Enter password">
                    <label>New Password</label>
                </div>
                <div class="form-floating mt-3 mb-3">
                    <input type="password" class="form-control" @input="checkPassword" v-model="confirmPassword"
                        placeholder="Enter password">
                    <label>Confirm Password</label>
                    <span v-if="notMatchPassword" class="err">Password didn't match!</span>
                    <span v-if="matchPassword" class="ok-err">Password matched!</span>
                </div>
                <!-- Save button -->
                <div class="input-group button-center">
                    <button type="submit" class="button-style">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Edit',
    // props: ['authObj'],
    data() {
        return {
            auth: {},
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
            wrongOldPassword: false,
            matchPassword: false,
            notMatchPassword: false,
            usersData: [],
            firstName: '',
            lastName: '',
        };
    },
    mounted() {
        this.authCheck();
    },
    methods: {
        authCheck() {
            this.auth = JSON.parse(localStorage.getItem("Auth"));
            this.usersData = JSON.parse(localStorage.getItem("Users"));
            this.firstName = this.auth.firstName;
            this.lastName = this.auth.lastName;
        },
        setFormData() {
            // Getting data from edit form
            if (this.auth.password == this.oldPassword) {
                // Changing password if old password is correct
                if (this.usersData.length !== 0) {
                    if (this.newPassword !== "" && this.confirmPassword !== "") {
                        for (let i = 0; i < this.usersData.length; i++) {
                            const user = this.usersData[i];
                            if (this.auth.firstName == user.firstName && this.auth.lastName == user.lastName && this.auth.email == user.email) {
                                // Updating users data
                                this.usersData[i].password = this.newPassword;
                                this.usersData[i].firstName = this.firstName.trim();
                                this.usersData[i].lastName = this.lastName.trim();
                                // Updating auth data
                                this.auth.firstName = this.firstName.trim();
                                this.auth.lastName = this.lastName.trim();
                                this.auth.password = this.newPassword;
                                // Setting local storage data
                                localStorage.setItem("Auth", JSON.stringify(this.auth));
                                localStorage.setItem("Users", JSON.stringify(this.usersData));
                                // Emitting data to parent (Dashboard)
                                this.$emit("eventname", this.auth);
                                // Routing back to profile
                                this.$router.push('/dashboard');
                                break;
                            }
                        }
                    }
                    else if (this.newPassword === "" && this.confirmPassword === "") {
                        for (let i = 0; i < this.usersData.length; i++) {
                            const user = this.usersData[i];
                            if (this.auth.firstName == user.firstName && this.auth.lastName == user.lastName && this.auth.email == user.email) {
                                // Setting first name and last name in users data
                                this.usersData[i].firstName = this.firstName.trim();
                                this.usersData[i].lastName = this.lastName.trim();
                                // Updating auth data
                                this.auth.firstName = this.firstName.trim();
                                this.auth.lastName = this.lastName.trim();
                                // Setting local storage data
                                localStorage.setItem("Auth", JSON.stringify(this.auth));
                                localStorage.setItem("Users", JSON.stringify(this.usersData));
                                this.$router.push('/dashboard/profile');
                                break;
                            }
                        }
                    }
                    this.wrongOldPassword = false;
                }
            }
            else {
                this.wrongOldPassword = true;
            }
        },
        checkPassword() {
            // Check if new password and confirm password are same
            if (this.newPassword == this.confirmPassword) {
                this.matchPassword = true;
                this.notMatchPassword = false;
            }
            else {
                this.notMatchPassword = true;
                this.matchPassword = false;
            }
        },
    }
}
</script>

<style scoped>
@media screen and (max-width: 768px ) {
    .details-box{
        background: none !important;
    }
    .details-area{
        width: 100% !important;
    }
    .welcome-text{
        color: white;
    }
    .media-extra-text{
        color: white !important;
    }
}
.details-box{
    padding: 10px 15px 10px 15px;
    border-radius: 5px;
    background-color: white;
}
.gutter-style{
    --bs-gutter-x: 13px;
}
.welcome-text {
    text-align: center;
}

.err {
    color: red;
    font-size: 12px;
}

.ok-err {
    color: green;
    font-size: 12px;
}

.details-area {
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;
    width: 40%;
}

.button-center {
    display: flex;
    justify-content: center;
}

.button-style {
    background-color: #6b1b8e;
    width: 140px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    color: white;
}

.button-style:hover {
    background-color: #951fc7;
}

input[type=password]:focus {
    border: 3px solid rgb(80, 30, 99);
    box-shadow: none;
}

input[type=text]:focus {
    border: 3px solid rgb(80, 30, 99);
    box-shadow: none;
}
</style>