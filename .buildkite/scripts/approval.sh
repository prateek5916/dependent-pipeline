#!/bin/bash
set -eo pipefail

APPROVAL_RESPONSE="$(buildkite-agent meta-data get "approval-stage")"
echo "${APPROVAL_RESPONSE}"

export APPROVAL_RESPONSE
