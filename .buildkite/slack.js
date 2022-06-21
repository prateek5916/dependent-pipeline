#!/usr/bin/env node
const { IncomingWebhook } = require('@slack/webhook');
const channel = 'slack-notify';
const url = 'https://hooks.slack.com/services/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'
       
//'https://hooks.slack.com/services/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'

function postMessage(text) {
  const webhook = new IncomingWebhook(url);
  try {
    webhook.send({
      channel,
      text,
      username: 'Buildkite',
      icon_emoji: ':buildkite:',
    });
    console.log(`Message sent to ${channel}`);
  } catch (e) {
    console.log('e: ', e);
  }
};

postMessage(":hammer: Hello!!!");

// // Send the notification
// (async () => {
//   await webhook.send({
//     text: 'I\'ve got news for you...',
//     channel,
//   });
// })();
// // postMessage(":hammer: Hello Ji");
