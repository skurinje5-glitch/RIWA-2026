<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        Moj brojac: {{brojac}}
      </q-card-section>
      <div class="q-pa-md q-gutter-sm">
        <q-btn color="primary" text-color="white" label="Uvećaj" @click="uvecaj()" />

        <q-btn color="negative" text-color="white" label="Resetiraj" @click="resetiraj()"  />
      </div>
    </q-card>
    <q-card>
      <q-card-section>
        Zbroj: {{rezultat}}
      </q-card-section>
        <div class="q-pa-md" style="max-width: 400px">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            
            <q-input
            filled
            type="number"
            v-model.number="broj1"
            label="Unesi prvi broj"
            />

            <q-input
            filled
            type="number"
            v-model.number="broj2"
            label="Unesi drugi broj"
            />
            <div>
            <q-btn label="Zbroji" type="submit" color="primary" @click="zbroji()" />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
              @click="resetirajZbroj()"
            />
            </div>
          </q-form>
        </div>
    </q-card>
    
    <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
      filled
      v-model="unosteksta"
      label="Unosi tekst*"
      hint="Unos teksta"
      lazy-rules
      :rules="[val => (val && val.length > 0) || 'Please type something']"/>

      <div>
      <q-btn label="Spremi" color="primary" class="q-ml-sm" @click="spremi()" />
      <q-btn
        label="Reset"
        color="primary"
        class="q-ml-sm"
        @click="izbrisi()"
      />
    </div>
    <q-card>
      <q-card-section v-for="t in tekstovi" :key="t">
        		{{ t }}
      </q-card-section>
    </q-card>
    </q-form>
    </div>
  </q-page>
</template>

<script setup>
  import { ref } from 'vue';
  const brojac = ref(0);

  const broj1 = ref(0);
  const broj2 = ref(0);
  const rezultat = ref(0);

  const unosteksta = ref('');
  const tekstovi = ref([]);

  function uvecaj() 
  {
  console.log("uvećaj");
  brojac.value++;
  }

  function resetiraj() 
  {
  console.log("resetiraj");
  brojac.value = 0;
  }

  function zbroji()
  {
    rezultat.value = broj1.value+broj2.value;
  }
  function resetirajZbroj() 
  {
    broj1.value=0;
    broj2.value=0;
    rezultat.value = 0;
  }
  
  function spremi()
  {
    tekstovi.value.push(unosteksta.value);
    unosteksta.value = '';
  }
  function izbrisi()
  {
    console.log("izbrisi");
    unosteksta.value='';
  }
</script>
