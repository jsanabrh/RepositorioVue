<template>
    <section class="searchBar">
        <font-awesome-icon class="searchIcon" :icon="['fas', 'search']" />
            <input
                type="text"
                placeholder="Search..."
            />
            <div class="iconsSection">
                <font-awesome-icon class="icon" :icon="['fas', 'language']" />
                <font-awesome-icon class="icon" :icon="['fas', 'sun']" />
                <font-awesome-icon class="icon" :icon="['fas', 'folder-plus']" />
                <font-awesome-icon class="icon" :icon="['fas', 'bell']" />
                <img :src="img" alt="">
            </div>
    </section>
</template>

<script setup lang="ts">
    import imageProfile from '@/assets/images/profile.png'
    const img = imageProfile
</script>

<style>
.searchBar{
    display: flex;
    margin: 0 100px;
    margin-bottom: 40px;
    border-radius: 5px;
    padding: 5px;
    max-height: 50px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    align-items:center;
    background-color: #ffff;

    .searchIcon{
        margin: 0 10px;
        color: #808080;
    }

    input{
        border-style: none;
        padding: 5px;
        min-width: 80%;
        color: #aaaaaa;
        font-size: 15px;
        letter-spacing: 0.3px;
    }

    .iconsSection{
        display: flex;
        width: 100%;
        align-items: center;
        max-width: 20%;
        justify-content: space-around;
    }

    .iconsSection .icon{
        color:#808080;
        cursor: pointer;
    }

    .iconsSection img{
        width: 40px;
        border-radius: 50px;
        cursor: pointer;
    }
}
</style>