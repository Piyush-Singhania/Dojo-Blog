<template>
  <div class="post">
      <router-link :to="{ name: 'Details', params: {id: post.id} }">
          <h3> {{post.title}} </h3>
      </router-link>
      <p> {{snippet}} </p>
      <span v-for="tag in post.tags" :key="tag" @click="handleTagClick(tag)">
          #{{tag}}
      </span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
    props: ['post'],
    setup(props){
        const snippet = computed(() => {
            return `${props.post.body.substring(0,100)}....`
        })
        const router = useRouter();
        const handleTagClick = (tag) => {
            router.push('/tags/' + tag );
        }
        return { snippet, handleTagClick }
    }
}
</script>

<style>

</style>