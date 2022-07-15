<template>
   <dashboard-title title="Blogs" />

   <div v-if="adminArticles">

      <a-table :columns="columns" :pagination="false" :data-source="adminArticles" :row-key="record => record.id"
         bordered>
         <!-- <template #name="{ text }">
            <a>{{ text }}</a>
         </template> -->

         <template #game="{ record }">
            <router-link :to="{ name: 'article', params: { id: record.id } }" target="_blank">
               {{ record.name }}
            </router-link>
         </template>

         <template #owner="{ record }">
            <span>
               {{ record.owner.firstname }} {{ record.owner.lastname }}
            </span>
         </template>

         <template #time="{ record }">
            <span>
               {{ record.timestamp.toDate().toDateString() }}
            </span>
         </template><template #delete="{ record }">
            <a-popconfirm title="Are you sure ?" ok-text="Yes" cancel-text="No" @confirm="removeById(record.id)">
               <template #icon>
                  <question-circle-outlined style="color: red" />
               </template>
               <button class="btn btn-danger btn-sm">Delete article</button>
            </a-popconfirm>
         </template>
         <template #Update="{ record }">
            <router-link :to="{ name: 'admin_edit', params: { id: record.id } }" target="_blank">
               <button class="btn btn-primary btn-sm"> Update blogs</button>
            </router-link>

         </template>
         <template #title>
            <router-link :to="{ name: 'admin_add' }" target="_blank">
               <button class="btn btn-secondary"> Add blogs</button>
            </router-link>
         </template>

      </a-table>
      <br />
      <button class="btn btn-secondary" @click="loadmorearticles({ limit: 1 })"> Load More Articles</button>

   </div>

</template>



<script>
import { QuestionCircleOutlined } from '@ant-design/icons-vue';
import DashboardTitle from '../../../Utils/dash-Title.vue';
import { mapActions } from 'vuex'

export default {
   components: {
      DashboardTitle,
      QuestionCircleOutlined
   },
   data() {
      return {
         columns
      }
   },
   computed: {
      adminArticles() {
         return this.$store.getters['articles/getAdminArticles']
      }
   },
   mounted() {
      this.getAdminArticles({ limit: 1 })
   },
   methods: {
      ...mapActions('articles', [
         'getAdminArticles',
         'loadmorearticles',
         'removeById'
      ])
   }
}

const columns = [
   {
      title: 'Title',
      slots: { customRender: 'game' }
   },
   {
      title: 'Owner',
      slots: { customRender: 'owner' }
   },
   {
      title: 'Rating',
      dataIndex: 'rating',
   },
   {
      title: 'Created at',
      slots: { customRender: 'time' }
   },
   {
      title: '',
      slots: { customRender: 'delete' }
   },
   {
      title: 'Edit',
      slots: { customRender: 'Update' }
   }

]


</script>
