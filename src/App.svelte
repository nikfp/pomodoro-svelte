<script lang="ts">
  import Task from "./lib/Task.svelte";
  import { createTask, type TaskTimer, type TaskInfo } from "./lib/stores/task";

  let formValues: TaskInfo = {
    title: "",
    durationInMinutes: 25,
  };

  let tasks: TaskTimer[] = [];

  function addTaskToList() {
    const task = createTask(formValues);

    tasks.push(task);
    tasks = [...tasks];

    formValues = {
      title: "",
      durationInMinutes: 25,
    };
  }
</script>

<main>
  <h1>Pomodoro Timer</h1>

  <div class="new-timer-form">
    <label for="title">Title:</label>
    <input
      type="text"
      name="title"
      placeholder="Input title here"
      bind:value={formValues.title}
    />
    <label for="duration">Duration:</label>
    <input
      type="number"
      name="duration"
      min="0"
      bind:value={formValues.durationInMinutes}
    />
    <button type="button" on:click={addTaskToList}>Add Task</button>
  </div>

  {#each tasks as task}
    <Task {task} />
  {/each}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .new-timer-form {
    display: flex;
    flex-direction: column;
    max-width: 75%;
    align-items: center;
  }
</style>
