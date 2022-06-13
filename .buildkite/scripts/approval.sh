#!/bin/bash
set -eo pipefail

APPROVAL_RESPONSE="$(buildkite-agent meta-data get "release_type")"
echo "approval: $APPROVAL_RESPONSE"
echo "My name is Khan"