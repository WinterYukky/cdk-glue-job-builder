import { CdkCustomResourceHandler } from 'aws-lambda';

export const handler: CdkCustomResourceHandler = async (event) => {
  console.log(event);
  const props = event.ResourceProperties;
  if (props.expect !== props.actual) {
    throw new Error(
      `Output is not match.\nexpect: ${props.expect}\nactual: ${props.actual}`
    );
  }
  return {};
};
