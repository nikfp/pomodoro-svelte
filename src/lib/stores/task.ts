import { get, writable } from "svelte/store";

export type TaskInfo = {
  title: string;
  durationInMinutes: number;
};

export type Task = ReturnType<typeof createTask>;

export function createTask(info: TaskInfo) {
  const durationInSeconds = writable(info.durationInMinutes * 60);

  let timer: ReturnType<typeof setInterval> | null = null;

  function startTimer() {
    if (get(durationInSeconds) <= 0) {
      return;
    }

    if (timer) return;

    timer = setInterval(() => {
      if (get(durationInSeconds) <= 0 && timer) {
        clearInterval(timer);
        timer = null;
      }

      durationInSeconds.update((value) => value - 1);
    }, 1000);
  }

  function stopTimer() {
    if (!timer) return;

    clearInterval(timer);
    timer = null;
  }

  return {
    durationInSeconds,
    startTimer,
    stopTimer,
    title: info.title,
  };
}
