#!/bin/bash

if [[ "$BUILDKITE_COMMAND_EXIT_STATUS" != "0" ]]
then
  echo "Job Failed"
else
  echo "Job Executed" 
