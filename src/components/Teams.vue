<template>
  <div class="teams-container">
    <div class="card-grid">
      <div class="card" v-for="team in teams" :key="team.id">
        <div class="card-header">
          <img :src="team.techImage" alt="Technology Image" class="team-image" />
          <div class="card-info">
            <h3 class="team-title">{{ team.title }}</h3>
          </div>
          <div>
            <font-awesome-icon class="icon" :icon="['fas', 'star']" />
            <font-awesome-icon class="icon" @click="editTeam(team)" :icon="['fas', 'ellipsis-vertical']" />
          </div>
        </div>
        <p class="card-description">{{ team.description }}</p>
        <div class="mini-images">
          <div class="mini-images-container">
            <div class="mini-image-wrapper" v-for="(miniImage, index) in team.miniImages" :key="index">
              <div class="mini-image-container">
                <img :src="miniImage.src" alt="Mini Image" class="mini-image" />
              </div>
            </div>
          </div>
          <div class="mini-images-right">
            <div class="tech-box">
              <span v-for="(tech, index) in team.technologies" :key="index">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="add-button" @click="showAddForm = true">+</button>
    <div v-if="showAddForm" class="form-container">
      <form @submit.prevent="addTeam">
        <label>
          Title:
          <input type="text" v-model="newTeam.title" required />
        </label>
        <label>
          Description:
          <input type="text" v-model="newTeam.description" required />
        </label>
        <label>
          Select Team Members (comma separated IDs):
          <input type="text" v-model="newTeam.selectedMembers" placeholder="e.g., 1,2,3" />
        </label>
        <label>
          Technologies (comma separated):
          <input type="text" v-model="newTeam.technologies" placeholder="e.g., react, vue, design" />
        </label>
        <button type="submit">Add Team</button>
        <button type="button" @click="showAddForm = false">Cancel</button>
      </form>
    </div>
    <div v-if="showEditForm" class="form-container">
      <form @submit.prevent="updateTeam">
        <label>
          Title:
          <input type="text" v-model="editTeamDetails.title" required />
        </label>
        <label>
          Description:
          <input type="text" v-model="editTeamDetails.description" required />
        </label>
        <label>
          Select Team Members (comma separated IDs):
          <input type="text" v-model="editTeamDetails.selectedMembers" placeholder="e.g., 1,2,3" />
        </label>
        <label>
          Technologies (comma separated):
          <input type="text" v-model="editTeamDetails.technologies" placeholder="e.g., react, vue, design" />
        </label>
        <button type="submit">Update Team</button>
        <button type="button" @click="showEditForm = false">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import imageProfile from '@/assets/images/profile.png';
import reactImage from '@/assets/images/react.png';

interface MiniImage {
  src: string;
}

interface TeamMember {
  id: number;
  name: string;
  image: string;
}

interface Team {
  id: number;
  image: string;
  title: string;
  description: string;
  miniImages: MiniImage[];
  technologies: string[];
  techImage?: string; 
}

const teamMembers = ref<TeamMember[]>([
  { id: 1, name: 'Alice', image: imageProfile },
  { id: 2, name: 'Bob', image: imageProfile },
  { id: 3, name: 'Charlie', image: imageProfile },
  { id: 4, name: 'Diana', image: imageProfile },
]);

const technologyImages: Record<string, string> = {
  react: reactImage,
  vue: reactImage,
  design: reactImage,
  javascript: reactImage,
};

const teams = ref<Team[]>([
  {
    id: 1,
    image: reactImage,
    title: 'React Dev Team',
    description: 'A team of expert React developers.',
    miniImages: [
      { src: imageProfile },
      { src: imageProfile },
      { src: imageProfile },
    ],
    technologies: ['react'],
    techImage: reactImage,
  },
  {
    id: 2,
    image: reactImage,
    title: 'Vue Enthusiasts',
    description: 'A passionate team working with Vue.js.',
    miniImages: [
      { src: imageProfile },
      { src: imageProfile },
    ],
    technologies: ['vue'],
    techImage: reactImage,
  },
  {
    id: 3,
    image: reactImage,
    title: 'Design Gurus',
    description: 'A creative team focused on design.',
    miniImages: [
      { src: imageProfile },
      { src: imageProfile },
      { src: imageProfile },
      { src: imageProfile },
    ],
    technologies: ['design'],
    techImage: reactImage,
  },
]);

const showAddForm = ref(false);
const showEditForm = ref(false);
const newTeam = ref({
  title: '',
  description: '',
  selectedMembers: '',
  technologies: '',
  techImage: ''
});
const editTeamDetails = ref({
  id: 0,
  title: '',
  description: '',
  selectedMembers: '',
  technologies: '',
  techImage: ''
});

watch(() => newTeam.value.technologies, (newTechs) => {
  const techArray = newTechs.split(',').map(tech => tech.trim().toLowerCase());
  const techImage = techArray.map(tech => technologyImages[tech]).find(img => img);
  if (techImage) {
    newTeam.value.techImage = techImage;
  }
});

function addTeam() {
  const selectedMemberIds = newTeam.value.selectedMembers.split(',').map(id => parseInt(id.trim()));

  const selectedMembers = teamMembers.value.filter(member => selectedMemberIds.includes(member.id));
  const miniImages = selectedMembers.map(member => ({ src: member.image }));

  teams.value.push({
    id: teams.value.length + 1,
    image: newTeam.value.techImage || imageProfile,
    title: newTeam.value.title,
    description: newTeam.value.description,
    miniImages: miniImages,
    technologies: newTeam.value.technologies.split(',').map(tech => tech.trim()),
    techImage: newTeam.value.techImage
  });

  showAddForm.value = false;
  newTeam.value = {
    title: '',
    description: '',
    selectedMembers: '',
    technologies: '',
    techImage: ''
  };
}

function editTeam(team: Team) {
  editTeamDetails.value = { ...team };
  showEditForm.value = true;
}

function updateTeam() {
  const selectedMemberIds = editTeamDetails.value.selectedMembers.split(',').map(id => parseInt(id.trim()));

  const selectedMembers = teamMembers.value.filter(member => selectedMemberIds.includes(member.id));
  const miniImages = selectedMembers.map(member => ({ src: member.image }));

  const index = teams.value.findIndex(team => team.id === editTeamDetails.value.id);
  if (index !== -1) {
    teams.value[index] = {
      id: editTeamDetails.value.id,
      image: editTeamDetails.value.techImage || imageProfile,
      title: editTeamDetails.value.title,
      description: editTeamDetails.value.description,
      miniImages: miniImages,
      technologies: editTeamDetails.value.technologies.split(',').map(tech => tech.trim()),
      techImage: editTeamDetails.value.techImage
    };
  }

  showEditForm.value = false;
  editTeamDetails.value = {
    id: 0,
    title: '',
    description: '',
    selectedMembers: '',
    technologies: '',
    techImage: ''
  };
}
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 0 100px;
  margin-bottom: 40px;
}

.card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-height: 250px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}


.team-image {
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
}

.card-info {
  flex: 1;
  margin-left: 10px;
}

.team-title {
  margin: 0;
  font-size: 23px;
  color:#262626;
}

.icon {
  margin-right: 10px;
  cursor: pointer;
}

.card-description {
  padding: 10px;
  font-size: 17px;
  color: #868686;
}

.mini-images {
  display: flex;
  align-items: center; 
  justify-content: center; 
  padding: 10px;
  gap: 15px; 
}

.mini-images-container {
  display: flex;
  align-items: center; 
  justify-content: center;
  gap: 5px; 
}

.mini-image-container{
  display: flex;
  align-items: center; 
  justify-content: center;
}

.mini-image-wrapper {
  display: flex;
}

.mini-image {
  width: 15px; 
  height: 15px; 
  object-fit: cover;
  border-radius: 50%;
}

.mini-images-right {
  display: flex;
  flex-direction: column; 
  justify-content: center;
  flex: 1;
  margin-left: 15px; 
  text-align: left; 
}

.tech-box{
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;
  gap: 7px;
}

.text-box {
  background: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
}

.add-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
}

.form-container {
  position: fixed;
  top: 20%;
  right: 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
</style>