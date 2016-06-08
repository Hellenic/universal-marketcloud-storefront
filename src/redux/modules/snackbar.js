const DISPLAY = 'app/snackbar/DISPLAY';
const HIDE = 'app/snackbar/HIDE';

const initialState = {
  text: '',
  visible: false,
  duration: 3000
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DISPLAY:
      return {
        text: action.text,
        duration: action.duration,
        visible: true
      };
    case HIDE:
      return {
        text: '',
        visible: false
      };
    default:
      return state;
  }
}

export function display(text, duration) {
  return { type: DISPLAY, text, duration };
}

export function hide() {
  return { type: HIDE };
}

export function handleRequestClose() {
  return { type: HIDE };
}
