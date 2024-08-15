<template>
    <div class="profile-grid">
      <!-- Lado izquierdo -->
      <div class="left-column">
        <div class="box about-user">
            <h3>ABOUT</h3>
            <p><font-awesome-icon class="icon" :icon="['fas', 'user']" /><strong>Full Name: </strong>Juan Pablo</p>
            <p><font-awesome-icon class="icon" :icon="['fas', 'check']" /><strong>Status: </strong>Active</p>
            <p><font-awesome-icon class="icon" :icon="['fas', 'crown']" /><strong>Role: </strong>Developer</p>
            <p><font-awesome-icon class="icon" :icon="['fas', 'flag']" /><strong>Country: </strong>COL</p>
            <p><font-awesome-icon class="icon" :icon="['fas', 'language']" /><strong>Language: </strong>English</p>
            <h3>CONTACTS</h3>
            <p><font-awesome-icon class="icon" :icon="['fas', 'tty']" /><strong>Contact: </strong>(123) 456 789 00</p>
            <p><font-awesome-icon class="icon" :icon="['fas', 'message']" /><strong>Skype: </strong>Juan.psh</p>
            <p><font-awesome-icon class="icon" :icon="['fas', 'envelope']" /><strong>Email: </strong>Juan@example.com</p>
            <h3>TEAMS</h3>
            <p><strong>Backend Developer: </strong>(126 Members)</p>
            <p><strong>VueJS Developer: </strong>(96 Members)</p>
        </div>
        <div class="box overview-user">
            <h3>OVERVIEW</h3>
            <p><font-awesome-icon class="icon" :icon="['fas', 'check']" /><strong>Task Compiled: </strong>13.5K</p>
            <p><font-awesome-icon class="icon" :icon="['fas', 'people-group']" /><strong>Connections: </strong>897</p>
            <p><font-awesome-icon class="icon" :icon="['fas', 'diagram-project']" /><strong>Projects Compiled: </strong>146</p>
        </div>
      </div>
      <div class="right-column">
        <div class="box user-timeline">
            <h2><font-awesome-icon class="icon-timeline" :icon="['fas', 'chart-simple']" />Activity Timeline</h2>
            <div class="container-timeline">
                <div class="title-timeline">
                    <h3>12 Invoices been paid</h3>
                    <p>12 min ago</p>
                </div>
                <p>Invoices have been paid to the company</p>
                <span>invoice.pdf</span>
                <div class="title-timeline">
                    <h3>Clien Meeting</h3>
                    <p>45 min ago</p>
                </div>
                <p>Project meeting with john @10:15</p>
                <div class="image-container">
                  <img class="imagen" :src="img" >
                    <div class="text-">
                        <p>Lester McCarthy (Client)</p>
                        <p>CEO of Pixinvent</p>
                    </div>
                </div>
                <div class="title-timeline">
                    <h3>Create a new project for client</h3>
                    <p>2 Day ago</p>
                </div>
                <p>6 team members in a project</p>
            </div>
        </div>
        <div class="box right-row">
          <div class="box right-box-2">
            <div class="header">
              <h3>Connection</h3>
            </div>
            <div class="contacts">
      <div v-for="contact in contacts" :key="contact.id" class="contact">
        <img :src="contact.image" alt="Contact Image" class="contact-image">
        <div class="contact-info">
          <p class="contact-name">{{ contact.name }}</p>
          <p class="contact-connections">{{ contact.connections }} connections</p>
        </div>
        <button 
          class="toggle-button" 
          :class="{ active: contact.active }" 
          @click="toggleContact(contact.id)"
        >
          <span v-if="contact.active">Activo</span>
          <span v-else>Inactivo</span>
        </button>
      </div>
    </div>
    <div class="view-all">
      <a href="#">View all connections</a>
    </div>
          </div>
          <div class="box right-box-3">
            <div class="header">
      <h3>Teams</h3>
    </div>
    <div class="team-list">
      <div v-for="(team, index) in teams" :key="index" class="team-item">
        <img :src="team.image" alt="Team Image" class="team-image">
        <div class="team-info">
          <h4>{{ team.title }}</h4>
          <p>{{ team.members }} members</p>
        </div>
        <div class="team-extra">
          <p>{{ team.extraText }}</p>
        </div>
      </div>
    </div>
    <div class="view-all">
      <a href="#">View all teams</a>
    </div>
          </div>
        </div>
        <div class="box right-box-4">
          <div class="header">
      <h2>Project List</h2>
      <input v-model="searchQuery" type="text" placeholder="Search projects..." />
    </div>

    <hr />

    <table>
      <thead>
        <tr>
          <th><input type="checkbox" @change="toggleAll" /></th>
          <th>Name</th>
          <th>Leader</th>
          <th>Team</th>
          <th>Progress</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in paginatedProjects" :key="project.id">
          <td><input type="checkbox" v-model="selectedProjects" :value="project.id" /></td>
          <td>{{ project.name }}</td>
          <td>{{ project.leader }}</td>
          <td>
            <div class="team-images">
              <img v-for="member in project.team" :src="member.image" :alt="member.name" :key="member.name" />
            </div>
          </td>
          <td>
            <div class="progress-bar">
              <div :style="{ width: project.progress + '%' }"></div>
            </div>
            {{ project.progress }}%
          </td>
          <td><button class="deleteButton" @click="removeProject(project.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button :disabled="currentPage === 1" @click="goToPage(1)">« First</button>
      <button :disabled="currentPage === 1" @click="prevPage">‹ Prev</button>

      <button 
        v-for="page in totalPages" 
        :key="page" 
        :class="{ active: page === currentPage }"
        @click="goToPage(page)">
        {{ page }}
      </button>
      
      <button :disabled="currentPage === totalPages" @click="nextPage">Next ›</button>
      <button :disabled="currentPage === totalPages" @click="goToPage(totalPages)">Last »</button>
    </div>
  </div>
        </div>
      </div>
  </template>
  
  <script setup lang="ts">
    import { ref, computed } from 'vue';

    import imageProfile from '@/assets/images/profile.png'
    const img = imageProfile;

const contacts = ref([
  { id: 1, name: 'John Doe', image: imageProfile, connections: 150, active: false },
  { id: 2, name: 'Jane Smith', image: imageProfile, connections: 200, active: false },
  { id: 3, name: 'Alice Johnson', image: imageProfile, connections: 120, active: false },
  { id: 4, name: 'Bob Brown', image: imageProfile, connections: 180, active: false },
  { id: 5, name: 'Charlie Davis', image: imageProfile, connections: 90, active: false },
]);

const toggleContact = (id: number) => {
  const contact = contacts.value.find(c => c.id === id);
  if (contact) {
    contact.active = !contact.active;
  }
};

const teams = [
  {
    image: imageProfile,
    title: 'Team Alpha',
    members: 25,
    extraText: 'Javascript',
  },
  {
    image: imageProfile,
    title: 'Team Beta',
    members: 15,
    extraText: 'Angular',
  },
  {
    image: imageProfile,
    title: 'Team Gamma',
    members: 40,
    extraText: 'Design',
  },
  {
    image: imageProfile,
    title: 'Team Delta',
    members: 12,
    extraText: 'Java',
  },
  {
    image: imageProfile,
    title: 'Team Epsilon',
    members: 30,
    extraText: 'React',
  },
];

interface Project {
  id: number;
  name: string;
  leader: string;
  team: { name: string; image: string }[];
  progress: number;
}



const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = 5;
const selectedProjects = ref<number[]>([]);

const projects: Project[] = [
  { id: 1, name: 'Project Alpha', leader: 'Alice', team: [{ name: 'Bob', image: imageProfile }], progress: 70 },
  { id: 2, name: 'Project Beta', leader: 'Bob', team: [{ name: 'Charlie', image: imageProfile }], progress: 50 },
  { id: 2, name: 'Project Beta', leader: 'Bob', team: [{ name: 'Charlie', image: imageProfile }], progress: 50 },
  { id: 2, name: 'Project Beta', leader: 'Bob', team: [{ name: 'Charlie', image: imageProfile }], progress: 50 },
  { id: 2, name: 'Project Beta', leader: 'Bob', team: [{ name: 'Charlie', image: imageProfile }], progress: 50 },
  { id: 2, name: 'Project Beta', leader: 'Bob', team: [{ name: 'Charlie', image: imageProfile }], progress: 50 },
];

const filteredProjects = computed(() => {
  return projects.filter(project => project.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

const totalPages = computed(() => Math.ceil(filteredProjects.value.length / itemsPerPage));

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredProjects.value.slice(start, end);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const toggleAll = (event: Event) => {
  const checked = (event.target as HTMLInputElement).checked;
  selectedProjects.value = checked ? projects.map(p => p.id) : [];
};

const removeProject = (id: number) => {
  projects.splice(projects.findIndex(p => p.id === id), 1);
};

  </script>
  
  <style scoped>
  .profile-grid {
    display: grid;
    grid-template-columns: 1fr 2fr; 
    gap: 20px;
    margin: 0 100px;
    margin-bottom: 40px;
  }
  
  .left-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .right-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .right-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  
  .box {
    background-color: #ffff;
    padding: 20px;
    text-align: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  
  .about-user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

  }

  .about-user h3{
    color: #d7d7d7;
    font-size:16px;
    letter-spacing: 0.3px;
  }

  .about-user p{
    padding: 10px;
    font-size: 14px;
    color: #888;
  }

  .about-user p .icon{
    padding:0 5px;
  }
  
  .overview-user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .overview-user h3{
    color: #d7d7d7;
    font-size:16px;
    letter-spacing: 0.3px;
  }

  .overview-user p{
    padding: 10px;
    font-size: 14px;
    color: #888;
  }

  .overview-user p .icon{
    padding:0 5px;
  }

  .user-timeline{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .user-timeline h2{
    color: #292929;
  }

  .user-timeline .icon-timeline{
    margin-right: 8px;
  }
  
  .container-timeline{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    padding: 10px;
    gap: 15px;
  }

  .container-timeline h3{
    color: #292929;
  }

  .container-timeline p{
    color: #afafaf;
  }

  .container-timeline span{
    padding:10px;
    background-color: #d7d7d7;
    color: #0000;
  }
  .title-timeline{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .container-timeline img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .image-container{
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: start;
  }

  .image-container p{
    padding: 0 10px;
  }


.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.contacts {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.contact-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.contact-info {
  flex: 1;
  margin-left: 15px;
}

.contact-name {
  font-weight: bold;
}

.contact-connections {
  color: #888;
}

.toggle-button {
  padding: 5px 10px;
  border: none;
  background-color: #eee;
  cursor: pointer;
  border-radius: 5px;
}

.toggle-button.active {
  background-color: #4caf50;
  color: #fff;
}

.view-all {
  margin-top: 20px;
  text-align: center;
}

.team-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.team-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background: #f0f0f0;
  border-radius: 8px;
}

.team-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.team-info h4 {
  margin: 0;
  font-size: 16px;
}

.team-info p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

.team-extra p {
  margin: 0;
  font-size: 14px;
  color: #333;
}

.view-all {
  margin-top: 20px;
  text-align: center;
}

.view-all a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.view-all a {
  color: #007bff;
  text-decoration: none;
}
  
  .right-box-4 {
    height: 500px;
    grid-column: 2 / span 1;
  }

  .header input {
  padding: 5px;
}

hr {
  margin: 10px 0;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.team-images img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
}

.progress-bar {
  position: relative;
  height: 10px;
  background: #f3f3f3;
  border-radius: 5px;
  overflow: hidden;
}

.progress-bar div {
  position: absolute;
  height: 100%;
  background: #5d0f7d;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  border-top: 1px solid #ddd;
  padding: 10px 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.pagination button {
  padding: 5px 10px;
}

.pagination button.active {
  background-color: #5d0f7d;
  color: white;
}

.deleteButton{
  background-color: red;
  padding: 5px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
  </style>
  