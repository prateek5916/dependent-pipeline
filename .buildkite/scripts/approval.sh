#!/bin/bash

# APPROVAL_RESPONSE="$(buildkite-agent meta-data get "release_type")"
# echo "approval: $APPROVAL_RESPONSE"
# echo "My name is Khan"



# demo="$(buildkite-agent step get "outcome" --step "one")" 
# echo $demo

# echo $var1
# echo $var2

sleep 30s
curl "https://api.buildkite.com/v2/organizations/prateek-inc/pipelines/dependent-pipeline-example-tests/builds/{number}"

curl -X PUT "https://api.buildkite.com/v2/organizations/prateek-inc/pipelines/dependent-pipeline-example-tests/builds/{number}/cancel"
