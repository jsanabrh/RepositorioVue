<template>
    <div class="outer-container">
        <section class="banner">
            <div class="box top-box"></div>
            <div class="box bottom-box">
                <div class="container">
                    <h3>Juan Pablo</h3>
                    <div class="container-propertyes">
                        <div class="property">
                            <font-awesome-icon class="iconProperty" :icon="['fas', 'palette']" />
                            <p>Coder</p>
                        </div>
                        <div class="property">
                            <font-awesome-icon class="iconProperty" :icon="['fas', 'location-dot']" />
                            <p>Medellín</p>
                        </div>
                        <div class="property">
                            <font-awesome-icon class="iconProperty" :icon="['fas', 'calendar']" />
                            <p>Joined August 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <img class="floating-image" :src="img" >
        </section>
    </div>
</template>

<script setup lang="ts">
    import imageProfile from '@/assets/images/profile.png'
    const img = imageProfile
</script>

<style>

    .outer-container {
    width: calc(100% - 200px);
    margin: 0 100px;
    box-sizing: border-box;
    }

    .banner{
        width: 100%;
        position: relative;

        .box {
            width: 100%;
            box-sizing: border-box;
        }
        
        .top-box {
        background: rgb(4,0,93);
        background: linear-gradient(51deg, rgba(4,0,93,1) 0%, rgba(102,0,143,1) 49%, rgba(5,12,137,1) 96%);
        min-height: 200px;
        border-radius: 8px 8px 0 0;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
        }

        .bottom-box {
        background-color: #ffffff;
        border-radius: 0 0 8px 8px;
        min-height: 120px;
        max-height: 120px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
        }

        .bottom-box p {
        margin: 0;
        padding: 20px;
        font-size: 16px;
        color: #333;
        }

        .floating-image {
        position: absolute;
        width: 125px;
        height: 125px;
        top: 163px;
        left: 8%;
        transform: translateX(-50%);
        z-index: 10;
        border: 5px solid white;
        border-radius: 2px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
        }

        .container{
            max-height: 120px;
            padding-left: 190px;
            padding-top: 18px;
        }
        
        .container h3{
            letter-spacing: 0.5px;
            color: #353535;
            font-size: 25px;
        }

        .container .container-propertyes{
            display: flex;  
        }

        .container-propertyes .property{
            display: flex;
            align-items: center;
            margin-right: 20px;
        }

        .property .iconProperty{
            color: #b2b2b2;
            font-size: 20px;   
        }

        .property p{
            padding: 20px 15px;
            color: #898989;
            font-size: 16.5px;
        }
}
    
</style>