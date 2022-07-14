<template>
   <dashboard-title 
      title="Profile"
   />
   <div v-if="userData">
    <Form @submit="onSubmit" :validation-schema="formSchema">
    
     <div class="form-group">
         <Field name="firstname" v-model="userData.firstname" v-slot="{ field, errors, errorMessage }">
            <form-element :field="field" :errors="errors" :errorMessage="errorMessage" element="input" type="text"
               placeholder="Please enter your first name" />
         </Field>
      </div>
      <br />
      <div class="form-group">
         <Field name="lastname" v-model="userData.lastname" v-slot="{ field, errors, errorMessage }">
            <form-element :field="field" :errors="errors" :errorMessage="errorMessage" element="input" type="text"
               placeholder="Please enter your lastname" />
         </Field>
      </div>
    <br/>
     <button
         type="submit"
         class="btn btn-primary"
        
         >
            update profile
         </button>
    </Form>
    </div>
    
</template>


<script>
/* eslint-disable */
import DashboardTitle from '../../../Utils/dash-Title.vue';
import FormElement from '../../../Utils/form_elements.vue';
import { Field, Form } from 'vee-validate';
import { addProfileSchema } from '@/Tools/formschema.js';
export default {
   components:{
      DashboardTitle,
      FormElement,
      Field,
      Form
   },

   data() {
      return {
         
         formSchema: addProfileSchema
      }
   },
   computed:{
      userData(){
         return JSON.parse(JSON.stringify(this.$store.getters['auth/getUserData']));
      }
   },
   methods: {
      onSubmit(values){
         console.log(values);
           this.$store.dispatch('auth/updateProfile',values);
      }
   }
}

</script>