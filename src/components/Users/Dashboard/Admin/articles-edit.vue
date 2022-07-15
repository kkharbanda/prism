<template>
   <dashboard-title 
      title="Edit article"
   />

   <router-link :to="{name:'admin_edit',params:{id:'1eNSbptqK8f9Glu91vO3'}}">
       CHANGE
   </router-link>

    <div v-if="article">
   <Form @submit="onSubmit" :validation-schema="formSchema">

         <div class="form-group">
            <Field name="name" v-model="article.name" v-slot="{ field, errors, errorMessage }">
               <form-element
                  :field="field"
                  :errors="errors"
                  :errorMessage="errorMessage"
                  element="input"
                  type="text"
                  placeholder="Name of the game"
               />
            </Field>
         </div>
         
         <br/>

         <div class="form-group">
            <Field name="title" v-model="article.title" v-slot="{ field, errors, errorMessage }">
               <form-element
                  :field="field"
                  :errors="errors"
                  :errorMessage="errorMessage"
                  element="input"
                  type="text"
                  placeholder="Title of the article"
               />
            </Field>
         </div>

         <br/>

         <div class="form-group">
            <Field name="excerpt" v-model="article.excerpt" v-slot="{ field, errors, errorMessage }">
               <form-element
                  :field="field"
                  :errors="errors"
                  :errorMessage="errorMessage"
                  element="textarea"
                  placeholder="Add an excerpt"
                  :rows="3"
               />
            </Field>
         </div>

         <br/>

         <wysiwyg @update="updateEditor" :content="article.editor"/>
         <Field name="editor" v-model="veditor" v-slot="{ field, errors, errorMessage }">
              <input
                  type="hidden"
                  id="veditor"
                  v-bind="field"
              />
               <div class="alert alert-danger" v-if="errors.length !== 0">
                     {{ errorMessage }}
               </div>
         </Field>


         <br/>

         <div class="form-group">
            <Field 
               name="rating" 
               v-slot="{ field, errors, errorMessage }"
               value="Select a rating"
               v-model="article.rating"
            >
               <form-element
                  :field="field"
                  :errors="errors"
                  :errorMessage="errorMessage"
                  element="select"
               >
                  <option value="Select a rating" selected>Select a rating</option>
                  <option v-for="rating in ratings" :key="rating" :value="rating">
                     {{ rating }}
                  </option>
               </form-element>
            </Field>
         </div>
         
         <br/>

         <div class="form-group">
            <Field name="img"  v-model="article.img" v-slot="{ field, errors, errorMessage }">
               <form-element
                  :field="field"
                  :errors="errors"
                  :errorMessage="errorMessage"
                  element="input"
                  type="text"
                  placeholder="Add the source of the img"
               />
            </Field>
         </div>

         <br/>

         <button
         type="submit"
         class="btn btn-primary"
         :disabled="loading"
         >
            Edit article
         </button>
   </Form>
    </div>
</template>

<script>
/* eslint-disable */
import wysiwyg from '../../../Utils/wysiwyg-app.vue';
import FormElement from '../../../Utils/form_elements.vue';
import { addArticleSchema } from '@/Tools/formschema.js';
import DashboardTitle from '../../../Utils/dash-Title.vue';
import { Field, Form } from 'vee-validate';

export default {
   components:{
      DashboardTitle,
      Field,
      Form,
      FormElement,
      wysiwyg
   },
   data(){
      return {
         article:null,
         loading:false,
         veditor:'',
         ratings:[1,2,3,4,5],
         formSchema:addArticleSchema
      }
   },
   methods:{
      onSubmit(values){ 
        this.loading = true;
        this.$store.dispatch('articles/updateArticle',{
            values,
            id: this.$route.params.id
        }).finally(()=>{
            this.loading = false;
        });
      },
      updateEditor(value){
         this.veditor = value;
      },
      getArticle(id){
            this.$store.dispatch('articles/getArticle',id)
            .then(( article )=>{
                if(article){
                    this.article = article;
                } else {
                    this.$router.push({name:'404'})
                }
            })
      }
   },
   beforeRouteUpdate(to){
        this.getArticle(to.params.id);
   },
   mounted(){
      this.getArticle(this.$route.params.id);
   }
}

</script>