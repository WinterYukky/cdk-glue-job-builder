import {
  CdkCustomResourceHandler,
  CdkCustomResourceIsCompleteHandler,
} from 'aws-lambda';
import * as AWS from 'aws-sdk';

type GlueJobRunStatus =
  | 'STARTING'
  | 'RUNNING'
  | 'STOPPING'
  | 'STOPPED'
  | 'SUCCEEDED'
  | 'FAILED'
  | 'ERROR'
  | 'TIMEOUT';
const glue = new AWS.Glue();

export const onEvent: CdkCustomResourceHandler = async (event) => {
  console.log(event);
  return event.ResourceProperties;
};

export const isComplete: CdkCustomResourceIsCompleteHandler = async (event) => {
  console.log(event);
  const jobResult = await glue
    .getJobRun({
      JobName: event.ResourceProperties.jobName,
      RunId: event.ResourceProperties.runId,
    })
    .promise();
  console.log(jobResult);
  const state =
    (jobResult.JobRun?.JobRunState as GlueJobRunStatus) ?? 'RUNNING';
  switch (state) {
    case 'SUCCEEDED':
      return {
        IsComplete: true,
      };
    case 'FAILED':
    case 'ERROR':
    case 'TIMEOUT':
      throw new Error(jobResult.JobRun?.ErrorMessage);
    default:
      return {
        IsComplete: false,
      };
  }
};
