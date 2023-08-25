<template>
    <div>
        <div class="container py-3">

            <div class="row">
                <div class="col-lg-4">
                    <div class="card mb-4 small-screen-margin-bottom">
                        <div class="card-body text-center">
                            <div class="name-initial-div">
                                <div class="name-initial">{{ nameInitial }}</div>
                            </div>
                            <h5 class="my-3">{{ auth.user.Fname + " " + auth.user.Lname }}</h5>
                            <p class="text-muted mb-1">Full Stack Developer</p>
                            <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
                            <div class="d-flex justify-content-center mb-2">
                                <router-link to="users" class="purple-button">Followers</router-link>
                                <!-- <button type="button" class="purple-button">Followers</button> -->
                                <button class="purple-outline-button ms-1" @click="goToEdit">Edit</button>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4 small-screen-margin-bottom">
                        <div class="card-body p-0">
                            <ul class="list-group list-group-flush rounded-3">
                                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fas fa-globe fa-lg text-warning"></i>
                                    <p class="mb-0">https://mdbootstrap.com</p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fab fa-github fa-lg" style="color: #333333;"></i>
                                    <p class="mb-0">mdbootstrap</p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fab fa-twitter fa-lg" style="color: #55acee;"></i>
                                    <p class="mb-0">@mdbootstrap</p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fab fa-instagram fa-lg" style="color: #ac2bac;"></i>
                                    <p class="mb-0">mdbootstrap</p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fab fa-facebook-f fa-lg" style="color: #3b5998;"></i>
                                    <p class="mb-0">mdbootstrap</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="card mb-4 small-screen-margin-bottom">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Full Name</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">{{ auth.user.Fname + " " + auth.user.Lname }}</p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Email</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">{{ auth.user.email }}</p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Phone</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">(097) 234-5678</p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Mobile</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">(098) 765-4321</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row small-screen-gutter-style">
                        <div class="col-md-6">
                            <div class="card mb-4 small-screen-margin-bottom">
                                <div class="card-body">
                                    <p class="mb-4"><span class="purple-color font-italic me-1">Assigment 1</span> Project
                                        Status
                                    </p>
                                    <p class="mb-1 text-style">Web Design</p>
                                    <div class="progress rounded" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1 text-style">Website Markup</p>
                                    <div class="progress rounded" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1 text-style">One Page</p>
                                    <div class="progress rounded" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1 text-style">Mobile Template</p>
                                    <div class="progress rounded" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1">Backend API</p>
                                    <div class="progress rounded mb-2" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-4 small-screen-margin-bottom">
                                <div class="card-body">
                                    <p class="mb-4"><span class="purple-color font-italic me-1">Assigment 2</span> Project
                                        Status
                                    </p>
                                    <p class="mb-1">Web Design</p>
                                    <div class="progress rounded" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1">Website Markup</p>
                                    <div class="progress rounded" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1">One Page</p>
                                    <div class="progress rounded" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1">Mobile Template</p>
                                    <div class="progress rounded" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-4 mb-1">Backend API</p>
                                    <div class="progress rounded mb-2" style="height: 5px;">
                                        <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    data() {
        return {
            auth: {},
            nameInitial: '',
        };
    },
    mounted() {
        this.getAuth();
    },
    methods: {
        getAuth() {
            this.auth = JSON.parse(localStorage.getItem("Auth"));
            this.nameInitial = this.auth.user.Fname.charAt(0).toUpperCase() + this.auth.user.Lname.charAt(0).toUpperCase();
        },
        goToEdit() {
            this.$router.push('edit');
        }
    },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
    .small-screen-margin-bottom{
        margin-bottom: 8px !important;
    }
    .small-screen-gutter-style{
        --bs-gutter-x: 8px;
    }
}
.progress-bar {
    background-color: #9425c5 !important;
}

.purple-color {
    color: #9425c5;
}

.purple-button {
    background-color: #9425c5;
    border: none;
    border-radius: 5px;
    padding: 9px 25px;
    color: white;
    text-decoration: none;
}

.purple-button:hover {
    background-color: #510e6e;
}

.purple-outline-button {
    border: 1px solid #9425c5;
    border-radius: 5px;
    padding: 0 20px;
    color: #9425c5;
    background-color: white;
}

.purple-outline-button:hover {
    background-color: #510e6e;
    color: white;
}

.name-initial-div {
    display: flex;
    align-items: center;
    justify-content: center;
}

.name-initial {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(56, 13, 71);
    color: white;
    font-weight: 600;
    font-size: 35px;
    border-radius: 50%;
}
</style>