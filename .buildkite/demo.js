const downstream_pipeline_name = "dependent-pipeline-example-deploy"
const downstream_branch_name = "master"


exports.upstreamTrigger = (downstream_pipeline_name, downstream_branch_name) => {
  return[{
    wait,
    depends_on: "next_file",
    label: `:hammer: Triggering ${downstream_pipeline_name} for branch ${downstream_branch_name}`,
    trigger: downstream_pipeline_name,
    key: 'deploy',
    branches: downstream_branch_name,
    async: false,
    //timeout_in_minutes: 1,
    build: {
        commit: process.env.BUILDKITE_COMMIT,
        branch: process.env.BUILDKITE_BRANCH,
        message: process.env.BUILDKITE_MESSAGE,
    },
  }];
};