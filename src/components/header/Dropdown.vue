<template>
    <div class="menu-item" @click="isOpen = !isOpen">
        <a>
            {{ title }}
        </a>
        <svg viewBox="0 0 1030 638" width="10">
            <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="black"></path>
        </svg>
        <transition name="fade" appear>
            <div class="sub-menu" v-if="isOpen">
                <div v-for="(item, i) in items" :key="i" class="menu-item">
                    <router-link :to="item.link">{{ item.title }}</router-link>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Dropdown',
    props: ['title', 'items'],
    data () {
        return {
            isOpen: false
        }
    }
}
</script>

<style scoped>
nav .menu-item svg {
    width: 10px;
    margin-left: 10px;
}

nav .menu-item{
    padding: 2px;
}

nav .menu-item .sub-menu {
    position: absolute;
    background-color: #fff;
    top: calc(100% + 1px);
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    border-radius: 0px 0px 16px 16px;
    padding: 4px 4px;
}

.fade-enter-active,
.fade-leave-active {
    transition: all .5s ease-out;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.router-link-exact-active {
    background: #D4BE9E;
    color: #000;
}

a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
    padding: 1px 4px;
}

</style>