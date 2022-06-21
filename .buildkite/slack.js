#!/usr/bin/env node
const { IncomingWebhook } = require('@slack/webhook');

const channel = 'buildkite-alert';
const url = 'https://hooks.slack.com/services/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'

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

postMessage(":hammer: Hello Ji");