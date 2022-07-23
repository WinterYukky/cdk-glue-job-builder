import { awscdk } from 'projen';
const cdkVersion = '2.33.0';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'WinterYukky',
  authorAddress: '49480575+WinterYukky@users.noreply.github.com',
  cdkVersion,
  defaultReleaseBranch: 'main',
  name: 'cdk-glue-job-builder',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/WinterYukky/cdk-glue-job-builder.git',
  prettier: true,
  prettierOptions: {
    settings: {
      singleQuote: true,
    },
  },
  keywords: ['Glue'],
  eslintOptions: {
    dirs: ['src'],
    prettier: true,
  },
  deps: [
    `@aws-cdk/aws-glue-alpha@${cdkVersion}-alpha.0`,
  ] /* Runtime dependencies of this module. */,
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  peerDeps: [`@aws-cdk/aws-glue-alpha@${cdkVersion}-alpha.0`],
});
project.synth();
