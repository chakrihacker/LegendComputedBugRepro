import {computed, observable} from '@legendapp/state';

const delay = delayInms => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
};

export function getApiStatus(input) {
  return {
    isPending: input === 'pending',
    isSuccess: input === 'success',
    isError: input === 'error',
    isInit: input === 'init',
    isLoading: input === 'pending' || input === 'init',
  };
}

export const myModel = observable({
  apiStatus: 'init',
  data: [],
  error: undefined,
});

export const myComputed = computed(() => {
  const status = myModel.apiStatus.get?.();
  return {
    ...getApiStatus(status),
  };
});

myComputed.onChange(val => {
  console.log({val});
});

export const makeApiCall = async () => {
  myModel.apiStatus.set('pending');
  await delay(1000);
  myModel.apiStatus.set('success');
  myModel.data.set([1, 2, 3]);
};
