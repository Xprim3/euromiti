<template>
  <div class="bg-brand-white">
    <!-- Hero Section -->
    <div class="relative h-[300px] md:h-[400px] bg-cover bg-center bg-no-repeat" style="background-image: url('/Media/careers-hero.jpg'); background-size: cover; background-position: center;">
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
      
      <!-- Content -->
      <div class="relative h-full flex items-end pb-8 md:pb-16">
        <div class="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div class="text-left text-white max-w-4xl">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-2xl">
              Mundësi Punësimi
            </h1>
            <p class="text-lg md:text-xl lg:text-2xl leading-relaxed opacity-95 text-white drop-shadow-lg">
              Bëhu pjesë e ekipit tonë dhe ndihmo në zhvillimin e industrisë së energjisë në Shqipëri
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Company Culture Section -->
    <div id="culture" class="py-16 md:py-24 bg-brand-white">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6">Pse EUROMITI?</h2>
          <p class="text-xl text-brand-gray max-w-3xl mx-auto">Ne ofrojmë një mjedis pune dinamik dhe profesionist ku çdo punonjës ka mundësi të rritet dhe të zhvillohet</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Growth Opportunities -->
          <div class="text-center group">
            <div class="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-brand-black mb-4">Rritje Profesionale</h3>
            <p class="text-brand-gray leading-relaxed">Mundësi të pafundme për zhvillim karriere dhe trajnime të vazhdueshme</p>
          </div>
          
          <!-- Team Environment -->
          <div class="text-center group">
            <div class="w-20 h-20 bg-brand-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-brand-black mb-4">Ekip i Fortë</h3>
            <p class="text-brand-gray leading-relaxed">Punë në ekip me profesionistë të kualifikuar dhe të përvojshëm</p>
          </div>
          
          <!-- Innovation -->
          <div class="text-center group">
            <div class="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-brand-black mb-4">Inovacion</h3>
            <p class="text-brand-gray leading-relaxed">Përdorim teknologjitë më të fundit për të përmirësuar shërbimet</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Benefits Section -->
    <div class="py-16 md:py-24 bg-brand-light">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6">Përfitimet</h2>
          <p class="text-xl text-brand-gray max-w-3xl mx-auto">Ne vlerësojmë kontributin e punonjësve tanë dhe ofrojmë përfitime konkurruese</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Health Insurance -->
          <div class="bg-brand-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-brand-black mb-2">Sigurimi Shëndetësor</h3>
            <p class="text-brand-gray text-sm">Mbulim i plotë për ju dhe familjen</p>
          </div>
          
          <!-- Flexible Hours -->
          <div class="bg-brand-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-brand-black mb-2">Orar Fleksibël</h3>
            <p class="text-brand-gray text-sm">Bilanci i punës dhe jetës personale</p>
          </div>
          
          <!-- Training -->
          <div class="bg-brand-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="font-bold text-brand-black mb-2">Trajnime</h3>
            <p class="text-brand-gray text-sm">Zhvillim i vazhdueshëm i aftësive</p>
          </div>
          
          <!-- Performance Bonus -->
          <div class="bg-brand-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h3 class="font-bold text-brand-black mb-2">Bonus Performancë</h3>
            <p class="text-brand-gray text-sm">Shpërblim për rezultatet e shkëlqyera</p>
          </div>
        </div>
      </div>
    </div>

         <!-- Combined Jobs & Application Section -->
     <div id="positions" class="py-16 md:py-24 bg-brand-white">
       <div class="max-w-7xl mx-auto px-4 md:px-6">
         <div class="text-center mb-12">
           <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6">Pozicionet e Hapura & Aplikimi</h2>
           <p class="text-xl text-brand-gray max-w-3xl mx-auto">Zbuloni mundësitë e punësimit dhe aplikoni direkt për pozicionin që ju përshtat</p>
         </div>
         
         <!-- Combined Card with Jobs Left & Form Right -->
         <div class="bg-brand-white border border-brand-light-gray rounded-2xl overflow-hidden shadow-xl">
           <div class="grid grid-cols-1 lg:grid-cols-2">
             <!-- Left Side - Job Listings -->
             <div class="lg:border-r border-brand-light-gray">
               <div class="p-6 md:p-8">
                 <h3 class="text-2xl font-bold text-brand-black mb-6">Pozicionet e Hapura</h3>
                 
                 <!-- Job List -->
                  <div class="space-y-4">
                    <div 
                      v-for="job in paginatedJobs" 
                      :key="job.id"
                      @click="selectJobForApplication(job)"
                      :class="[
                        'p-4 border rounded-lg transition-all duration-200 cursor-pointer',
                        selectedJob === job.title
                          ? 'border-brand-primary bg-brand-primary/10 shadow-md'
                          : 'border-brand-light-gray hover:bg-brand-light/30 hover:border-brand-primary/30'
                      ]"
                    >
                      <div class="flex items-center justify-between mb-3">
                        <h4 class="text-lg font-bold text-brand-black">{{ job.title }}</h4>
                      </div>
                      <div class="flex flex-wrap items-center gap-3 text-sm text-brand-gray mb-3">
                        <div class="flex items-center space-x-2">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          </svg>
                          <span>{{ job.location }}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.5"></path>
                          </svg>
                          <span>{{ job.experience }}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                          </svg>
                          <span>{{ job.salary }}</span>
                        </div>
                      </div>
                      <p class="text-brand-gray text-sm mb-3">{{ job.description }}</p>
                    </div>
                  </div>
                  
                  <!-- Pagination -->
                  <div class="mt-6 flex justify-center">
                    <nav class="flex items-center space-x-2">
                      <button 
                        @click="changePage(Math.max(1, currentPage - 1))"
                        :disabled="currentPage === 1"
                        class="px-3 py-2 text-sm font-medium text-brand-gray bg-brand-white border border-brand-light-gray rounded-lg hover:bg-brand-light/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                      >
                        ←
                      </button>
                      
                      <button 
                        v-for="page in visiblePages" 
                        :key="page"
                        @click="changePage(page)"
                        :class="[
                          'px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                          currentPage === page 
                            ? 'bg-brand-primary text-brand-white' 
                            : 'text-brand-gray bg-brand-white border border-brand-light-gray hover:bg-brand-light/50'
                        ]"
                      >
                        {{ page }}
                      </button>
                      
                      <button 
                        @click="changePage(Math.min(totalPages, currentPage + 1))"
                        :disabled="currentPage === totalPages"
                        class="px-3 py-2 text-sm font-medium text-brand-gray bg-brand-white border border-brand-light-gray rounded-lg hover:bg-brand-light/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                      >
                        →
                      </button>
                    </nav>
                  </div>
                  
                  <!-- Info Text -->
                  <div class="mt-6 text-center">
                    <p class="text-sm text-brand-gray">
                      Zgjidhni pozicionin që ju përshtat dhe plotësoni formularin në anën e djathtë për të aplikuar
                    </p>
                  </div>
               </div>
             </div>
             
             <!-- Right Side - Application Form -->
             <div class="bg-brand-light/30">
               <div class="p-6 md:p-8">
                 <h3 class="text-2xl font-bold text-brand-black mb-6">Apliko për Pozicionin</h3>
                 
                 <!-- Application Form -->
                 <form @submit.prevent="submitApplication" class="space-y-6">
                   <!-- Job Position Selection -->
                   <div>
                     <label class="block text-sm font-semibold text-brand-black mb-2">Pozicioni i Aplikimit *</label>
                     <Dropdown 
                       v-model="selectedJob"
                       :options="jobOptions"
                       optionLabel="displayText"
                       optionValue="title"
                       placeholder="Zgjidhni pozicionin për të aplikuar"
                       class="w-full"
                       :class="{ 'p-invalid': !selectedJob && formSubmitted }"
                       required
                     >
                       <template #option="slotProps">
                         <div class="flex flex-col">
                           <div class="font-semibold text-brand-black">{{ slotProps.option.title }}</div>
                           <div class="text-sm text-brand-gray">
                             {{ slotProps.option.category }} • {{ slotProps.option.location }} • {{ slotProps.option.experience }}
                           </div>
                         </div>
                       </template>
                     </Dropdown>
                     <small v-if="!selectedJob && formSubmitted" class="p-error">Duhet të zgjidhni një pozicion për të aplikuar</small>
                   </div>

                   <!-- Personal Information -->
                   <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label class="block text-sm font-semibold text-brand-black mb-2">Emri *</label>
                       <InputText 
                         v-model="form.firstName" 
                         placeholder="Emri"
                         class="w-full"
                         :class="{ 'p-invalid': form.firstName === '' && formSubmitted }"
                         required
                       />
                       <small v-if="form.firstName === '' && formSubmitted" class="p-error">Emri është i detyrueshëm</small>
                     </div>
                     <div>
                       <label class="block text-sm font-semibold text-brand-black mb-2">Mbiemri *</label>
                       <InputText 
                         v-model="form.lastName" 
                         placeholder="Mbiemri"
                         class="w-full"
                         :class="{ 'p-invalid': form.lastName === '' && formSubmitted }"
                         required
                       />
                       <small v-if="form.lastName === '' && formSubmitted" class="p-error">Mbiemri është i detyrueshëm</small>
                     </div>
                   </div>
                   
                   <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label class="block text-sm font-semibold text-brand-black mb-2">Gjinia *</label>
                       <Dropdown 
                         v-model="form.gender"
                         :options="genderOptions"
                         optionLabel="label"
                         optionValue="value"
                         placeholder="Zgjidhni gjininë"
                         class="w-full"
                         :class="{ 'p-invalid': form.gender === '' && formSubmitted }"
                         required
                       />
                       <small v-if="form.gender === '' && formSubmitted" class="p-error">Gjinia është e detyrueshme</small>
                     </div>
                     <div>
                       <label class="block text-sm font-semibold text-brand-black mb-2">Datëlindja *</label>
                       <Calendar 
                         v-model="form.birthday" 
                         placeholder="Zgjidhni datën e lindjes"
                         class="w-full"
                         :class="{ 'p-invalid': !form.birthday && formSubmitted }"
                         required
                         showIcon
                         dateFormat="dd/mm/yy"
                       />
                       <small v-if="!form.birthday && formSubmitted" class="p-error">Data e lindjes është e detyrueshme</small>
                     </div>
                   </div>
                   
                   <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label class="block text-sm font-semibold text-brand-black mb-2">Email *</label>
                       <InputText 
                         v-model="form.email" 
                         type="email"
                         placeholder="email@example.com"
                         class="w-full"
                         :class="{ 'p-invalid': form.email === '' && formSubmitted }"
                         required
                       />
                       <small v-if="form.email === '' && formSubmitted" class="p-error">Email është i detyrueshëm</small>
                     </div>
                     <div>
                       <label class="block text-sm font-semibold text-brand-black mb-2">Telefoni *</label>
                       <InputText 
                         v-model="form.phone" 
                         placeholder="+355 12 345 678"
                         class="w-full"
                         :class="{ 'p-invalid': form.phone === '' && formSubmitted }"
                         required
                       />
                       <small v-if="form.phone === '' && formSubmitted" class="p-error">Telefoni është i detyrueshëm</small>
                     </div>
                   </div>
                   
                   <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label class="block text-sm font-semibold text-brand-black mb-2">Qyteti *</label>
                       <InputText 
                         v-model="form.city" 
                         placeholder="Qyteti ku jetoni"
                         class="w-full"
                         :class="{ 'p-invalid': form.city === '' && formSubmitted }"
                         required
                       />
                       <small v-if="form.city === '' && formSubmitted" class="p-error">Qyteti është i detyrueshëm</small>
                     </div>
                     <div>
                       <label class="block text-sm font-semibold text-brand-black mb-2">Vite Përvoje</label>
                       <Dropdown 
                         v-model="form.experience"
                         :options="experienceOptions"
                         optionLabel="label"
                         optionValue="value"
                         placeholder="Zgjidhni përvojën"
                         class="w-full"
                       />
                     </div>
                   </div>
                   
                   <div>
                     <label class="block text-sm font-semibold text-brand-black mb-2">Niveli i Edukimit</label>
                     <Dropdown 
                       v-model="form.education"
                       :options="educationOptions"
                       optionLabel="label"
                       optionValue="value"
                       placeholder="Zgjidhni nivelin e edukimit"
                       class="w-full"
                     />
                   </div>
                   
                   <!-- CV Upload -->
                   <div>
                     <label class="block text-sm font-semibold text-brand-black mb-2">CV (PDF/Word) *</label>
                     <FileUpload 
                       mode="basic"
                       :auto="true"
                       accept=".pdf,.doc,.docx"
                       :maxFileSize="5000000"
                       chooseLabel="Zgjidhni CV-në"
                       class="w-full"
                       :class="{ 'p-invalid': !form.cvFile && formSubmitted }"
                       @select="onFileSelect"
                       required
                     />
                     <small v-if="!form.cvFile && formSubmitted" class="p-error">CV është e detyrueshme</small>
                     <small class="text-xs text-brand-gray mt-1 block">Formatet e pranuara: PDF, Word (.doc, .docx), madhësia maksimale: 5MB</small>
                   </div>
                   
                   <!-- Agreement Checkbox -->
                   <div class="flex items-start space-x-3">
                     <Checkbox 
                       v-model="form.agreement"
                       :binary="true"
                       :class="{ 'p-invalid': !form.agreement && formSubmitted }"
                       required
                     />
                     <label class="text-sm text-brand-gray">
                       Pajtohem me <a href="#" class="text-brand-primary hover:underline">kushtet e përdorimit</a> dhe 
                       <a href="#" class="text-brand-primary hover:underline">politikën e privatësisë</a> *
                     </label>
                   </div>
                   <small v-if="!form.agreement && formSubmitted" class="p-error block">Duhet të pajtoheni me kushtet</small>
                   
                   <!-- Submit Button -->
                   <div class="pt-4">
                     <Button 
                       type="submit" 
                       :disabled="isSubmitting"
                       :loading="isSubmitting"
                       label="Dërgo Aplikimin"
                       class="w-full p-button-lg"
                       icon="pi pi-send"
                     />
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>

    <!-- Application Process -->
    <div class="py-16 md:py-24 bg-brand-light">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6">Si të Aplikoni</h2>
          <p class="text-xl text-brand-gray max-w-3xl mx-auto">Procesi i thjeshtë dhe transparent për të aplikuar në EUROMITI</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Step 1 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-brand-primary text-brand-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
            <h3 class="text-xl font-bold text-brand-black mb-4">Zgjidhni Pozicionin</h3>
            <p class="text-brand-gray">Shikoni pozicionet e hapura dhe zgjidhni atë që ju përshtat më së miri</p>
          </div>
          
          <!-- Step 2 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-brand-primary text-brand-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
            <h3 class="text-xl font-bold text-brand-black mb-4">Përgatitni CV-në</h3>
            <p class="text-brand-gray">Përditësoni CV-në tuaj me përvojën dhe aftësitë më të fundit</p>
          </div>
          
          <!-- Step 3 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-brand-primary text-brand-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
            <h3 class="text-xl font-bold text-brand-black mb-4">Dërgoni Aplikimin</h3>
            <p class="text-brand-gray">Plotësoni formularin online dhe dërgoni CV-në tuaj</p>
          </div>
          
          <!-- Step 4 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-brand-primary text-brand-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">4</div>
            <h3 class="text-xl font-bold text-brand-black mb-4">Intervista</h3>
            <p class="text-brand-gray">Takohemi për një intervistë dhe diskutim për pozicionin</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact HR Section -->
    <div class="py-16 md:py-24 bg-brand-white">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6">Keni Pyetje?</h2>
          <p class="text-xl text-brand-gray max-w-2xl mx-auto mb-8">
            Ekipi ynë i Burrave të Burrave është këtu për t'ju ndihmuar me çdo pyetje që keni për mundësitë e punësimit
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hr@euromiti.al" class="inline-flex items-center px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-brand-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Kontaktoni HR
            </a>
            <a href="tel:+35512345678" class="inline-flex items-center px-8 py-4 bg-brand-secondary hover:bg-brand-secondary/90 text-brand-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              Na Telefononi
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Calendar from 'primevue/calendar'
import FileUpload from 'primevue/fileupload'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

// Reactive state for selected job
const selectedJob = ref('')

// Pagination state
const currentPage = ref(1)
const jobsPerPage = 5

// Form data
const form = reactive({
  firstName: '',
  lastName: '',
  gender: '',
  birthday: null as Date | null,
  email: '',
  phone: '',
  city: '',
  experience: '',
  education: '',
  agreement: false,
  cvFile: null as File | null
})

// Form submission state
const isSubmitting = ref(false)
const formSubmitted = ref(false) // New state for form submission

// All jobs data
const allJobs = [
  {
    id: 1,
    title: 'Menaxher Stacioni i Karburantit',
    category: 'Menaxhment',
    location: 'Ferizaj',
    experience: '3-5 vjet',
    salary: '€800-1200',
    description: 'Menaxhimi i operacioneve ditore të stacionit dhe supervizimi i stafit.'
  },
  {
    id: 2,
    title: 'Teknik i Karburantit',
    category: 'Teknik',
    location: 'Gjilan',
    experience: '1-3 vjet',
    salary: '€600-900',
    description: 'Mirëmbajtja e pajisjeve të karburantit dhe kontrolli i sigurisë.'
  },
  {
    id: 3,
    title: 'Punëtor i Shitjes',
    category: 'Shitje',
    location: 'Ferizaj',
    experience: '0-2 vjet',
    salary: '€400-600',
    description: 'Shitja e produkteve dhe shërbimi i klientëve në stacion.'
  },
  {
    id: 4,
    title: 'Kontabilist',
    category: 'Financë',
    location: 'Prishtinë',
    experience: '2-4 vjet',
    salary: '€700-1000',
    description: 'Menaxhimi i regjistrave financiare dhe raportimi.'
  },
  {
    id: 5,
    title: 'Inxhinier i Sigurisë',
    category: 'Siguri',
    location: 'Gjilan',
    experience: '3-6 vjet',
    salary: '€900-1400',
    description: 'Zhvillimi i politikave të sigurisë dhe trajnimi i stafit.'
  },
  {
    id: 6,
    title: 'Drejtor i Marketingut',
    category: 'Marketing',
    location: 'Prishtinë',
    experience: '5-8 vjet',
    salary: '€1200-1800',
    description: 'Strategjitë e marketingut dhe zhvillimi i brendit.'
  },
  {
    id: 7,
    title: 'Inxhinier i IT',
    category: 'IT',
    location: 'Ferizaj',
    experience: '2-4 vjet',
    salary: '€800-1200',
    description: 'Zhvillimi i sistemeve dhe mirëmbajtja e infrastrukturës IT.'
  },
  {
    id: 8,
    title: 'Punëtor i Magazinës',
    category: 'Logjistikë',
    location: 'Gjilan',
    experience: '1-2 vjet',
    salary: '€500-700',
    description: 'Menaxhimi i inventarit dhe organizimi i magazinës.'
  },
  {
    id: 9,
    title: 'Përgjegjës i Shërbimit të Klientëve',
    category: 'Shërbim',
    location: 'Ferizaj',
    experience: '2-3 vjet',
    salary: '€600-800',
    description: 'Mbështetja e klientëve dhe zgjidhja e problemeve.'
  },
  {
    id: 10,
    title: 'Inxhinier i Prodhimit',
    category: 'Prodhim',
    location: 'Prishtinë',
    experience: '4-7 vjet',
    salary: '€1000-1500',
    description: 'Optimizimi i proceseve të prodhimit dhe kontrolli i cilësisë.'
  }
]

// Computed properties for pagination
const totalPages = computed(() => Math.ceil(allJobs.length / jobsPerPage))
const paginatedJobs = computed(() => {
  const start = (currentPage.value - 1) * jobsPerPage
  const end = start + jobsPerPage
  return allJobs.slice(start, end)
})
const visiblePages = computed(() => {
  const pages = []
  const start = Math.max(1, currentPage.value - 2)
  const end = Math.min(totalPages.value, currentPage.value + 2)
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})

// Options for dropdowns
const genderOptions = [
  { label: 'Zgjidhni gjininë', value: '' },
  { label: 'Mashkull', value: 'male' },
  { label: 'Femër', value: 'female' },
  { label: 'Tjetër', value: 'other' }
]

const experienceOptions = [
  { label: 'Zgjidhni përvojën', value: '' },
  { label: '0-1 vjet', value: '0-1' },
  { label: '1-3 vjet', value: '1-3' },
  { label: '3-5 vjet', value: '3-5' },
  { label: '5+ vjet', value: '5+' }
]

const educationOptions = [
  { label: 'Zgjidhni nivelin e edukimit', value: '' },
  { label: 'Shkolla e Mesme', value: 'high-school' },
  { label: 'Bachelor', value: 'bachelor' },
  { label: 'Master', value: 'master' },
  { label: 'PhD', value: 'phd' }
]

// Job options for the position dropdown
const jobOptions = allJobs.map(job => ({
  title: job.title,
  category: job.category,
  location: job.location,
  experience: job.experience,
  salary: job.salary,
  displayText: `${job.title} (${job.category} - ${job.location} - ${job.experience})`
}))

// Handle file selection for CV upload
const onFileSelect = (event: any) => {
  form.cvFile = event.files[0]
}

// Function to select a job for application form
const selectJobForApplication = (job: any) => {
  selectedJob.value = job.title
  // Optionally, you can update the form fields with job details if needed
  // For now, we just set the selectedJob.value
}

// Handle form submission
const submitApplication = async () => {
  formSubmitted.value = true // Mark form as submitted

  if (!selectedJob.value) {
    alert('Ju lutem zgjidhni një pozicion për të aplikuar.')
    return
  }
  
  if (!form.agreement) {
    alert('Ju lutem pajtohuni me kushtet e përdorimit dhe politikën e privatësisë.')
    return
  }

  if (!form.cvFile) {
    alert('Ju lutem zgjidhni një CV për të aplikuar.')
    return
  }

  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Success message
    alert(`Aplikimi u dërgua me sukses për pozicionin: ${selectedJob.value}`)
    
    // Reset form
    Object.keys(form).forEach(key => {
      if (key === 'agreement') {
        (form as any)[key] = false
      } else if (key === 'cvFile') {
        (form as any)[key] = null
      } else if (key === 'birthday') {
        (form as any)[key] = null
      } else {
        (form as any)[key] = ''
      }
    })
    selectedJob.value = ''
    formSubmitted.value = false // Reset formSubmitted
    
  } catch (error) {
    alert('Ndodhi një gabim. Ju lutem provoni përsëri.')
  } finally {
    isSubmitting.value = false
  }
}

// Handle page change with smooth scrolling
const changePage = (page: number) => {
  currentPage.value = page
  // Smooth scroll to top of job listings on mobile
  if (window.innerWidth <= 768) {
    const jobSection = document.getElementById('positions')
    if (jobSection) {
      jobSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
</script>

<style scoped>
/* Custom animations for career page */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Custom PrimeVue styling to match brand colors */
:deep(.p-inputtext) {
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  transition: all 0.2s;
  height: 48px;
  padding: 0.75rem 1rem;
  background-color: white !important;
  color: #374151 !important;
}

:deep(.p-inputtext:focus) {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  background-color: white !important;
}

:deep(.p-dropdown) {
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  height: 48px;
  background-color: white !important;
  transition: all 0.2s;
}

:deep(.p-dropdown:not(.p-disabled):hover) {
  border-color: #2563eb;
  background-color: white !important;
}

:deep(.p-dropdown:not(.p-disabled).p-focus) {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  background-color: white !important;
}

:deep(.p-dropdown .p-dropdown-label) {
  padding: 0.75rem 1rem;
  height: 48px;
  line-height: 1.5rem;
  background-color: white !important;
  color: #374151 !important;
}

:deep(.p-dropdown .p-dropdown-trigger) {
  width: 3rem;
  background-color: white !important;
  border-left: 1px solid #e5e7eb;
}

:deep(.p-dropdown .p-dropdown-trigger-icon) {
  color: #6b7280 !important;
}

:deep(.p-dropdown-panel) {
  background-color: white !important;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

:deep(.p-dropdown-items) {
  background-color: white !important;
}

:deep(.p-dropdown-item) {
  background-color: white !important;
  color: #374151 !important;
  padding: 0.75rem 1rem;
  transition: all 0.2s;
}

:deep(.p-dropdown-item:hover) {
  background-color: #f3f4f6 !important;
  color: #1f2937 !important;
}

:deep(.p-dropdown-item.p-highlight) {
  background-color: #2563eb !important;
  color: white !important;
}

:deep(.p-dropdown-item.p-highlight:hover) {
  background-color: #1d4ed8 !important;
  color: white !important;
}

:deep(.p-calendar) {
  border-radius: 0.5rem;
  height: 48px;
  background-color: white !important;
}

:deep(.p-calendar input) {
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  height: 48px;
  padding: 0.75rem 1rem;
  background-color: white !important;
  color: #374151 !important;
}

:deep(.p-calendar:not(.p-disabled):hover input) {
  border-color: #2563eb;
  background-color: white !important;
}

:deep(.p-calendar:not(.p-disabled).p-focus input) {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  background-color: white !important;
}

:deep(.p-calendar .p-datepicker) {
  background-color: white !important;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

:deep(.p-calendar .p-datepicker-header) {
  background-color: white !important;
  border-bottom: 1px solid #e5e7eb;
}

:deep(.p-calendar .p-datepicker-calendar) {
  background-color: white !important;
}

:deep(.p-calendar .p-datepicker-calendar th) {
  background-color: #f9fafb !important;
  color: #374151 !important;
}

:deep(.p-calendar .p-datepicker-calendar td) {
  background-color: white !important;
}

:deep(.p-calendar .p-datepicker-calendar td > span) {
  background-color: white !important;
  color: #374151 !important;
}

:deep(.p-calendar .p-datepicker-calendar td > span:hover) {
  background-color: #f3f4f6 !important;
}

:deep(.p-calendar .p-datepicker-calendar td.p-datepicker-today > span) {
  background-color: #2563eb !important;
  color: white !important;
}

:deep(.p-calendar .p-datepicker-calendar td.p-datepicker-today > span:hover) {
  background-color: #1d4ed8 !important;
}

:deep(.p-fileupload) {
  border-radius: 0.5rem;
  height: 48px;
  background-color: white !important;
}

:deep(.p-fileupload .p-fileupload-buttonbar) {
  background-color: white !important;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 0;
}

:deep(.p-fileupload .p-button) {
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  color: #374151;
  border-radius: 0.5rem;
  transition: all 0.2s;
  height: 48px;
  padding: 0.75rem 1rem;
}

:deep(.p-fileupload .p-button:hover) {
  background-color: #e5e7eb;
  border-color: #d1d5db;
}

:deep(.p-fileupload .p-fileupload-content) {
  background-color: white !important;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
}

:deep(.p-checkbox .p-checkbox-box) {
  border-radius: 0.25rem;
  border: 1px solid #e5e7eb;
  width: 1.25rem;
  height: 1.25rem;
  background-color: white !important;
  transition: all 0.2s;
}

:deep(.p-checkbox .p-checkbox-box.p-highlight) {
  background-color: #2563eb;
  border-color: #2563eb;
}

:deep(.p-checkbox .p-checkbox-box:hover) {
  border-color: #2563eb;
  background-color: white !important;
}

:deep(.p-checkbox .p-checkbox-box.p-highlight:hover) {
  background-color: #1d4ed8 !important;
  border-color: #1d4ed8;
}

:deep(.p-checkbox .p-checkbox-icon) {
  color: white !important;
  font-size: 0.75rem;
}

:deep(.p-button) {
  background-color: #2563eb;
  border-color: #2563eb;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.3s;
  height: 56px;
}

:deep(.p-button:hover) {
  background-color: #1d4ed8;
  border-color: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.2);
}

:deep(.p-button:disabled) {
  background-color: #9ca3af;
  border-color: #9ca3af;
  transform: none;
  box-shadow: none;
}

:deep(.p-invalid) {
  border-color: #ef4444 !important;
}

:deep(.p-error) {
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: block;
}

/* Additional form element styling */
:deep(.p-component) {
  font-family: inherit;
}

:deep(.p-placeholder) {
  color: #9ca3af !important;
}

/* Ensure all form elements have consistent backgrounds */
:deep(.p-inputtext),
:deep(.p-dropdown),
:deep(.p-calendar),
:deep(.p-fileupload),
:deep(.p-checkbox .p-checkbox-box) {
  background-color: white !important;
}

/* Focus states for all form elements */
:deep(.p-inputtext:focus),
:deep(.p-dropdown:not(.p-disabled).p-focus),
:deep(.p-calendar:not(.p-disabled).p-focus input) {
  border-color: #2563eb !important;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1) !important;
  background-color: white !important;
}

/* Form spacing improvements */
:deep(.p-dropdown),
:deep(.p-calendar),
:deep(.p-fileupload) {
  width: 100%;
}

:deep(.p-inputtext) {
  width: 100%;
}

:deep(.p-dropdown .p-dropdown-trigger) {
  width: 3rem;
}

/* Ensure consistent spacing between form elements */
:deep(.p-dropdown),
:deep(.p-calendar),
:deep(.p-fileupload),
:deep(.p-inputtext) {
  margin-bottom: 0;
}

/* Fix mobile pagination shift */
@media (max-width: 768px) {
  :deep(.p-dropdown-panel) {
    position: fixed !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: 90vw !important;
    max-width: 400px !important;
  }
}
</style>
