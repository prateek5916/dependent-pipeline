#!/bin/bash
set -eo pipefail

APPROVAL_RESPONSE="$(buildkite-agent meta-data get "approval-stage")"
echo "approval: $APPROVAL_RESPONSE"
