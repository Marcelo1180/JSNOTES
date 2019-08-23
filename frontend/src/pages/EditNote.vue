<template>
  <q-page padding style="z-index: 99999">
    <!-- content -->
    <q-input placeholder="Title" v-model="username" bg-color="white" class="full-width">
      <template v-slot:prepend>
        <q-icon name="send" />
      </template>
    </q-input>
    <vue-simplemde
      style="z-index: 99999"
      v-model="content"
      preview-class="markdown-body"
      :highlight="true"
    />
  </q-page>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
import hljs from 'highlight.js'

window.hljs = hljs
export default {
  components: {
    VueSimplemde
  }
}
</script>

<style>
@import "~simplemde/dist/simplemde.min.css";
@import "~github-markdown-css";
@import "~highlight.js/styles/github.css";
</style>
