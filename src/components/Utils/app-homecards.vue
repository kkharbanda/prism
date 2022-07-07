<template>
    <a-col class="article_card">
          <router-link :to="{name:'article',params:{id:article.id}}">
    <a-card hoverable style="width: 240px">
        <template #cover>
            <img alt="image_article" :src="`https://via.placeholder.com/1080/720?${article.id}`">
        </template>
        <a-card-meta title="Europe Street beat">
            <template #description>
                <p>pLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></template>
      
        </a-card-meta>
    </a-card>
    </router-link>
</a-col>

</template>
<script>
export default {
    props:['span','article','index']
}
</script>