import {useToast} from 'react-native-toast-notifications';

export function useAppToast() {
  const {show} = useToast();

  function showSuccessToast(message: string) {
    show(message, {type: 'success'});
  }

  function showErrorToast(message: string) {
    show(message, {type: 'error'});
  }

  function showBasicToast(message: string) {
    show(message, {type: 'basic'});
  }

  function fixedSuccessToast(message: string) {
    show(message, {type: 'fixed'});
  }

  function warningSuccessToast(message: string) {
    show(message, {type: 'warning'});
  }

  return {
    showSuccessToast,
    showErrorToast,
    showBasicToast,
    fixedSuccessToast,
    warningSuccessToast,
  } as const;
}
