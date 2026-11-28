<template>
  <q-page class="q-pa-md">

    <h4>Šala api</h4>

    <q-card>
      <q-card-section>
        {{ sala }}
      </q-card-section>
    </q-card>

    <q-btn
      label="Nova šala"
      color="primary"
      class="q-mt-md"
      @click="loadJoke"
    />

    <h4>Backend API</h4>

    <q-card>
      <q-card-section>
        {{ pozdrav }}
      </q-card-section>
    </q-card>

    <q-btn
      label="Pozovi backend"
      color="primary"
      class="q-mt-md"
      @click="loadHello"
    />

  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sala = ref('')
const pozdrav = ref('')

async function loadJoke() {
  const response = await fetch('https://dumbapis.com/joke')
  const data = await response.json()

  console.log(data)

  sala.value = data.sala
}

async function loadHello() {
  const response = await fetch('http://localhost:3000/api/hello')
  const data = await response.text()

  console.log(data)

  pozdrav.value = data
}

onMounted(() => {
  loadJoke()
})
</script>