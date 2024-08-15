<template>
  <div class="project-grid">
    <div class="project-card" v-for="(project, index) in projects" :key="index">
      <div class="title-section">
        <div class="container">
        <img :src="project.image" alt="Project Image" class="project-image">
        <div class="title-container">
          <h3>{{ project.title }}</h3>
          <p>{{ project.name }}</p>
        </div>
      </div>
        <font-awesome-icon class="icon" :icon="['fas', 'ellipsis-vertical']" @click="editProject(index)" />
      </div>
      <div class="row">
        <div class="text-date">
          <p>{{ project.text1 }}</p>
          <p>{{ project.text2 }}</p>
        </div>
        <div class="date">
          <p>{{ project.date1 }}</p>
          <p>{{ project.date2 }}</p>
        </div>
      </div>
      <div class="row description">
        <p>{{ project.description }}</p>
      </div>
      <hr />
      <div class="row days">
        <p>{{ project.dayText }}</p>
        <div class="day-box">{{ project.days }}</div>
      </div>
      <div class="row tasks">
        <p>Tareas: {{ project.completedTasks }}/{{ project.totalTasks }}</p>
        <p>{{ calculatePercentage(project.completedTasks, project.totalTasks) }}%</p>
      </div>
      <div class="progress-bar-container">
        <div
          class="progress-bar"
          :style="{ width: calculatePercentage(project.completedTasks, project.totalTasks) + '%' }"
        ></div>
      </div>
    </div>

    <div v-if="showEditModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeEditModal">&times;</span>
        <h2>Edit Project</h2>
        <form @submit.prevent="updateProject">
          <label>
            Completed Tasks:
            <input type="number" v-model.number="currentProject.completedTasks" min="0" :max="currentProject.totalTasks" required />
          </label>
          <label>
            Total Tasks:
            <input type="number" v-model.number="currentProject.totalTasks" min="0" required />
          </label>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

interface Project {
  image: string;
  title: string;
  name: string;
  text1: string;
  text2: string;
  date1: string;
  date2: string;
  description: string;
  dayText: string;
  days: number;
  completedTasks: number;
  totalTasks: number;
}

const projects: Project[] = [
  {
    image: 'https://via.placeholder.com/50',
    title: 'Project Alpha',
    name: 'John Doe',
    text1: 'Initial Design',
    text2: 'Client Feedback',
    date1: '2024-08-01',
    date2: '2024-08-10',
    description: 'Este es un proyecto inicial de diseño para un cliente importante.',
    dayText: 'Días restantes',
    days: 15,
    completedTasks: 150,
    totalTasks: 200,
  },
  {
    image: 'https://via.placeholder.com/50',
    title: 'Project Alpha',
    name: 'John Doe',
    text1: 'Initial Design',
    text2: 'Client Feedback',
    date1: '2024-08-01',
    date2: '2024-08-10',
    description: 'Este es un proyecto inicial de diseño para un cliente importante.',
    dayText: 'Días restantes',
    days: 15,
    completedTasks: 150,
    totalTasks: 200,
  },
  {
    image: 'https://via.placeholder.com/50',
    title: 'Project Alpha',
    name: 'John Doe',
    text1: 'Initial Design',
    text2: 'Client Feedback',
    date1: '2024-08-01',
    date2: '2024-08-10',
    description: 'Este es un proyecto inicial de diseño para un cliente importante.',
    dayText: 'Días restantes',
    days: 15,
    completedTasks: 150,
    totalTasks: 200,
  },
  {
    image: 'https://via.placeholder.com/50',
    title: 'Project Alpha',
    name: 'John Doe',
    text1: 'Initial Design',
    text2: 'Client Feedback',
    date1: '2024-08-01',
    date2: '2024-08-10',
    description: 'Este es un proyecto inicial de diseño para un cliente importante.',
    dayText: 'Días restantes',
    days: 15,
    completedTasks: 150,
    totalTasks: 200,
  },
  {
    image: 'https://via.placeholder.com/50',
    title: 'Project Alpha',
    name: 'John Doe',
    text1: 'Initial Design',
    text2: 'Client Feedback',
    date1: '2024-08-01',
    date2: '2024-08-10',
    description: 'Este es un proyecto inicial de diseño para un cliente importante.',
    dayText: 'Días restantes',
    days: 15,
    completedTasks: 150,
    totalTasks: 200,
  },
];

const showEditModal = ref(false);
const currentProjectIndex = ref<number | null>(null);
const currentProject = reactive({
  completedTasks: 0,
  totalTasks: 0,
});

function editProject(index: number) {
  currentProjectIndex.value = index;
  Object.assign(currentProject, projects[index]);
  showEditModal.value = true;
}

function updateProject() {
  if (currentProjectIndex.value !== null) {
    const index = currentProjectIndex.value;
    const updatedProject = { ...projects[index], ...currentProject };

    if (updatedProject.completedTasks > updatedProject.totalTasks) {
      alert("Completed tasks cannot exceed total tasks.");
      return;
    }

    projects[index] = updatedProject;
    showEditModal.value = false;
  }
}

function closeEditModal() {
  showEditModal.value = false;
}

function calculatePercentage(completedTasks: number, totalTasks: number) {
  return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
}
</script>

<style scoped>

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 0 100px;
    margin-bottom: 40px;
  }

  .project-card {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

.container{
  display: flex;
  align-items: center;
}

.title-section{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title-container{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.title-container h3{
  font-size: 18px;
  color:#232323;
  letter-spacing: 0.3px;
}

.title-container p{
  font-size: 14px;
  color:#8d8d8d;
  letter-spacing: 0.3px;
}

.row{
  display: flex;
  justify-content: space-between;
}

.text-date{
  padding: 13px 10px;
  margin: 8px 0 ;
  background-color: #c8c8c8;
  border-radius: 4px;
  color: black;
  font-size: 15px;
  font-weight: bolder;
  letter-spacing: 0.3px;
}

.date{
  padding: 13px 10px;
  margin: 8px 0 ;
  color: #000;
  letter-spacing: 0.3px;
}

.description{
  margin-bottom: 17px;
  font-size: 17px;
}

.days{
  margin:17px 0 15px 0;
  font-size: 17px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

.project-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.icon {
  font-size: 24px;
  cursor: pointer;
}

.day-box {
  background: #f0f0f0;
  padding: 5px 10px;
  border-radius: 4px;
}

.tasks {
  margin-bottom: 10px;
}

.progress-bar-container {
  background: #e0e0e0;
  border-radius: 4px;
  height: 8px;
}

.progress-bar {
  background: #5d0f7d;
  height: 100%;
  border-radius: 4px;
}

  
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  position: relative;
}
</style>
