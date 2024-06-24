const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello World!',
            image: 'images/welcome-image.webp',
            imageAlt: 'Hello!'
        }
    }
}).mount('#app')