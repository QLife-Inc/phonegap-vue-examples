<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Network is {{ stateText }}</h2>
    <button @click="showDialog">click</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { networkState } from "@/stores/network";

@Component
export default class About extends Vue {
  showDialog() {
    // cordova-plugin-device example
    const message = this.toKeyValueLines(device);
    // cordova-plugin-dialogs example
    navigator.notification.alert(message, () => {}, "Device Info", "Done");
  }

  get stateText() {
    return networkState.stateText;
  }

  private toKeyValueLines(object: any) {
    return Object.keys(object)
      .sort()
      .reduce(
        (arr, key) => arr.concat([`${key} = ${object[key]}`]),
        [] as string[]
      )
      .join("\n");
  }
}
</script>
