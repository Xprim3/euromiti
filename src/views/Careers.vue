<template>
  <div class="bg-brand-white">
    <!-- Toast for notifications -->
    <Toast />
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
    <div id="culture" class="py-12 md:py-16 lg:py-24 bg-brand-white">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-black mb-4 md:mb-6">Pse EUROMITI?</h2>
          <p class="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto px-4">Ne ofrojmë një mjedis pune dinamik dhe profesionist ku çdo punonjës ka mundësi të rritet dhe të zhvillohet</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
    <div class="py-12 md:py-16 lg:py-24 bg-brand-light">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-black mb-4 md:mb-6">Përfitimet</h2>
          <p class="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto px-4">Ne vlerësojmë kontributin e punonjësve tanë dhe ofrojmë përfitime konkurruese</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6">Pozicionet e Hapura</h2>
            <p class="text-xl text-brand-gray max-w-3xl mx-auto">Zbuloni mundësitë e punësimit në EUROMITI</p>
          </div>
         
                   <!-- Side-by-Side Layout: Jobs Left, Application Form Right -->
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
            
            <!-- Left Side: Job Listings -->
            <div class="bg-brand-white border border-brand-light-gray rounded-2xl overflow-hidden shadow-xl">
              <div class="p-6 md:p-8">
                <h3 class="text-2xl font-bold text-brand-black mb-6">Pozicionet e Hapura</h3>
                
                                 <!-- Job List with PrimeVue Cards -->
                 <div class="space-y-4">
                   <Card 
                     v-for="job in paginatedJobs" 
                     :key="job.id"
                     @click="selectJobForApplication(job)"
                     :class="[
                       'cursor-pointer transition-all duration-200 hover:shadow-lg',
                       selectedJob === job.title
                         ? 'ring-2 ring-brand-primary ring-opacity-50 shadow-lg'
                         : 'hover:border-brand-primary/30'
                     ]"
                   >
                     <template #content>
                       <div class="p-3 md:p-4">
                                                 <div class="mb-3 md:mb-4">
                          <h4 class="text-lg md:text-xl font-bold text-brand-black leading-tight">{{ job.title }}</h4>
                        </div>
                         
                         <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 text-sm text-brand-gray mb-3 md:mb-4">
                           <div class="flex items-center gap-2">
                             <svg class="w-4 h-4 text-brand-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                             </svg>
                             <span class="font-medium truncate">{{ job.location }}</span>
                           </div>
                           <div class="flex items-center gap-2">
                             <svg class="w-4 h-4 text-brand-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.5"></path>
                             </svg>
                             <span class="font-medium truncate">{{ job.experience }}</span>
                           </div>
                           <div class="flex items-center gap-2">
                             <svg class="w-4 h-4 text-brand-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                             </svg>
                             <span class="font-medium truncate">{{ job.salary }}</span>
                           </div>
                         </div>
                         
                         <p class="text-brand-gray text-sm leading-relaxed">{{ job.description }}</p>
                       </div>
                     </template>
                     
                     
                   </Card>
                 </div>
                
                                 <!-- PrimeVue Pagination -->
                 <div class="mt-6 flex justify-center">
                   <Paginator 
                     v-model:first="paginatorFirst"
                     :rows="jobsPerPage"
                     :totalRecords="allJobs.length"
                     @page="onPageChange"
                     :template="{ 
                       '480px': 'PrevPageLink PageLinks NextPageLink',
                       '768px': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
                       '1024px': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
                     }"
                     class="border-0"
                   />
                 </div>
                
                <!-- Info Text -->
                <div class="mt-6 text-center">
                  <p class="text-sm text-brand-gray">
                    Zgjidhni pozicionin që ju përshtat për të aplikuar
                  </p>
                </div>
              </div>
            </div>

            <!-- Right Side: Application Form -->
            <div class="bg-brand-white border border-brand-light-gray rounded-2xl overflow-hidden shadow-xl">
              <div class="p-6 md:p-8">
                <h3 class="text-2xl font-bold text-brand-black mb-6">Apliko Tani</h3>
                
                
                
                                                  <!-- Application Form -->
                 <form @submit.prevent="submitApplication" class="space-y-4 lg:space-y-6">
                   <!-- Job Opening Dropdown - Moved to TOP -->
                   <div>
                     <label class="block text-sm font-medium text-brand-gray mb-2">Pozicioni i Hapur *</label>
                     <Dropdown 
                       v-model="applicationForm.jobOpening"
                       :options="jobOpeningOptions"
                       placeholder="Zgjidhni pozicionin"
                       class="w-full"
                       :class="{ 'p-invalid': formErrors.jobOpening }"
                       appendTo="body"
                       scrollHeight="200px"
                       @change="onJobOpeningChange"
                       :key="`dropdown-${selectedJob}`"
                       optionLabel="label"
                       optionValue="value"
                     />
                     <small v-if="formErrors.jobOpening" class="p-error">{{ formErrors.jobOpening }}</small>
                   </div>

                   <!-- Name -->
                   <div>
                     <label class="block text-sm font-medium text-brand-gray mb-2">Emri *</label>
                     <InputText 
                       v-model="applicationForm.firstName"
                       placeholder="Shkruani emrin tuaj"
                       class="w-full"
                       :class="{ 'p-invalid': formErrors.firstName }"
                     />
                     <small v-if="formErrors.firstName" class="p-error">{{ formErrors.firstName }}</small>
                   </div>
                   
                   <!-- Surname -->
                   <div>
                     <label class="block text-sm font-medium text-brand-gray mb-2">Mbiemri *</label>
                     <InputText 
                       v-model="applicationForm.lastName"
                       placeholder="Shkruani mbiemrin tuaj"
                       class="w-full"
                       :class="{ 'p-invalid': formErrors.lastName }"
                     />
                     <small v-if="formErrors.lastName" class="p-error">{{ formErrors.lastName }}</small>
                   </div>

                   <!-- Genre -->
                   <div>
                     <label class="block text-sm font-medium text-brand-gray mb-2">Gjinia *</label>
                     <Dropdown 
                       v-model="applicationForm.genre"
                       :options="genreOptions"
                       placeholder="Zgjidhni gjininë"
                       class="w-full"
                       :class="{ 'p-invalid': formErrors.genre }"
                       appendTo="body"
                       scrollHeight="200px"
                       optionLabel="label"
                       optionValue="value"
                     />
                     <small v-if="formErrors.genre" class="p-error">{{ formErrors.genre }}</small>
                   </div>

                   <!-- Birthday -->
                   <div>
                     <label class="block text-sm font-medium text-brand-gray mb-2">Datëlindja *</label>
                                           <Calendar 
                        v-model="applicationForm.birthday"
                        placeholder="Zgjidhni datëlindjen"
                        class="w-full"
                        :class="{ 'p-invalid': formErrors.birthday }"
                        appendTo="body"
                        :showIcon="true"
                        dateFormat="dd/mm/yy"
                        :maxDate="new Date()"
                        :touchUI="false"
                        :showButtonBar="false"
                        :showClearButton="false"
                        :showWeek="false"
                        :showOtherMonths="false"
                        :hideOnDateTimeSelect="true"
                        :inline="false"
                        :panelClass="'p-calendar-panel-compact'"
                      />
                     <small v-if="formErrors.birthday" class="p-error">{{ formErrors.birthday }}</small>
                   </div>

                   <!-- Phone Number -->
                   <div>
                     <label class="block text-sm font-medium text-brand-gray mb-2">Numri i Telefonit *</label>
                     <InputText 
                       v-model="applicationForm.phone"
                       placeholder="+355 12 345 678"
                       class="w-full"
                       :class="{ 'p-invalid': formErrors.phone }"
                     />
                     <small v-if="formErrors.phone" class="p-error">{{ formErrors.phone }}</small>
                   </div>



                   <!-- City Picker -->
                   <div>
                     <label class="block text-sm font-medium text-brand-gray mb-2">Qyteti *</label>
                     <Dropdown 
                       v-model="applicationForm.city"
                       :options="cityOptions"
                       placeholder="Zgjidhni qytetin"
                       class="w-full"
                       :class="{ 'p-invalid': formErrors.city }"
                       appendTo="body"
                       scrollHeight="200px"
                       optionLabel="label"
                       optionValue="value"
                     />
                     <small v-if="formErrors.city" class="p-error">{{ formErrors.city }}</small>
                   </div>

                                       <!-- Resume Upload -->
                    <div>
                      <label class="block text-sm font-medium text-brand-gray mb-2">CV/Resume *</label>
                      
                      <!-- File Upload Area -->
                      <div class="relative">
                        <!-- Upload Button -->
                        <div v-if="!applicationForm.cv" class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-brand-primary/50 transition-colors cursor-pointer" @click="triggerFileInput">
                          <div class="flex flex-col items-center gap-3">
                            <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                            <div>
                              <p class="text-sm font-medium text-brand-gray">Klikoni për të zgjedhur CV-në</p>
                              <p class="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (max 5MB)</p>
                            </div>
                          </div>
                        </div>
                        
                        <!-- File Selected Display -->
                        <div v-if="applicationForm.cv" class="border border-gray-200 rounded-lg p-4 bg-white">
                          <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                              <!-- File Icon -->
                              <div class="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                                <svg v-if="getFileExtension(applicationForm.cv.name) === 'pdf'" class="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                                </svg>
                                <svg v-else class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                                </svg>
                              </div>
                              
                              <!-- File Info -->
                              <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-brand-black truncate">{{ applicationForm.cv.name }}</p>
                                <p class="text-xs text-gray-500">{{ formatFileSize(applicationForm.cv.size) }}</p>
                              </div>
                            </div>
                            
                            <!-- Remove Button -->
                            <button 
                              type="button"
                              @click="removeFile"
                              class="p-2 text-gray-400 hover:text-red-500 hover:bg-gray-50 rounded-full transition-colors"
                              title="Hiq CV-në"
                            >
                              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        
                        <!-- Hidden File Input -->
                        <input 
                          ref="fileInput"
                          type="file" 
                          accept=".pdf,.doc,.docx"
                          class="hidden"
                          @change="onFileSelect"
                        />
                      </div>
                      
                      <small v-if="formErrors.cv" class="p-error block mt-1">{{ formErrors.cv }}</small>
                    </div>

                                                           <!-- Terms and Submit -->
                      <div class="space-y-4">
                        <div class="flex items-start gap-3">
                                                     <input 
                             type="checkbox" 
                             id="agreeToTerms"
                             v-model="applicationForm.agreeToTerms"
                             class="mt-1 h-4 w-4 text-brand-primary rounded focus:outline-none focus:ring-0 border-0"
                           />
                          <div class="flex-1 min-w-0">
                            <label for="agreeToTerms" class="text-sm text-brand-gray leading-relaxed cursor-pointer">
                              Pajtohem me <a href="#" class="text-brand-primary hover:underline">kushtet e përdorimit</a> 
                              dhe <a href="#" class="text-brand-primary hover:underline">politikën e privatësisë</a> *
                            </label>
                            <small v-if="formErrors.agreeToTerms" class="p-error block mt-1">{{ formErrors.agreeToTerms }}</small>
                          </div>
                        </div>

                     <Button 
                       type="submit"
                       label="Dërgo Aplikimin"
                       icon="pi pi-send"
                       size="large"
                       severity="primary"
                       class="w-full"
                       :loading="isSubmitting"
                     />
                   </div>
                </form>
              </div>
            </div>
          </div>
       </div>
     </div>

    <!-- Application Process -->
    <div class="py-12 md:py-16 lg:py-24 bg-brand-light">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-black mb-4 md:mb-6">Si të Aplikoni</h2>
          <p class="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto px-4">Procesi i thjeshtë dhe transparent për të aplikuar në EUROMITI</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
    <div class="py-12 md:py-16 lg:py-24 bg-brand-white">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-6 md:p-8 lg:p-12 text-center">
          <h2 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-black mb-4 md:mb-6">Keni Pyetje?</h2>
          <p class="text-lg md:text-xl text-brand-gray max-w-2xl mx-auto mb-6 md:mb-8 px-4">
            Ekipi ynë i Burrave të Burrave është këtu për t'ju ndihmuar me çdo pyetje që keni për mundësitë e punësimit
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              label="Kontaktoni HR"
              icon="pi pi-envelope"
              size="large"
              severity="primary"
              class="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold shadow-lg hover:shadow-xl w-full sm:w-auto"
              @click="contactHR"
            />
            <Button 
              label="Na Telefononi"
              icon="pi pi-phone"
              size="large"
              severity="secondary"
              class="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold shadow-lg hover:shadow-xl w-full sm:w-auto"
              @click="callHR"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, watch } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Paginator from 'primevue/paginator'

import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Calendar from 'primevue/calendar'


import Toast from 'primevue/toast'

// Reactive state for selected job
const selectedJob = ref('')

// File input ref
const fileInput = ref<HTMLInputElement>()

// Pagination state
const currentPage = ref(1)
const jobsPerPage = 5

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
const paginatorFirst = computed(() => (currentPage.value - 1) * jobsPerPage)

const paginatedJobs = computed(() => {
  const start = (currentPage.value - 1) * jobsPerPage
  const end = start + jobsPerPage
  return allJobs.slice(start, end)
})

 // Function to select a job for application form
 const selectJobForApplication = async (job: any) => {
   console.log('Selecting job:', job.title)
   selectedJob.value = job.title
   applicationForm.value.jobOpening = job.title
   // Clear any previous form errors for job opening
   formErrors.value.jobOpening = ''
   console.log('Form job opening set to:', applicationForm.value.jobOpening)
   
   // Ensure DOM updates before proceeding
   await nextTick()
   console.log('After nextTick - Form job opening:', applicationForm.value.jobOpening)
 }
 
 // Function to handle job opening dropdown change
 const onJobOpeningChange = (event: any) => {
   if (event.value) {
     selectedJob.value = event.value
     applicationForm.value.jobOpening = event.value
   }
 }

// Handle PrimeVue pagination
const onPageChange = (event: any) => {
  currentPage.value = Math.floor(event.first / jobsPerPage) + 1
  // Smooth scroll to top of job listings on mobile
  if (window.innerWidth <= 768) {
    const jobSection = document.getElementById('positions')
    if (jobSection) {
      jobSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

   // Application form data
  const applicationForm = ref({
    firstName: '',
    lastName: '',
    genre: '',
    birthday: null,
    phone: '',
    jobOpening: '',
    city: '',
    cv: null as File | null,
    agreeToTerms: false
  })

 // Form validation errors
 const formErrors = ref({
   firstName: '',
   lastName: '',
   genre: '',
   birthday: '',
   phone: '',
   jobOpening: '',
   city: '',
   cv: '',
   agreeToTerms: ''
 })

// Form submission state
const isSubmitting = ref(false)

 // Dropdown options
 const genreOptions = [
   { label: 'Mashkull', value: 'male' },
   { label: 'Femër', value: 'female' },
   { label: 'Tjetër', value: 'other' }
 ]
 
       const jobOpeningOptions = computed(() => {
     console.log('Computing job options from allJobs:', allJobs.length)
     return allJobs.map(job => ({
       label: job.title,
       value: job.title
     }))
   })
 
   const cityOptions = [
    { label: 'Prishtinë', value: 'prishtine' },
    { label: 'Prizren', value: 'prizren' },
    { label: 'Pejë', value: 'peje' },
    { label: 'Gjakovë', value: 'gjakove' },
    { label: 'Gjilan', value: 'gjilan' },
    { label: 'Ferizaj', value: 'ferizaj' },
    { label: 'Mitrovicë', value: 'mitrovice' },
    { label: 'Vushtrri', value: 'vushtrri' },
    { label: 'Deçan', value: 'decan' },
    { label: 'Istog', value: 'istog' },
    { label: 'Klinë', value: 'kline' },
    { label: 'Lipjan', value: 'lipjan' },
    { label: 'Obiliq', value: 'obiliq' },
    { label: 'Podujevë', value: 'podujeve' },
    { label: 'Rahovec', value: 'rahovec' },
    { label: 'Shtime', value: 'shtime' },
    { label: 'Shtërpcë', value: 'shtterpce' },
    { label: 'Skenderaj', value: 'skenderaj' },
    { label: 'Suharekë', value: 'suhareke' },
    { label: 'Viti', value: 'viti' },
    { label: 'Zubin Potok', value: 'zubin-potok' },
    { label: 'Zveçan', value: 'zvecan' },
    { label: 'Tjetër', value: 'other' }
  ]

// File upload handler
const onFileSelect = (event: any) => {
  if (event.target.files && event.target.files.length > 0) {
    const file = event.target.files[0]
    
    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert('File është shumë i madh. Maksimumi është 5MB.')
      return
    }
    
    // Check file type
    const allowedTypes = ['.pdf', '.doc', '.docx']
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()
    
    if (!allowedTypes.includes(fileExtension)) {
      alert('Formati i file nuk është i lejuar. Përdorni PDF, DOC ose DOCX.')
      return
    }
    
    applicationForm.value.cv = file
    formErrors.value.cv = ''
  }
}

// Trigger file input click
const triggerFileInput = () => {
  fileInput.value?.click()
}

// Remove selected file
const removeFile = () => {
  applicationForm.value.cv = null
  formErrors.value.cv = ''
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// Get file extension
const getFileExtension = (filename: string) => {
  return filename.split('.').pop()?.toLowerCase() || ''
}

// Format file size
const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

 // Form validation
 const validateForm = () => {
   const errors: any = {}
   
   if (!applicationForm.value.firstName.trim()) {
     errors.firstName = 'Emri është i detyrueshëm'
   }
   
   if (!applicationForm.value.lastName.trim()) {
     errors.lastName = 'Mbiemri është i detyrueshëm'
   }
   
   if (!applicationForm.value.genre) {
     errors.genre = 'Gjinia është e detyrueshme'
   }
   
   if (!applicationForm.value.birthday) {
     errors.birthday = 'Datëlindja është e detyrueshme'
   }
   
   if (!applicationForm.value.phone.trim()) {
     errors.phone = 'Telefoni është i detyrueshëm'
   }
   
   if (!applicationForm.value.jobOpening) {
     errors.jobOpening = 'Pozicioni i hapur është i detyrueshëm'
   }
   
   if (!applicationForm.value.city) {
     errors.city = 'Qyteti është i detyrueshëm'
   }
   
   if (!applicationForm.value.cv) {
     errors.cv = 'CV-ja është e detyrueshme'
   }
   
   if (!applicationForm.value.agreeToTerms) {
     errors.agreeToTerms = 'Duhet të pajtoheni me kushtet'
   }
   
   formErrors.value = errors
   return Object.keys(errors).length === 0
 }

// Form submission
const submitApplication = async () => {
  if (!validateForm()) {
    return
  }
  
     if (!applicationForm.value.jobOpening) {
     // Show error that no job is selected
     alert('Ju lutemi zgjidhni një pozicion për të aplikuar.')
     return
   }
  
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
         // Success - reset form
     applicationForm.value = {
       firstName: '',
       lastName: '',
       genre: '',
       birthday: null,
       phone: '',
       jobOpening: '',
       city: '',
       cv: null,
       agreeToTerms: false
     }
    
    // Show success message (you can implement Toast here)
    alert('Aplikimi u dërgua me sukses! Do t\'ju kontaktojmë së shpejti.')
    
  } catch (error) {
    // Show error message
    alert('Ndodhi një gabim. Ju lutemi provoni përsëri.')
  } finally {
    isSubmitting.value = false
  }
}

 // Watch for changes in the form
 watch(() => applicationForm.value.jobOpening, (newVal, oldVal) => {
   console.log('Job opening changed from:', oldVal, 'to:', newVal)
 })
 
 // Contact functions
 const contactHR = () => {
   window.open('mailto:hr@euromiti.al', '_self')
 }
 
 const callHR = () => {
   window.open('tel:+35512345678', '_self')
 }
</script>

 <style scoped>
 /* All styling now handled by Tailwind CSS classes */
 </style>

<style>
/* Compact calendar styling */
.p-calendar-panel-compact .p-datepicker {
  font-size: 0.875rem;
  padding: 0.5rem;
}

.p-calendar-panel-compact .p-datepicker table {
  font-size: 0.875rem;
}

.p-calendar-panel-compact .p-datepicker table th,
.p-calendar-panel-compact .p-datepicker table td {
  padding: 0.25rem;
  min-width: 2rem;
  height: 2rem;
}

.p-calendar-panel-compact .p-datepicker-header {
  padding: 0.5rem;
  font-size: 0.875rem;
}

.p-calendar-panel-compact .p-datepicker-title {
  font-size: 1rem;
}

.p-calendar-panel-compact .p-datepicker-prev,
.p-calendar-panel-compact .p-datepicker-next {
  width: 2rem;
  height: 2rem;
}
</style>
