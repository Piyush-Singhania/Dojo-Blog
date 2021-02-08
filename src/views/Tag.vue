<template>
    <div class="tag">
        <div v-if="error">{{error}}</div>
        <div v-if="posts.length" class="layout">
            <PostList :posts="filteredPosts" />
            <TagCloud :posts="posts" />
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import {useRoute} from 'vue-router'
import getPosts from '../composables/getPosts'
import { computed } from 'vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'

export default {
    components: {Spinner, PostList, TagCloud},
    setup(){
        const route = useRoute();
        const {posts, error, load} = getPosts();
        load();

        const filteredPosts = computed(() => {
            return posts.value.filter((post) => post.tags.includes(route.params.tag))
        })

        return {filteredPosts, error, posts}
    },
}
</script>

<style>
  .layout{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
  .tag{
      max-width: 1100px;
      margin: 0px auto;
      padding: 10px;
  }
</style>