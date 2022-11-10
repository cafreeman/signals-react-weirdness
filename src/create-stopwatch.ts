import { signal, computed } from '@preact/signals-react';

export function createStopwatch() {
  const rawTime = signal(new Date());

  let interval: number;

  const time = computed(() => {
    const now = rawTime.value;
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    }).format(now);
  });

  return {
    time,
    start: () => {
      interval = setInterval(() => {
        console.log('starting');
        rawTime.value = new Date();
      }, 1000);
    },
    stop: () => {
      console.log('stopping');
      clearInterval(interval);
    },
  };
}
