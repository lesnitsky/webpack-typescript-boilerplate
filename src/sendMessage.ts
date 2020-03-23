import { messages } from './firebase';
import { expectDefined } from './assert';
import { formatDate } from './formatDate';

interface SendMessageParams {
  content: string;
  to: string;
}

export async function sendMessage(params: SendMessageParams) {
  const createdAt = formatDate(new Date());

  expectDefined(params.content);
  expectDefined(params.to);

  return messages.add({
    createdAt,
    content: params.content,
    to: params.to,
  });
}
