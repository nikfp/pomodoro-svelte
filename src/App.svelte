<script lang="ts">
  let formValues = {
    title: "",
    duration: 25,
  };
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
      bind:value={formValues.duration}
    />
  </div>
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
