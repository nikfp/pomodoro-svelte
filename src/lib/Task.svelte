<script lang="ts">
  import { onMount } from "svelte";
  import type { TaskTimer } from "./stores/task";

  export let task: TaskTimer;
  export let deleteHook: () => void;

  const { durationInSeconds, startTimer, stopTimer, title } = task;

  onMount(() => {
    startTimer();
  });

  $: taskMinutes = Math.floor($durationInSeconds / 60);
  $: taskSeconds = $durationInSeconds % 60;
  $: taskTitle = title.length === 0 ? "Untitled Task" : title;

  function handleDelete() {
    stopTimer();
    deleteHook();
  }
</script>

<div class="task">
  <h3>{taskTitle}</h3>
  <p>{taskMinutes}:{taskSeconds}</p>
  <button type="button" on:click={startTimer}>Start Timer</button>
  <button type="button" on:click={stopTimer}>Stop Timer</button>
  <button type="button" on:click={handleDelete}>Delete Timer</button>
</div>

<style>
  .task {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid grey;
  }
</style>
