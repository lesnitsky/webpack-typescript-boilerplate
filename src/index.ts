import { sendMessage } from './sendMessage';
import { expectNonEmptyString } from './assert';
import { State } from './state';

(window as any).sendMessage = sendMessage;

const state = new State();

state.clientId = window.location.hash.replace('#', '');

try {
  expectNonEmptyString(state.clientId);
} catch (err) {
  state.clientId = 'host';
}
