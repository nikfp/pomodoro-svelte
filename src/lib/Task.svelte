<script lang="ts">
  import type { TaskTimer } from "./stores/task";

  export let task: TaskTimer;

  const { durationInSeconds, startTimer, stopTimer, title } = task;

  $: taskMinutes = Math.floor($durationInSeconds / 60);
  $: taskSeconds = $durationInSeconds % 60;
</script>

<div class="task">
  <h3>{title}</h3>
  <p>{taskMinutes}:{taskSeconds}</p>
  <button type="button" on:click={startTimer}>Start Timer</button>
  <button type="button" on:click={stopTimer}>Stop Timer</button>
</div>

<style>
  .task {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
