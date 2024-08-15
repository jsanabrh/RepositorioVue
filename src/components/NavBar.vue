<template>
    <nav class="navbar">
      <ul>
        <li :class="{ active: isActive('/profile') }" class="navItem">
          <router-link to="/profile" exact-active-class="active"><font-awesome-icon class="iconNav" :icon="['fas', 'user']" />Profile</router-link>
        </li>
        <li :class= "{ active: isActive('/teams') }" class="navItem">
          <router-link to="/teams" exact-active-class="active"><font-awesome-icon class="iconNav" :icon="['fas', 'people-group']" />Teams</router-link>
        </li>
        <li :class="{ active: isActive('/projects') }" class="navItem">
          <router-link to="/projects" exact-active-class="active"><font-awesome-icon class="iconNav" :icon="['fas', 'cloud']" />Projects</router-link>
        </li>
        <li :class="{ active: isActive('/connections') }" class="navItem">
          <router-link to="/connections" exact-active-class="active"><font-awesome-icon class="iconNav" :icon="['fas', 'diagram-project']" />Connections</router-link>
        </li>
      </ul>
    </nav>
    </template>
    
    <script setup lang="ts">
    import { useRoute } from 'vue-router';
    
    const route = useRoute();
    
    const isActive = (path: string) => {
    return route.path === path;
  };
    </script>
    
    <style scoped>
    .navbar{
        display: flex;
        margin: 40px 100px;
    }

    .navbar .navItem{
        margin-right: 2px;
        display: flex;
        align-items: center;   
    }
    
    nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
    }

    .navbar .navItem .iconNav{
        padding-right: 6px;
    }

    .navbar .navItem:hover{
        background-color: #5d0f7d;
        border-radius: 5px;
    }
    
    nav a {
      text-decoration: none;
      color: #808080;
      padding: 10px 30px;
      transition: all ease 0.3s;
      font-weight: 600;
      letter-spacing: 0.1px;
    }
    
    nav a:hover {
      color: #fafafa;
      transition: all ease 0.3s;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    }

    nav li.active a {
      color: #fafafa;
      background-color: #5d0f7d;
      border-radius: 5px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    }
    </style>