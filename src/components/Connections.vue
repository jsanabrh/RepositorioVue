<template>
  <div class="connections">
    <div class="card" v-for="(connection, index) in connections" :key="index">
      <div class="image-container">
        <img :src="connection.image" alt="Connection Image" class="connection-image user-image" />
      </div>
      <div class="user-info">
        <h3 class="user-name">{{ connection.name }}</h3>
        <p class="user-role">{{ connection.role }}</p>
      </div>
      <div class="user-skills">
        <p
          v-for="(skill, index) in connection.skills"
          :key="index"
          class="skill"
          :class="getSkillClass(skill)"
        >
          {{ skill }}
        </p>
      </div>
      <div class="user-stats">
        <div class="stat">
          <p class="number">{{ connection.tasks }}</p>
          <p class="label">Tareas</p>
        </div>
        <div class="stat">
          <p class="number">{{ connection.projects }}</p>
          <p class="label">Proyectos</p>
        </div>
        <div class="stat">
          <p class="number">{{ connection.connections }}</p>
          <p class="label">Conexiones</p>
        </div>
      </div>
      <div class="card-footer">
        <button
          class="contact-button"
          @click="toggleConnection(index)"
          :class="{ disconnected: !connection.connected }"
        >
          <font-awesome-icon
            :icon="connection.connected ? ['fas', 'user-check'] : ['fas', 'user-times']"
          />
          {{ connection.connected ? 'Connected' : 'Disconnected' }}
        </button>
        <div class="email-container">
          <font-awesome-icon class="email" :icon="['fas', 'envelope']" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import imageProfile from '@/assets/images/profile.png';

const connections = ref([
  {
    image: imageProfile,
    name: 'John Doe',
    role: 'Developer',
    skills: ['JavaScript', 'Vue.js', 'CSS'],
    tasks: 10,
    projects: 5,
    connections: 20,
    connected: true,
  },
  {
    image: imageProfile,
    name: 'Jane Smith',
    role: 'Designer',
    skills: ['Figma', 'Design'],
    tasks: 12,
    projects: 3,
    connections: 18,
    connected: true,
  },
]);

const toggleConnection = (index: number) => {
  connections.value[index].connected = !connections.value[index].connected;
};

const getSkillClass = (skill: string) => {
  switch (skill) {
    case 'JavaScript':
      return 'javascript-skill';
    case 'Vue.js':
      return 'vue-skill';
    case 'CSS':
      return 'css-skill';
    case 'Figma':
      return 'figma-skill';
    case 'Design':
      return 'design-skill';
    default:
      return '';
  }
};
</script>

<style scoped>
.connections {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 0 100px;
  margin-bottom: 40px;
}

.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  box-sizing: border-box;
}

.image-container {
  text-align: center;
  margin-bottom: 12px;
}

.user-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  text-align: center;
  margin-bottom: 12px;
}

.user-name {
  font-size: 18px;
  margin: 4px 0;
  color: #292929;
  font-size: 25px;
}

.user-role {
  font-size: 14px;
  color: #777;
}

.user-skills {
  text-align: center;
  margin-bottom: 12px;
}

.skill {
  display: inline-block;
  margin: 2px 6px;
  padding: 2px 3px;
  border-radius: 4px;
}

.javascript-skill {
  color: #f0db4f;
  background-color: #f7e98e;
}

.vue-skill {
  color: #42b883;
  background-color: #a1e3d2;
}

.css-skill {
  color: #264de4;
  background-color: #a3b7e6;
}

.figma-skill {
  color: #a259ff;
  background-color: #d6b3ff;
}

.design-skill {
  color: #ff5733;
  background-color: #ffb4a0;
}

.user-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.stat {
  text-align: center;
  padding: 20px;
}

.number {
  font-size: 22px;
  font-weight: bold;
}

.label {
  font-size: 15px;
  color: #777;
}

.card-footer {
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 15px;
}

.contact-button {
  background-color: #5d0f7d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.contact-button.disconnected {
  background-color: #cdcdcd;
  color: #6c6c6c;
  font-size: 15px;
}

.email-container{
  display: flex;
  align-items: center;
  background-color: #cdcdcd;
  padding: 10px;
  color: #6c6c6c;
  border-radius: 4px;
  cursor: pointer;
}
</style>
