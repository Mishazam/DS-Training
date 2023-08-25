<template>
    <div class="loader">
        <div class="spinner"></div>
    </div>
</template>
  
<style scoped>
.loader {
    display: flex;
    align-items: start; 
    justify-content: center;
    height: 100vh;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 4px solid white;
    border-left-color: #6b1b8e;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
  